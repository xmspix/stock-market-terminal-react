const records: any[] = require("./records");
const watchlist: any[] = require("./watchlist");
const friends: any[] = require("./friends");

export { records, watchlist, friends };

interface IAddToWatchlist {
    symbol: string;
    list: string;
}

export const getWatchlist = () =>
  watchlist.map((list) => {
    return {
      ...records.filter((record) => record.symbol === list.symbol)[0],
      ...list,
    };
  });

export const addToWatchlist = ({symbol, list}: IAddToWatchlist) => {
  console.log({symbol, list});
  
  watchlist.push({symbol, list});
  return getWatchlist();
};

export const getWatchlistNames = () =>
  Array.from(new Set(watchlist.map((e) => e.list)));
