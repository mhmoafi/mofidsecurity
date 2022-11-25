import React from "react";

const RowSkeleton = (): JSX.Element => {
  return (
    <tr className="border-b border-gray-200 bg-white animate-pulse">
      <td className="px-5 py-5  text-sm">
        <div className="w-10 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </td>
      <td className="px-5 py-5  flex flex-col ">
        <div className="w-20 h-5 bg-gray-100 rounded-full dark:bg-gray-500"></div>
      </td>
      <td className="px-5 py-5 text-sm">
        <div className="w-32 h-2 bg-gray-100 rounded-full dark:bg-gray-500"></div>
      </td>
      <td className="px-5 py-5 text-sm">
        <div className="w-32 h-2 bg-gray-100 rounded-full dark:bg-gray-500"></div>
      </td>
      <td className="px-5 py-5 text-sm">
        <div className="w-32 h-2 bg-gray-100 rounded-full dark:bg-gray-500"></div>
      </td>
      <td className="px-5 py-5 text-sm">
        <div className="w-32 h-2 bg-gray-100 rounded-full dark:bg-gray-500"></div>
      </td>
      <td className="px-5 py-5 text-sm">
        <div className="w-32 h-2 bg-gray-100 rounded-full dark:bg-gray-500"></div>
      </td>
      <td className="px-5 py-5 text-sm">
        <div className="w-32 h-2 bg-gray-100 rounded-full dark:bg-gray-500"></div>
      </td>
    </tr>
  );
};

export default RowSkeleton;
