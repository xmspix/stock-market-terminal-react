const records: any[] = require("./records");
const watchlist: any[] = require("./watchlist");

export { records, watchlist };

export const getWatchlist = () =>
  watchlist.map((list) => {
    return {
      ...records.filter((record) => record.symbol === list.symbol)[0],
      ...list,
    };
  });

export const getWatchlistNames = () =>
  Array.from(new Set(watchlist.map((e) => e.list)));
