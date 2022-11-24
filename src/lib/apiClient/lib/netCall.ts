import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";
const coinsListUrl = `${baseUrl}/coins/list`;
const coinsMarketListUrl = `${baseUrl}/coins/markets`;

type Args = {
  cmd: "coinsList" | "coinsMarketList";
  params?: {
    [key: string]: string | number;
  };
};
type Method = "GET";

const urlPreparer = (args: Args) => {
  // console.log(args);
  if (args.cmd === "coinsList") return coinsListUrl;
  if (args.cmd === "coinsMarketList") return coinsMarketListUrl;
};
export const netCall = (method: Method, args: Args): any => {
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
              //"Authorization": tokenChecker()
            },
            params: { ...args.params },
          });

          if (res.status === 200) {
            resolve([res.status, res.data]);
          } else {
            resolve(["380", "network error in Call"]);
          }
        } catch (err: any) {
          if (err.response && err.response.status) {
            //response err num check here...
          } else {
            resolve(["381", "network error in Reply: " + JSON.stringify(err)]);
          }
        }
      })();
    });
  }
};
