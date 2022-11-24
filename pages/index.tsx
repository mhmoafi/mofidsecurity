import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Table from "../src/components/global/Table";

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
const tableHeaderWidth = [1, 1, 1, 1, 1, 1, 1, 5];
const rowsDataList = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 16561.51,
    market_cap: 318157086184,
    market_cap_rank: 1,
    fully_diluted_valuation: 347699091103,
    total_volume: 26007817718,
    high_24h: 16769.37,
    low_24h: 16357.01,
    price_change_24h: -71.1401194593127,
    price_change_percentage_24h: -0.42771,
    market_cap_change_24h: 347534539,
    market_cap_change_percentage_24h: 0.10935,
    circulating_supply: 19215750.0,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 69045,
    ath_change_percentage: -76.01147,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 24325.70797,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2022-11-24T11:01:09.482Z",
    price_change_percentage_24h_in_currency: -0.4277137205148345,
    price_change_percentage_7d_in_currency: -0.7662854150947049,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 1197.65,
    market_cap: 144320866633,
    market_cap_rank: 2,
    fully_diluted_valuation: 144320866633,
    total_volume: 8347757149,
    high_24h: 1214.27,
    low_24h: 1154.07,
    price_change_24h: 23.09,
    price_change_percentage_24h: 1.96601,
    market_cap_change_24h: 4012232243,
    market_cap_change_percentage_24h: 2.85958,
    circulating_supply: 120516813.239688,
    total_supply: 120516813.239688,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -75.45449,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 0.432979,
    atl_change_percentage: 276447.9251,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 95.70046484343102,
      currency: "btc",
      percentage: 9570.046484343102,
    },
    last_updated: "2022-11-24T11:02:07.533Z",
    price_change_percentage_24h_in_currency: 1.9660085128911025,
    price_change_percentage_7d_in_currency: -1.646410985206395,
  },
];
export default function Home() {
  const {
    query: { id, page },
  } = useRouter();
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const onPageClickHandler = (pageNumber: number) => {
    setSelectedPage(pageNumber);
  };
  return (
    <>
      <div>{id}</div>
      <div>{page}</div>
      <Table
        headerTitleList={tableHeaderTitles}
        tableHeaderWidth={tableHeaderWidth}
        rowsDataList={rowsDataList}
        onPageClickTrigger={onPageClickHandler}
        pageCount={5}
        selectedPage={selectedPage}
      />
    </>
  );
}
