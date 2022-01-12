import React, { useState } from "react";
import store from "../store";
import Modal from "./Modal";
import { observer } from "mobx-react-lite";
import { IOptions, widgets } from "./Widget";

interface IWidgetTabAdd {
    widgetID: number;
}
function WidgetTabAdd({ widgetID }: IWidgetTabAdd) {
    const [toggle, setToggle] = useState(false);

    const [modal, setModal] = useState(false);

    const handleMouseEnter = (e: any) => {
        e.stopPropagation();
        setToggle(true);
    }

    const handleNewTab = () => {
        setModal(true);
    }

    const WidgetOptions = () => {
        const handleClick = (widget: string) => {
            switch (widget) {
                case "Market Screener":
                    store.updateWidget(widgetID, widgets.filter((e: IOptions) => e.tab === "Market Screener")[0]);
                    break;
                case "Chart":
                    store.updateWidget(widgetID, widgets.filter((e: IOptions) => e.tab === "Chart")[0]);
                    break;
                case 'Watchlist':
                    store.updateWidget(widgetID, widgets.filter((e: IOptions) => e.tab === "Watchlist")[0]);
                    break;
                case 'Matrix':
                    store.updateWidget(widgetID, widgets.filter((e: IOptions) => e.tab === "Matrix")[0]);
                    break;
                case 'Position Tracker':
                    store.updateWidget(widgetID, widgets.filter((e: IOptions) => e.tab === "Position Tracker")[0]);
                    break;
                case 'Wallets':
                    store.updateWidget(widgetID, widgets.filter((e: IOptions) => e.tab === "Wallets")[0]);
                    break;
            }
        }
        return <>{widgets.map((e: IOptions, i: number) => <p key={i} onClick={() => handleClick(e.tab)} className={'btn'}>{e.tab}</p>)}</>
    }

    if (toggle || store.widgetBarHoverd) {
        return <>
            <div className="widget__tab"
                onMouseEnter={(e: any) => handleMouseEnter(e)}
                onMouseLeave={() => setToggle(false)}
                onClick={() => handleNewTab()}>+</div>
            {modal && <Modal setModal={(e: boolean) => setModal(e)} content={<WidgetOptions />} />}
        </>
    } else {
        return null;
    }
}

export default observer(WidgetTabAdd);