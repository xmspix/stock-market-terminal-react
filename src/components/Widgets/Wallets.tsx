import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Wallets() {
    const WidgetToolBar = () => {
        return <div className="widget__toolbar">
            <div className="items">
                <div className="items__left">
                    <button className="btn btn__light btn__round-corners icon__chart">Hide</button>
                    <button className="btn btn__light btn__round-corners icon__exchanges">Exchanges</button>
                    <button className="btn btn__light btn__round-corners icon__window">Pools</button>
                    <button className="btn btn__light btn__round-corners icon__wallet">Whale Wallets</button>
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
        const data = {
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };

        return <div className="items">
            <div className="chart chart__container chart__container--dark">
                <Doughnut data={data} />
                <p className="chart__container--subtitle">exchanges dominance</p>
                <div className="select select__container">
                    <select className="widget__select widget__select--wide" name="" id="">
                        <option value="">Balance BTC</option>
                    </select>
                    <i className="btn btn__select btn__select-round fas fa-chevron-down"></i>
                </div>
            </div>
            <table className="table">
                <thead className="table__labels">
                    <tr className="table__row">
                        <th className="table__header"><i className="fas fa-filter"></i>Name</th>
                        <th className="table__header">Balance<br />BTC</th>
                        <th className="table__header">Balance<br />USD</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    <tr className="table__row">
                        <td className="table__data">Bitfinex.com</td>
                        <td className="table__data">138,389.16</td>
                        <td className="table__data">1,476,863,728.58</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__data">Bitfinex.com</td>
                        <td className="table__data">123,254.79</td>
                        <td className="table__data">1,317,384,216.81</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__data">Bitfinex.com</td>
                        <td className="table__data">123,254.79</td>
                        <td className="table__data">1,317,384,216.81</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__data">Bitfinex.com</td>
                        <td className="table__data">123,254.79</td>
                        <td className="table__data">1,317,384,216.81</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__data">Bitfinex.com</td>
                        <td className="table__data">123,254.79</td>
                        <td className="table__data">1,317,384,216.81</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__data">Bitfinex.com</td>
                        <td className="table__data">123,254.79</td>
                        <td className="table__data">1,317,384,216.81</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }

    return <>
        <WidgetToolBar />
        <WidgetBody />
    </>
}