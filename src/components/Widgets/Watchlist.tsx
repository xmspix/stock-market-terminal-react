import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { addToWatchlist, getWatchlist, getWatchlistNames } from "../../data";
import store from "../../store";
import { numberFormater } from "../../utils/helpers";
import { Idata } from "./Screener";

function Watchlist() {
  // const [data, setData]:any = useState();

  const watchlistNames = getWatchlistNames();

  const [watchlist, setWatchlist] = useState(watchlistNames[0]);

  const selectedWatchlist = useRef(watchlistNames[0]);

  useEffect(() => {
    const watchlistData = getWatchlist();
    store.setWatchlist(watchlistData);
    // setData(getWatchlist())
  }, []);

  const WidgetToolBar = () => {

    const handlePrevious = () => {
      const index: any = selectedWatchlist.current?.selectedIndex;
      const selectedIndex: any = selectedWatchlist.current?.selectedIndex;
      if (selectedIndex > 0) {
        setWatchlist(selectedWatchlist.current?.options[index - 1].value);
      }
    }

    const handleNext = () => {
      const index: any = selectedWatchlist.current?.selectedIndex;
      const selectedIndex: any = selectedWatchlist.current?.selectedIndex;
      const totalOptions: any = selectedWatchlist.current?.options.length;
      if (selectedIndex < totalOptions - 1) {
        setWatchlist(selectedWatchlist.current?.options[index + 1].value);
      }
    }

    return (
      <div className="widget__toolbar">
        <div className="items">
          <div className="items__left">
            <p>Lists:</p>
            <i className="btn btn__light btn__round-corners btn__list fas fa-list"></i>
            <div className="select select__container">
              <i className="btn btn__select btn__select-left fas fa-chevron-left" onClick={handlePrevious}></i>
              <select className="widget__select" defaultValue={watchlist} ref={selectedWatchlist} onChange={() => setWatchlist(selectedWatchlist.current.value)}>
                {watchlistNames?.map((name: string, index: number) => (
                  <option key={index} value={name} >{name}</option>
                ))}
              </select>
              <i className="btn btn__select btn__select-right fas fa-chevron-right" onClick={handleNext}></i>
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

  const WidgetBody = observer(() => {
    const handleDragOver = (e: any) => {
      e.preventDefault();
    };

    const handleAddToWatchlist = async (symbol: string, list: string, userID: string) => {
      const newData = await addToWatchlist({ symbol, list });
      store.setWatchlist(newData);
    };

    const handleDrop = async (e: any) => {
      const symbol = store.draggableElement.children[0].innerText;
      if (store.draggableElement && store.dragFrom === "screener") {
        handleAddToWatchlist(symbol, watchlist, store.user.id);
      } else {
        // const wID = store.watchlist.filter((itm: any) => itm.symbol === symbol)[0]._id;
        // handleAddToWatchlist(symbol, watchlist, store.user.id);
        // api.watchlist_remove(wID).then(() => callback());
      }
    };

    return (
      <table className="table table__watchlist" onDragOver={handleDragOver} onDrop={handleDrop}>
        <thead className="table__labels">
          <tr className="table__row">
            {/* <th className="table__header"><i className="fas fa-filter"></i></th> */}
            <th className="table__header">Symbol</th>
            <th className="table__header">Price</th>
            <th className="table__header">Change $</th>
            <th className="table__header">Change %</th>
            <th className="table__header">Volume</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {
            store.watchlist?.filter((item: any) => item.list === watchlist).map((item: Idata, index: number) => (
              <tr className="table__row" key={index}>
                {/* <td className="table__data"><i className="fas fa-star"></i></td> */}
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
  });

  return (
    <>
      <WidgetToolBar />
      <WidgetBody />
    </>
  );
}

export default observer(Watchlist);