import React, { ReactElement } from 'react';
import store from "../../../store";
import { numberFormater } from '../../../utils/helpers';

interface Props {
    records: any;
    tableHeader?: any;
    tableFooter?: any;
    page?: number;
    sortData?: any;
}

interface IScreener {
    _id: string;
    changeNet: number;
    changePercent: number;
    close: number;
    country: string;
    createdAt: string;
    industry: string;
    ipoyear: number;
    marketCap: number;
    name: string;
    sector: string;
    symbol: string;
    updatedAt: string;
    volume: number;
}



export default function ScreenerTable({ records, tableHeader, tableFooter, page, sortData }: Props): ReactElement {

    const handleDragStart = (e: any) => {
        store.setDraggableElement(e.target, "screener");
    };
    const handleDragEnd = () => {
        document.querySelector(".dragged")?.classList.remove("dragged");
    };

    const handleSort = (sort: string, order: string, e: any) => {
        e.preventDefault();
        sortData({ page: page, sortBy: sort, orderBy: order });
    };

    const SortBy = ({ value }: any) => (
        <div className="arrow-container">
            <i className={"fas fa-sort-up"} style={{ top: '7px', position: 'relative' }} onClick={(e) => handleSort(value, "asc", e)}></i>
            <i className={"fas fa-sort-down"} onClick={(e) => handleSort(value, "desc", e)}></i>
        </div>
    );

    return (
        <>
            {tableHeader}

            <table className="table">
                <thead className="table__labels">
                    <tr className="table__row">
                        {/* <th className="table__header">
                <i className="fas fa-filter"></i>
              </th> */}
                        <th className="table__header">Symbol <SortBy value="symbol" /></th>
                        <th className="table__header">Price <SortBy value="close" /></th>
                        <th className="table__header">Change $ <SortBy value="changeNet" /></th>
                        <th className="table__header">Change % <SortBy value="changePercent" /></th>
                        <th className="table__header">Volume <SortBy value="volume" /></th>
                        {/* <th className="table__header">Market Cap</th> */}
                        {/* <th className="table__header">Chart</th> */}
                    </tr>
                </thead>
                <tbody className="table__body">
                    {records && records.map((e: IScreener) => (
                        <tr
                            className="table__row"
                            key={e.symbol}
                            draggable="true"
                            onDragStart={(e) => handleDragStart(e)}
                            onDragEnd={() => handleDragEnd()}
                        >
                            {/* <td className="table__data"><i className="far fa-star"></i></td> */}
                            <td className="table__data" onClick={() => store.setSymbol(e.symbol)}>{e.symbol}</td>
                            <td className="table__data">{e.close}</td>
                            <td className="table__data">{e.changeNet}</td>
                            <td className="table__data">{e.changePercent}</td>
                            <td className="table__data">{numberFormater(e.volume)}</td>
                            {/* <td className="table__data">{e.marketCap}</td> */}
                            {/* <td className="table__data">
                    <svg className="icon" style={{ fill: "lime" }}>
                      <use xlinkHref="./images/sprite.svg#line"></use>
                    </svg>
                  </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            {tableFooter}
        </>
    )
}
