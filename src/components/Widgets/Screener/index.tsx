import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import store from "../../../store";
import { filterApi, Filters, SearchSymbol } from "./ScreenerFilters";
import ScreenerTable from "./ScreenerTable";
import { Pagination } from "../../Pagination";
export interface Idata {
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

function Screener() {
    const [state, setState]: any = useState({
        records: [],
        pages: 0,
        rows: 0
    });

    const [page, setPage] = useState(1);
    const [symbol, setSymbol] = useState("");
    const [filters, setFilters] = useState({});

    useEffect(() => {
        getRecords();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

    const getRecords = async (parms = {}) => {
        const records = require("../../../data/records.json");
        const filteredRecords: any = filterApi({ ...filters, ...parms }, records)

        if (state.records.length === 0) {
            setState({
                records: records.slice((page - 1) * 10, page * 10),
                pages: Math.ceil(records.length / 10),
                rows: records.length,
            })
        } else {
            setState({
                records: filteredRecords.slice((page - 1) * 10, page * 10),
                pages: Math.ceil(filteredRecords.length / 10),
                rows: filteredRecords.length,
            })
        }
    };

    if (!state.records) {
        return <div>Loading...</div>;
    } else {
        const WidgetToolbar = () => {
            return (
                <div className="widget__toolbar">
                    <div className="items">
                        <div className="items__left">
                            {/* <i className="favorite favorite__icon btn fas fa-star"></i> */}
                            <div className="widget__search">
                                <SearchSymbol filter={(f: any) => {
                                    // console.log({ ...filters, ...f });

                                    setFilters({ ...filters, ...f });
                                    setSymbol(f.symbol);
                                    // setState(state.records.filter((item: Idata) => item.symbol.includes(f.symbol)));
                                }} symbol={symbol} />
                            </div>
                            {/* <div className="select select__container">
                                <select className="widget__select widget__select--wide">
                                    <option value="">1D</option>
                                    <option value="">W</option>
                                    <option value="">M</option>
                                    <option value="">Y</option>
                                </select>
                                <i className="btn btn__select btn__select-round fas fa-chevron-down"></i>
                            </div>
                            <div className="select select__container">
                                <i className="btn btn__select btn__select-left fas fa-chevron-left"></i>
                                <select className="widget__select">
                                    <option value="">General</option>
                                    <option value="">General 2</option>
                                    <option value="">General 3</option>
                                    <option value="">General 4</option>
                                </select>
                                <i className="btn btn__select btn__select-right fas fa-chevron-right"></i>
                            </div>
                            <div className="select select__container">
                                <i className="btn btn__select btn__select-left fas fa-chevron-left"></i>
                                <select className="widget__select">
                                    <option value="">Overview</option>
                                    <option value="">Overview 2</option>
                                    <option value="">Overview 3</option>
                                    <option value="">Overview 4</option>
                                </select>
                                <i className="btn btn__select btn__select-right fas fa-chevron-right"></i>
                            </div> */}
                        </div>
                        <div className="items__right">
                            <div className="alert">
                                <i className="btn btn__light alert__bell far fa-bell"></i>
                                <i className="btn btn__light alert__menu fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const TableFooter = () => {
            const recordsTable = page !== state.pages ? page * state.records.length : state.rows;
            return (
                <div className="pagination">
                    <div>Showing {recordsTable} of {state.rows} entries</div>
                    <Pagination
                        currentPage={page <= state.pages ? page : 1}
                        totalPages={state.pages}
                        setPage={(page: number) => {
                            setPage(page);
                            getRecords({ ...filters, page: page });
                        }}
                    />
                </div>
            );
        };

        return (
            <>
                <WidgetToolbar />
                {store.isWidgetMaximized && <Filters filter={(f: any) => setFilters({ ...filters, ...f })} />}
                <ScreenerTable records={state.records} tableFooter={<TableFooter />} page={page} sortData={(sort: any) => {
                    setFilters({ ...filters, ...sort });
                }} />
            </>
        );
    }
}


export default observer(Screener);

