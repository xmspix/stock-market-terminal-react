import store from "../../store";

interface IMaximizeBtn {
    widget: string;
}

export default function MaximizeWidgetBtn({ widget }: IMaximizeBtn) {
    const onClick = (e: any) => {
        const widgetElement: HTMLDivElement = e.target.parentElement.parentElement.parentElement;
        if (store.isWidgetMaximized) {
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