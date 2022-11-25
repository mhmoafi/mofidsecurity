import { PER_PAGE } from "../../constants/paginationsRequest";
import { netCall } from "./lib/netCall";

export const requestGetCoins = (errorCallback: () => void): Promise<any> => {
  return netCall(
    "GET",
    {
      cmd: "coinsList",
    },
    errorCallback
  );
};
export const requestGetCoinsMarket = (
  id?: string,
  page?: number,
  errorCallback?: () => void
): Promise<any> => {
  let params: any = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: PER_PAGE,
    sparkline: false,
    price_change_percentage: "24h,7d",
  };
  if (id) {
    params["ids"] = id;
  }
  if (page) {
    params["page"] = page;
  }
  return netCall(
    "GET",
    {
      cmd: "coinsMarketList",
      params: params,
    },
    errorCallback
  );
};
export const requestSearchCoin = (
  value?: string,
  errorCallback?: () => void
): Promise<any> => {
  let params: any = {};
  if (value) {
    params["query"] = value;
  }
  return netCall(
    "GET",
    {
      cmd: "coinSearch",
      params: params,
    },
    errorCallback
  );
};
