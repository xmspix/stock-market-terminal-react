import React, { useRef, useState } from "react";
import { getWatchlist, getWatchlistNames } from "../../data";
import { numberFormater } from "../../utils/helpers";
import { Idata } from "./Screener";

export default function Watchlist() {
  const data = getWatchlist();
  const watchlistNames = getWatchlistNames();

  const [watchlist, setWatchlist] = useState(watchlistNames[0]);

  const selectedWatchlist = useRef(watchlistNames[0]);

  const WidgetToolBar = () => {
    return (
      <div className="widget__toolbar">
        <div className="items">
          <div className="items__left">
            <p>Lists:</p>
            <i className="btn btn__light btn__round-corners btn__list fas fa-list"></i>
            <div className="select select__container">
              <i className="btn btn__select btn__select-left fas fa-chevron-left"></i>
              <select className="widget__select" ref={selectedWatchlist} onChange={() => setWatchlist(selectedWatchlist.current.value)}>
                {watchlistNames?.map((name: string, index: number) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
              <i className="btn btn__select btn__select-right fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="items__right">
            <button className="btn btn__light btn__round-corners btn__add-symbol">
              Add Symbol
            </button>
            <div className="alert">
              <i className="btn btn__light alert__bell far fa-bell"></i>
              <i className="btn btn__light alert__menu fas fa-ellipsis-v"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const WidgetBody = () => {
    return (
      <table className="table table__watchlist">
        <thead className="table__labels">
          <tr className="table__row">
            <th className="table__header"><i className="fas fa-filter"></i></th>
            <th className="table__header">Symbol</th>
            <th className="table__header">Price</th>
            <th className="table__header">Change $</th>
            <th className="table__header">Change %</th>
            <th className="table__header">Volume</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {
            data?.filter((item: any) => item.list === watchlist).map((item: Idata, index: number) => (
              <tr className="table__row" key={index}>
                <td className="table__data"><i className="fas fa-star"></i></td>
                <td className="table__data">{item.symbol}</td>
                <td className="table__data">{item.close}</td>
                <td className="table__data">{item.changeNet}</td>
                <td className="table__data">{item.changePercent}</td>
                <td className="table__data">{numberFormater(item.volume)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  };

  return (
    <>
      <WidgetToolBar />
      <WidgetBody />
    </>
  );
}