import React, { useCallback } from "react";

type PropsType = {
  titleList: string[];
  headerWidth: number[];
};
const Header = (props: PropsType) => {
  const { titleList, headerWidth } = props;
  console.log(headerWidth);

  const claculateWidth = useCallback(
    (width: number): string => {
      const sum = headerWidth.reduce(function (acc, val) {
        return acc + val;
      }, 0);
      console.log(`w-${width}/${sum}`);

      return `w-${Math.round((width * 12) / sum)}/${12}`;
    },
    [headerWidth]
  );
  return (
    <thead>
      <tr>
        {titleList.map((item, index) => {
          return (
            <th
              key={index}
              scope="col"
              className={`px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal ${claculateWidth(
                headerWidth[index]
              )}`}
            >
              {item}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Header;
