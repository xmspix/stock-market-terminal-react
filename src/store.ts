import { makeAutoObservable } from "mobx";
import { IOptions } from "./components/Widget";

// MobX implementation 
class Store {
    user: any = {};
    symbol: string = "";
    watchlist: any[] = [];
    watchListName: any[] = [];
    isWidgetMaximized: boolean = false;
    widgetMaximized: string = "";
    draggableElement: any = undefined;
    dragFrom: string = "";
    widgets: any = [];
    isWidgetBarHoverd: boolean = false;
    widgetBarHoverd: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    setUser(data: any) {
        this.user = data;
    }

    setSymbol(symbol: string) {
        this.symbol = symbol;
    }

    setWatchListName(data: any) {
        this.watchListName = data;
    }

    setWatchlist(data: any) {
        this.watchlist = data;
    }

    setWidgetMaximize(widget: string, value: boolean) {
        this.widgetMaximized = widget;
        this.isWidgetMaximized = value;
    }

    setDraggableElement(e: any, from: string) {
        this.draggableElement = e;
        this.dragFrom = from;
    }

    addWidget(widget: any[]) {
        this.widgets.push(widget);
    }

    setWidgets(widgets: any[]) {
        this.widgets = widgets;
    }

    updateWidget(index: number, data: any) {
        this.widgets[index] = [...this.widgets[index], data];
    }

    setTabActive(index: number, tabID: number) {
        const newData = this.widgets[index].map((e: IOptions, i: number) => {
            if (e.id === tabID) {
                e.isActive = true;
            } else {
                e.isActive = false;
            }
            return e;
        });
        this.widgets[index] = newData;
    }

    removeTab(index: number, tabID: number) {
        let newData = this.widgets[index].filter((e: IOptions) => e.id !== tabID);

        if (newData.length === 1) {
            newData[0].isActive = true;
        }
        this.widgets[index] = newData;
    }

    setWidgetBarHoverd(widget: any, value: boolean) {
        this.widgetBarHoverd = widget;
        this.isWidgetBarHoverd = value;
    }
}

export default new Store();