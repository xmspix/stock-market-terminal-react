import React from "react";
import store from "../store";
// import { widgetCount } from "../utils/helpers";

interface IMaximizeBtn {
    widget: string;
}

interface IButtons {
    text: string;
    customClass?: string;
    callback?: any;
}

export const BtnRound = ({text, customClass, callback} :IButtons) => {
    const classes = "btn btn__light btn__round-corners "+customClass;
    return <button className={classes} onClick={callback}>{text}</button>
}

export const CloseBtn = () => {
    const onClick = (e: any) => {
        const widgetElement = e.target.parentElement.parentElement.parentElement;
        widgetElement.remove();
    }
    return <i className="widget__buttons-close fas fa-times" onClick={onClick}></i>
}

export const MaximizeBtn = ({widget}: IMaximizeBtn) => {
    const onClick = (e:any) => {
        const widgetElement: HTMLDivElement = e.target.parentElement.parentElement.parentElement;
        if(store.isWidgetMaximized){
            // const widgetSize: any = (window.innerHeight - 50 - 40) / widgetCount(store.widgets.length);
            store.setWidgetMaximize("", false);
            widgetElement.classList.remove("widget__maximize");
            // widgetElement.style.height = `${widgetSize}px`;
            widgetElement.style.height = "";
        } else {
            store.setWidgetMaximize(widget, true);
            widgetElement.classList.add("widget__maximize");
            widgetElement.style.height = "100vh";
        }
    }
    return <i className="widget__buttons-maximize far fa-window-maximize" onClick={onClick}></i>
}

export const WatchListBtn = () => {
    const onClick = (e:any) => {
        const watchlistOptions = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[2].firstElementChild;
        if(watchlistOptions.classList.value.includes("--active")) {
            watchlistOptions.classList.remove("watchlist__options--active");
        } else {
            watchlistOptions.classList.add("watchlist__options--active");
        }
    }
    return <i className="btn btn__light btn__round-corners btn__list fas fa-list" onClick={onClick}></i>
}