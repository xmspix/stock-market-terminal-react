import React from 'react';
import WidgetTabAdd from "./WidgetTabAdd";
import { IOptions } from "./Widget";
import store from '../store';
import { observer } from "mobx-react-lite";

interface Itabs {
    data: any[];
    setData?: any;
    widget: any;
    widgetID: number;
}

function WidgetTabs({ data, setData, widget, widgetID }: Itabs) {
    return <div className="widget__tabs">
        {data && data.map((item: IOptions, index: number) =>
            <div key={index} className="widget__tab" onClick={() => store.setTabActive(widgetID, item.id)}>
                {item.tab}
                <i className="widget__tab-close fas fa-times" onClick={() => store.removeTab(widgetID, item.id)}></i>
            </div>)}

        {store.widgetBarHoverd === widget.current && <WidgetTabAdd widgetID={widgetID}/>}

    </div>
}

export default observer(WidgetTabs);