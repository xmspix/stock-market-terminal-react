import React, { useEffect, useState } from 'react';

interface Idata {
    changeNet: number;
    changePercent: number;
    close: number;
    country: string;
    industry: string;
    ipoyear: number;
    marketCap: number;
    name: string;
    sector: string;
    symbol: string;
    volume: number;
}

export default function Screener() {
    const [data, setData]: any[] = useState(null);

    useEffect(() => {
        const records = require('../../data/records.json');
        setData(records.slice(0, 10));
    }, [])

    if (!data) {
        return <div>Loading...</div>
    } else {
        const WidgetToolbar = () => {
            return <div className="widget__toolbar">
                <div className="items">
                    <div className="items__left">
                        <i className="favorite favorite__icon btn fas fa-star"></i>
                        <div className="widget__search">
                            <i className="search search__icon fa fa-search"></i>
                            <input className="search__input" type="text" placeholder="Search" />
                        </div>
                        <div className="select select__container">
                            <select className="widget__select widget__select--wide" name="" id="">
                                <option value="">1D</option>
                                <option value="">W</option>
                                <option value="">M</option>
                                <option value="">Y</option>
                            </select>
                            <i className="btn btn__select btn__select-round fas fa-chevron-down"></i>
                        </div>
                        <div className="select select__container">
                            <i className="btn btn__select btn__select-left fas fa-chevron-left"></i>
                            <select className="widget__select" name="" id="">
                                <option value="">General</option>
                                <option value="">General 2</option>
                                <option value="">General 3</option>
                                <option value="">General 4</option>
                            </select>
                            <i className="btn btn__select btn__select-right fas fa-chevron-right"></i>
                        </div>
                        <div className="select select__container">
                            <i className="btn btn__select btn__select-left fas fa-chevron-left"></i>
                            <select className="widget__select" name="" id="">
                                <option value="">Overview</option>
                                <option value="">Overview 2</option>
                                <option value="">Overview 3</option>
                                <option value="">Overview 4</option>
                            </select>
                            <i className="btn btn__select btn__select-right fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div className="items__right">
                        <div className="alert">
                            <i className="btn btn__light alert__bell far fa-bell"></i>
                            <i className="btn btn__light alert__menu fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </div>
        }

        const WidgetBody = () => {
            return <div>
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
                        {data.map((item: Idata, index: number) => {
                            return <tr className="table__row" key={index}>
                                <td className="table__data"><i className="fas fa-star"></i></td>
                                <td className="table__data">{item.symbol}</td>
                                <td className="table__data">{item.close}</td>
                                <td className="table__data">{item.changeNet}</td>
                                <td className="table__data">{item.changePercent}</td>
                                <td className="table__data">{item.volume}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        }

        return <>
            <WidgetToolbar />
            <WidgetBody />
        </>
    }
}