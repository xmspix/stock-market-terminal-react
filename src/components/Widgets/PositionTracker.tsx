export default function PositionTracker() {
    const WidgetToolbar = () => {
        return <div className="widget__toolbar">
        <div className="items">
            <div className="items__left">
                <button className="btn btn__light btn__round-corners icon__chart">Graph</button>
                <button className="btn btn__light btn__round-corners icon__add">Add</button>
    
                <div className="select select__container">
                    <i className="btn btn__select btn__select-left fas fa-chevron-left"></i>
                    <span className="widget__select icon__filter">All Brokers</span>
                    <i className="btn btn__select btn__select-right fas fa-chevron-right"></i>
                </div>
    
                <div className="select select__container icon__crypto">
                    <span className="widget__select widget__select--wide">Crypto</span>
                    <i className="btn btn__select btn__select-round fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="items__right">
                <div className="widget__switch">
                    <span className="widget__switch--title">AGGREGATED</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="switch__slider switch__slider--round"></span>
                    </label>
                </div>
    
            </div>
        </div>
    </div>
    }

    const WidgetBody = () => {
        return <table className="table table__position">
        <thead className="table__labels">
            <tr className="table__row">
                <th className="table__header"><i className="fas fa-filter"></i>Broker</th>
                <th className="table__header">Symbol</th>
                <th className="table__header">Qty</th>
                <th className="table__header">Account</th>
                <th className="table__header">Oppening<br />Price</th>
                <th className="table__header">Current<br />Price</th>
                <th className="table__header">Unr. PnL $</th>
            </tr>
        </thead>
        <tbody className="table__body">
            <tr className="table__row">
                <td className="table__data">Binance</td>
                <td className="table__data">ETHUSDT</td>
                <td className="table__data table__dark--bg">25</td>
                <td className="table__data table__dark--color">Exchange</td>
                <td className="table__data">290.8</td>
                <td className="table__data">283.5</td>
                <td className="table__data" style={{"color": "#762c3c"}}>-132.5</td>
            </tr>
            <tr className="table__row">
                <td className="table__data">Bitfinex</td>
                <td className="table__data">ETHUSDT</td>
                <td className="table__data table__dark--bg">-10</td>
                <td className="table__data table__dark--color">Margin</td>
                <td className="table__data">295</td>
                <td className="table__data">285.5</td>
                <td className="table__data" style={{"color": "#115d52"}}>95</td>
            </tr>
            <tr className="table__row">
                <td className="table__data">Binance</td>
                <td className="table__data">ETHUSDT</td>
                <td className="table__data table__dark--bg">13</td>
                <td className="table__data table__dark--color">Margin</td>
                <td className="table__data">300</td>
                <td className="table__data">283.5</td>
                <td className="table__data" style={{"color": "#115d52"}}>217</td>
            </tr>
            <tr className="table__row">
                <td className="table__data">Kraken</td>
                <td className="table__data">ETHUSDT</td>
                <td className="table__data table__dark--bg">5</td>
                <td className="table__data table__dark--color">Exchange</td>
                <td className="table__data">10243</td>
                <td className="table__data">10245.5</td>
                <td className="table__data" style={{"color": "#115d52"}}>12.5</td>
            </tr>
        </tbody>
        <tfoot className="table__footer">
            <tr>
                <th colSpan={5}></th>
                <th>Total</th>
                <th style={{"color": "#115d52"}}>192.5</th>
            </tr>
        </tfoot>
    </table>
    }

    return <>
        <WidgetToolbar />
        <WidgetBody />
    </>
}