import React, { Dispatch, useMemo, useState } from "react";
import STRINGS from "../../../constants/strings";

type PropsType = {
  itemsList?: string[];
  selectedItem?: string | null;
  onSelectItemTrigger: (item: string) => void;
  isLoading: boolean;
};
const Dropdown = (props: PropsType) => {
  const { itemsList, selectedItem, onSelectItemTrigger, isLoading } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onDropdownClickHandler = () => {
    if (!isLoading) {
      setIsOpen(!isOpen);
    }
  };
  const onDropdownBlurHandler = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };
  const onDropdownItemClick = (value: string) => {
    onSelectItemTrigger(value);
    setIsOpen(false);
  };
  const renderDropdownItems = () => {
    return (
      <>
        {
          <li>
            <a
              onClick={() =>
                onDropdownItemClick(STRINGS.DROPDOWN.DEFAULT_VALUE)
              }
              className="block py-2 px-4 hover:bg-gray-600 hover:text-gray-100 font-black"
            >
              {STRINGS.DROPDOWN.DEFAULT_VALUE}
            </a>
          </li>
        }
        {itemsList &&
          itemsList.length > 0 &&
          itemsList.map((item, index) => {
            return (
              <li key={index}>
                <a
                  onClick={() => onDropdownItemClick(itemsList[index])}
                  className="block py-2 px-4 hover:bg-gray-600 hover:text-gray-100"
                >
                  {item}
                </a>
              </li>
            );
          })}
      </>
    );
  };

  return (
    <div className="relative">
      <button
        onClick={onDropdownClickHandler}
        onBlur={onDropdownBlurHandler}
        className={`text-white bg-gray-700 w-44 hover:bg-gray-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center ${
          isLoading ? `justify-between` : `justify-end`
        }`}
        type="button"
      >
        {isLoading
          ? "loading..."
          : selectedItem
          ? selectedItem
          : STRINGS.DROPDOWN.DEFAULT_VALUE}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        className={`${
          !isOpen && `hidden`
        } absolute top-12 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow bg-gray-100 h-52 overflow-scroll`}
      >
        <ul
          className="py-1 text-sm text-gray-900"
          aria-labelledby="dropdownDefault"
        >
          {renderDropdownItems()}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
