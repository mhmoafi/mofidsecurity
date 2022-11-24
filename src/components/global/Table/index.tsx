import React, { Dispatch, useMemo } from "react";
import Header from "./Header";
import Row from "./Row";
import Paginations from "./Paginations";
import { ICoinsMarket } from "../../../lib/interfaces/ICoinsMarket";

type PropsType = {
  headerTitleList: string[];
  tableHeaderWidth: number[];
  rowsDataList: Array<ICoinsMarket>;
  onPageClickTrigger: (pageNumber: number) => void;
  pageCount: number;
  selectedPage: number;
};
const Table = (props: PropsType) => {
  const {
    headerTitleList,
    tableHeaderWidth,
    rowsDataList,
    onPageClickTrigger,
    pageCount,
    selectedPage,
  } = props;
  const titleList = useMemo(() => headerTitleList, [headerTitleList]);
  return (
    <>
      <div className="container mx-auto px-4 ">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full table-auto">
                <Header titleList={titleList} headerWidth={tableHeaderWidth} />
                <tbody>
                  {rowsDataList.map((item, index) => {
                    return <Row key={index} number={index + 1} data={item} />;
                  })}
                </tbody>
              </table>
              <Paginations
                pageCount={pageCount}
                selectedPage={selectedPage}
                onClickTrigger={onPageClickTrigger}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
