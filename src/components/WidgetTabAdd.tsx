import React,{ useState } from "react";
import store from "../store";
import Modal from "./Modal";
import { widgets } from "../utils/widgetOptions";
import { observer } from "mobx-react-lite";
import Watchlist from "./Widgets/Watchlist";
import Matrix from "./Widgets/Matrix";
import Screener from "./Widgets/Screener";
import Chart from "./Widgets/Chart";
import PositionTracker from "./Widgets/PositionTracker";
import Wallets from "./Widgets/Wallets";

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
                case "screener":
                    store.updateWidget(widgetID, { id: 1, type: 'screener', tab: 'Market Screener', isActive: false, content: <Screener /> });
                    break;
                case "chart":
                    store.updateWidget(widgetID, { id: 3, type: 'chart', tab: 'Chart', isActive: false, content: <Chart /> });
                    break;
                case 'watchlist':
                    store.updateWidget(widgetID, { id: 7, type: 'watchlist', tab: 'Watchlist', isActive: false, content: <Watchlist /> });
                    break;
                case 'matrix':
                    store.updateWidget(widgetID, { id: 5, type: 'matrix', tab: 'Matrix', isActive: false, content: <Matrix /> });
                    break;
                case 'positionTracker':
                    store.updateWidget(widgetID, { id: 6, type: 'positionTracker', tab: 'Position Tracker', isActive: false, content: <PositionTracker /> });
                    break;
                case 'wallets':
                    store.updateWidget(widgetID, { id: 7, type: 'wallets', tab: 'Wallets', isActive: false, content: <Wallets /> });
                    break;
            }
        }
        return <>{widgets.map((e: string, i: number) => <p key={i} onClick={() => handleClick(e)}>{e}</p>)}</>
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