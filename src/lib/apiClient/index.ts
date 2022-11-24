import { netCall } from "./lib/netCall";

export const requestGetCoins = (): Promise<any> => {
  return netCall("GET", {
    cmd: "coinsList",
  });
};
export const requestGetCoinsMarket = (id?: string): Promise<any> => {
  return netCall("GET", {
    cmd: "coinsMarketList",
    params: {
      ids: id || "",
    },
  });
};
