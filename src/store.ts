import { makeAutoObservable } from "mobx";

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
    widgets: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setUser(data: any){
        this.user = data;
    }

    setSymbol(symbol: string){
        this.symbol = symbol;
    }

    setWatchListName(data: any){
        this.watchListName = data;
    }

    setWatchlist(data: any){
        this.watchlist = data;
    }

    setWidgetMaximize(widget: string, value: boolean){
        this.widgetMaximized = widget;
        this.isWidgetMaximized = value;
    }

    setDraggableElement(e: any, from: string){
      this.draggableElement = e;
      this.dragFrom = from;
    }

    addWidget(widget: string){
        this.widgets.push(widget);
    }
}

export default new Store();