import React from "react";
import Image from "next/image";
import { ICoinsMarket } from "../../../../lib/interfaces/ICoinsMarket";
import {
  decoratePercentageNumber,
  setNumberDiscriminant,
} from "../../../../lib/utilities/numberDecorator";

type PropsType = {
  data: ICoinsMarket;
  number: number;
};
const Row = (props: PropsType): JSX.Element => {
  const { data, number } = props;

  const generateColorClass = (value: number): string => {
    if (value > 0) {
      return "text-green-600";
    } else if (value < 0) {
      return "text-rose-700";
    } else {
      return "text-gray-700";
    }
  };
  return (
    <tr className="border-b border-gray-200 bg-white">
      <td className="px-5 py-5  text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{number}</p>
      </td>
      <td className="px-5 py-5  flex flex-col ">
        <p className="text-gray-900 whitespace-no-wrap">{data.id}</p>
        <p className="text-gray-400">{data.symbol}</p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{data.current_price}</p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p
          className={`text-gray-900 whitespace-no-wrap ${generateColorClass(
            data.price_change_percentage_24h_in_currency
          )}`}
        >
          {decoratePercentageNumber(
            data.price_change_percentage_24h_in_currency
          )}
        </p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p
          className={`text-gray-900 whitespace-no-wrap ${generateColorClass(
            data.price_change_percentage_7d_in_currency
          )}`}
        >
          {decoratePercentageNumber(
            data.price_change_percentage_7d_in_currency
          )}
        </p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          ${setNumberDiscriminant(data.market_cap)}
        </p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          ${setNumberDiscriminant(data.total_volume)}
        </p>
      </td>
      <td className="px-5 py-5 text-sm">
        <span className="text-gray-900 whitespace-no-wrap">
          {data.circulating_supply}
        </span>
        <span className="ml-2 text-gray-400">{data.symbol}</span>
      </td>
    </tr>
  );
};

export default Row;
