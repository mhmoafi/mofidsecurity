import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";
const coinsListUrl = `${baseUrl}/simple/supported_vs_currencies`;
const coinsMarketListUrl = `${baseUrl}/coins/markets`;
const coinSearchUrl = `${baseUrl}/search`;

type Args = {
  cmd: "coinsList" | "coinsMarketList" | "coinSearch";
  params?: {
    [key: string]: string | number;
  };
};
type Method = "GET";

const urlPreparer = (args: Args) => {
  if (args.cmd === "coinsList") return coinsListUrl;
  if (args.cmd === "coinsMarketList") return coinsMarketListUrl;
  if (args.cmd === "coinSearch") return coinSearchUrl;
};
export const netCall = (
  method: Method,
  args: Args,
  errorCallback?: () => void
): any => {
  if (method === "GET") {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const res = await axios({
            method: "get",
            url: urlPreparer(args),
            headers: {
              "Cache-Control": "no-cache",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            params: { ...args.params },
          });

          if (res.status === 200) {
            resolve(res.data);
          }
        } catch (err: any) {
          errorCallback && errorCallback();
          // resolve(err);
        }
      })();
    });
  }
};
