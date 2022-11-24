import React from "react";

type PropsType = {
  titleList: string[];
};
const Header = (props: PropsType) => {
  const { titleList } = props;
  return (
    <thead>
      <tr>
        {titleList.map((item, index) => {
          return (
            <th
              key={index}
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
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
