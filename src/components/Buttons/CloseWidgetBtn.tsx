export default function CloseWidgetBtn() {
    const onClick = (e: any) => {
        const widgetElement = e.target.parentElement.parentElement.parentElement;
        widgetElement.remove();
    }
    return <i className="widget__buttons-close fas fa-times" onClick={onClick}></i>
}