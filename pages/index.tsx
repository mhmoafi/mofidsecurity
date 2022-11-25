"use client";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Dropdown from "../src/components/global/Dropdown";
import Table from "../src/components/global/Table";
import {
  ALL_COINS_NUMBER,
  PER_PAGE,
} from "../src/constants/paginationsRequest";
import STRINGS from "../src/constants/strings";
import {
  requestGetCoins,
  requestGetCoinsMarket,
  requestSearchCoin,
} from "../src/lib/apiClient";
import { ICoins } from "../src/lib/interfaces/ICoins";
import { ICoinsMarket } from "../src/lib/interfaces/ICoinsMarket";
import { getCoinIdFromSearchSymbolResponse } from "../src/lib/utilities/searchHelper";

const tableHeaderTitles = [
  "#",
  "COINS",
  "PRICE",
  "24H",
  "7D",
  "MARKET CAP",
  "TOTAL VOLUME",
  "CIRCULATING SUPPLY",
];

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedCoin, setSelectedCoin] = useState<string>(
    STRINGS.DROPDOWN.DEFAULT_VALUE
  );
  let selectedCoinId = "";
  const pageCount: number = Math.ceil(ALL_COINS_NUMBER / PER_PAGE);

  const onCoinSelectClickHandler = (coin: string) => {
    setSelectedCoin(coin);
  };
  const onPageClickHandler = (pageNumber: number) => {
    setSelectedPage(pageNumber);
  };
  const onErrorHandler = () => {
    toast.error("Error while getting data!");
  };

  const queryClient = useQueryClient();
  const { data: coinsList, isFetching: isDropdownLoading } = useQuery<
    ICoins[],
    Error
  >("coins", async () => {
    return await requestGetCoins(onErrorHandler);
  });
  const {
    data: coinsMarketList,
    isFetching: isLoadingCoinMarket,
    refetch: getCoinsMarket,
  } = useQuery<ICoinsMarket[], Error>(
    ["coins-market", selectedPage],
    async () => {
      return await requestGetCoinsMarket(
        undefined,
        selectedPage,
        onErrorHandler
      );
    },
    {
      keepPreviousData: true,
    }
  );

  const { isFetching: isLoadingSearchCoin, refetch: searchSelectedCoin } =
    useQuery<any[], Error>(
      ["search-coin", selectedCoin],
      async () => {
        return await requestSearchCoin(selectedCoin, onErrorHandler);
      },
      {
        enabled: false,
        keepPreviousData: true,
        onSuccess: (res) => {
          selectedCoinId = getCoinIdFromSearchSymbolResponse(res, selectedCoin);
          if (selectedCoinId === "") {
            toast.info(
              "The exact match of this coin not found! Choosen coin set to All"
            );
            setSelectedCoin(STRINGS.DROPDOWN.DEFAULT_VALUE);
          } else {
            getSingleCoinMarket();
          }
        },
      }
    );
  const {
    data: selectedCoinMarketList,
    isFetching: isLoadingSingleCoinMarket,
    refetch: getSingleCoinMarket,
  } = useQuery<ICoinsMarket[], Error>(
    ["selectedCoin-market", selectedCoinId],
    async () => {
      return await requestGetCoinsMarket(
        selectedCoinId,
        undefined,
        onErrorHandler
      );
    },
    {
      enabled: false,
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (!selectedCoin || selectedCoin === STRINGS.DROPDOWN.DEFAULT_VALUE) {
      getCoinsMarket();
    } else {
      searchSelectedCoin();
    }
  }, [selectedCoin, getCoinsMarket, searchSelectedCoin]);

  useEffect(() => {
    if (!selectedCoin || selectedCoin === STRINGS.DROPDOWN.DEFAULT_VALUE) {
      if (pageCount && selectedPage < pageCount) {
        queryClient.prefetchQuery(["coins-market", selectedPage + 1], () =>
          requestGetCoinsMarket(undefined, selectedPage + 1)
        );
        queryClient.prefetchQuery(["coins-market", selectedPage + 2], () =>
          requestGetCoinsMarket(undefined, selectedPage + 2)
        );
      }
    }
  }, [coinsMarketList, selectedPage, queryClient, pageCount, selectedCoin]);

  return (
    <>
      <div className="container mx-auto px-4 flex flex-r justify-start items-center mt-7">
        <p className="mr-7 text-xl">{STRINGS.HOME.ACCTION_TEXT}</p>
        <Dropdown
          itemsList={coinsList}
          onSelectItemTrigger={onCoinSelectClickHandler}
          selectedItem={selectedCoin}
          isLoading={isDropdownLoading}
        />
      </div>
      <Table
        headerTitleList={tableHeaderTitles}
        rowsDataList={
          !selectedCoin || selectedCoin === STRINGS.DROPDOWN.DEFAULT_VALUE
            ? coinsMarketList
            : selectedCoinMarketList
        }
        onPageClickTrigger={onPageClickHandler}
        pageCount={pageCount}
        selectedPage={selectedPage}
        isLoading={
          !selectedCoin || selectedCoin === STRINGS.DROPDOWN.DEFAULT_VALUE
            ? isLoadingCoinMarket
            : isLoadingSingleCoinMarket || isLoadingSearchCoin
        }
      />
    </>
  );
}
