export default function Watchlist(){

    const WidgetToolBar = () => {
        return <div className="widget__toolbar">
        <div className="items">
            <div className="items__left">
                <p>Lists:</p>
                <i className="btn btn__light btn__round-corners btn__list fas fa-list"></i>

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
            </div>
            <div className="items__right">
                <button className="btn btn__light btn__round-corners btn__add-symbol">Add Symbol</button>

                <div className="alert">
                    <i className="btn btn__light alert__bell far fa-bell"></i>
                    <i className="btn btn__light alert__menu fas fa-ellipsis-v"></i>
                </div>
            </div>
        </div>
    </div>
    }

    const WidgetBody = () => {
        return <table className="table table__watchlist">
        <thead className="table__labels">
            <tr className="table__row">
                <th className="table__header"><i className="fas fa-filter"></i></th>
                <th className="table__header">Symbol</th>
                <th className="table__header">Price</th>
                <th className="table__header">Market Cap</th>
                <th className="table__header">Change</th>
                <th className="table__header">Chart</th>
            </tr>
        </thead>
        <tbody className="table__body">
            <tr className="table__row">
                <td className="table__data"><i className="fas fa-star"></i></td>
                <td className="table__data">AAPL</td>
                <td className="table__data">$167</td>
                <td className="table__data">12,300,123</td>
                <td className="table__data">0.98</td>
                <td className="table__data">
                    <svg className="icon" style={{"fill": "lime"}}>
                        <use xlinkHref="./images/sprite.svg#line"></use>
                    </svg>
                </td>
            </tr>
            <tr className="table__row">
                <td className="table__data"><i className="fas fa-star"></i></td>
                <td className="table__data">AAPL</td>
                <td className="table__data">$167</td>
                <td className="table__data">12,300,123</td>
                <td className="table__data">0.98</td>
                <td className="table__data">
                    <svg className="icon" style={{"fill": "lime"}}>
                        <use xlinkHref="./images/sprite.svg#line"></use>
                    </svg>
                </td>
            </tr>
            <tr className="table__row">
                <td className="table__data"><i className="fas fa-star"></i></td>
                <td className="table__data">AAPL</td>
                <td className="table__data">$167</td>
                <td className="table__data">12,300,123</td>
                <td className="table__data">0.98</td>
                <td className="table__data">
                    <svg className="icon" style={{"fill": "lime"}}>
                        <use xlinkHref="./images/sprite.svg#line"></use>
                    </svg>
                </td>
            </tr>
            <tr className="table__row">
                <td className="table__data"><i className="fas fa-star"></i></td>
                <td className="table__data">AAPL</td>
                <td className="table__data">$167</td>
                <td className="table__data">12,300,123</td>
                <td className="table__data">0.98</td>
                <td className="table__data">
                    <svg className="icon" style={{"fill": "lime"}}>
                        <use xlinkHref="./images/sprite.svg#line"></use>
                    </svg>
                </td>
            </tr>
            <tr className="table__row">
                <td className="table__data"><i className="fas fa-star"></i></td>
                <td className="table__data">AAPL</td>
                <td className="table__data">$167</td>
                <td className="table__data">12,300,123</td>
                <td className="table__data">0.98</td>
                <td className="table__data">
                    <svg className="icon" style={{"fill": "lime"}}>
                        <use xlinkHref="./images/sprite.svg#line"></use>
                    </svg>
                </td>
            </tr>

        </tbody>
    </table>
    }

    return <>
        <WidgetToolBar/>
        <WidgetBody/>
    </>
}