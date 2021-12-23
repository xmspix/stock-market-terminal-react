import React from 'react'

export default function Matrix() {

    const WidgetToolBar = () => {
        return <div className="widget__toolbar">
            <div className="items">
                <div className="items__left">
                    <button className="btn btn__dark btn__round-corners btn__multiplier">Multiplier</button>
                    <button className="btn btn__light btn__round-corners btn__correlation">Correlation</button>
                </div>
                <div className="items__right">
                    <div className="select select__container icon__daily">
                        <select className="widget__select widget__select--wide" name="" id="">
                            <option value="">Daily</option>
                        </select>
                        <i className="btn btn__select btn__select-round fas fa-chevron-down"></i>
                    </div>
                    <div className="select select__container icon__calendar">
                        <select className="widget__select widget__select--wide" name="" id="">
                            <option value="">3 Month</option>
                        </select>
                        <i className="btn btn__select btn__select-round fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
    }

    const WidgetBody = () => {
        return <table className="table table__matrix">
            <thead className="table__labels">
                <tr className="table__row">
                    <th className="table__header table__matrix--header" colSpan={2}>BTC</th>
                    <th className="table__header table__matrix--header">NEO</th>
                    <th className="table__header table__matrix--header">XEM</th>
                    <th className="table__header table__matrix--header">ETH</th>
                    <th className="table__header table__matrix--header">DASH</th>
                    <th className="table__header table__matrix--header">LTC</th>
                    <th className="table__header table__matrix--header">USDT</th>
                    <th className="table__header table__matrix--header">BCH</th>
                </tr>
            </thead>
            <tbody className="table__body">
                <tr className="table__row">
                    <td className="table__data table__matrix--data">BTC</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#242425" }}>1</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#008871" }}>0.57</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#006f5f" }}>0.43</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#006c5d" }}>0.41</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#006d5e" }}>0.42</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#5b2b33" }}>0.28</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#242425" }}>-0.00</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#009379" }}>0.64</td>
                </tr>
                <tr className="table__row">
                    <td className="table__data table__matrix--data">NEO</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#006859" }}>0.39</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#242425" }}>1</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#115d52" }}>0.34</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#007967" }}>0.49</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#692a36" }}>0.36</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#00826c" }}>0.54</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#242425" }}>0.01</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#00826c" }}>0.53</td>
                </tr>
                <tr className="table__row">
                    <td className="table__data table__matrix--data">XEM</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#008d75" }}>0.60</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#009b7f" }}>0.68</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#242425" }}>1</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#8a283b" }}>0.53</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#00826c" }}>0.53</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#00826c" }}>0.54</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#242425" }}>-0.01</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#00b896" }}>0.85</td>
                </tr>
                <tr className="table__row">
                    <td className="table__data table__matrix--data">ETH</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#00826c" }}>0.54</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#00cba2" }}>0.95</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#007c69" }}>0.51</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#242425" }}>1</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#006f5f" }}>0.44</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#00c79f" }}>0.94</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#242425" }}>0.02</td>
                    <td className="table__data table__matrix--data" style={{ "background": "#009c7f" }}>0.69</td>
                </tr>
            </tbody>
        </table>
    }

    return <>
        <WidgetToolBar />
        <WidgetBody />
    </>
}
