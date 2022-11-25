import React, { useState } from "react";

type PropsType = {
  pageCount: number;
  selectedPage: number;
  onClickTrigger: (pageNumber: number) => void;
};
const Paginations = (props: PropsType) => {
  const { pageCount, onClickTrigger, selectedPage } = props;

  const generatePageButtons = () => {
    let buttonsElements = [];
    if (selectedPage < pageCount - 5) {
      for (let i = selectedPage; i <= selectedPage + 3; i++) {
        buttonsElements.push(
          <button
            key={i}
            onClick={() => onClickTrigger(i)}
            type="button"
            className={`w-full px-4 py-2 border-t border-b text-base text-neutral-400  bg-white hover:bg-gray-100 ${
              i === selectedPage && `font-medium text-neutral-900`
            }`}
          >
            {i}
          </button>
        );
      }
      buttonsElements.push(
        <div
          key={"dots"}
          className="w-full px-4 py-2 border-t border-b text-base text-neutral-400  bg-white "
        >
          ...
        </div>
      );
      for (let i = pageCount - 2; i <= pageCount; i++) {
        buttonsElements.push(
          <button
            key={i}
            onClick={() => onClickTrigger(i)}
            type="button"
            className={`w-full px-4 py-2 border-t border-b text-base text-neutral-400  bg-white hover:bg-gray-100 ${
              i === selectedPage && `font-medium text-neutral-900`
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      for (let i = pageCount - 6; i <= pageCount; i++) {
        buttonsElements.push(
          <button
            key={i}
            onClick={() => onClickTrigger(i)}
            type="button"
            className={`w-full px-4 py-2 border-t border-b text-base text-neutral-400  bg-white hover:bg-gray-100 ${
              i === selectedPage && `font-medium text-neutral-900`
            }`}
          >
            {i}
          </button>
        );
      }
    }
    return buttonsElements;
  };
  const generatePaginatorButtons = (type: "left" | "right") => {
    const onPaginatorClickHandler = () => {
      if (type === "left" && selectedPage > 1) {
        onClickTrigger(selectedPage - 1);
      } else if (type === "right" && selectedPage < pageCount) {
        onClickTrigger(selectedPage + 1);
      }
    };
    return (
      <button
        onClick={onPaginatorClickHandler}
        type="button"
        className={`w-full p-4 border-t border-b ${
          type === "left" ? `border-l rounded-l-xl` : `border-r rounded-r-xl`
        } text-base  text-gray-600 bg-white hover:bg-gray-100`}
      >
        <svg
          width="9"
          fill="currentColor"
          height="8"
          className=""
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          {type === "left" ? (
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          ) : (
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          )}
        </svg>
      </button>
    );
  };
  return (
    <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
      <div className="flex items-center">
        {generatePaginatorButtons("left")}
        {generatePageButtons()}
        {generatePaginatorButtons("right")}
      </div>
    </div>
  );
};

export default Paginations;
