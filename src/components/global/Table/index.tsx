import React, { Dispatch, useMemo } from "react";
import Header from "./Header";
import Row from "./Row";
import Paginations from "./Paginations";
import { ICoinsMarket } from "../../../lib/interfaces/ICoinsMarket";
import { PER_PAGE } from "../../../constants/paginationsRequest";
import RowSkeleton from "./Row/skeleton";

type PropsType = {
  headerTitleList: string[];
  rowsDataList?: Array<ICoinsMarket>;
  onPageClickTrigger: (pageNumber: number) => void;
  pageCount?: number;
  selectedPage: number;
  isLoading: boolean;
};
const Table = (props: PropsType) => {
  const {
    headerTitleList,
    rowsDataList,
    onPageClickTrigger,
    pageCount,
    selectedPage,
    isLoading,
  } = props;
  const titleList = useMemo(() => headerTitleList, [headerTitleList]);
  const hasPagination =
    rowsDataList && rowsDataList.length >= 20 ? true : false;
  const renderRows = () => {
    if (rowsDataList && rowsDataList.length > 0) {
      return rowsDataList.map((item, index) => {
        return (
          <Row
            key={index}
            number={index + 1 + (selectedPage - 1) * PER_PAGE}
            data={item}
            isLoading={isLoading}
          />
        );
      });
    } else {
      let skeletonElements = [];
      for (let i = 0; i < 5; i++) {
        skeletonElements.push(<RowSkeleton key={i} />);
      }
      return skeletonElements;
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 ">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full table-auto">
                <Header titleList={titleList} />
                <tbody>{renderRows()}</tbody>
              </table>
              {hasPagination && (
                <Paginations
                  pageCount={pageCount || 1}
                  selectedPage={selectedPage}
                  onClickTrigger={onPageClickTrigger}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
