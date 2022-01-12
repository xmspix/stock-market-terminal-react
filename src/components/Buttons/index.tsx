import CloseWidgetBtn from './CloseWidgetBtn';
import MaximizeWidgetBtn from './MaximizeWidgetBtn';
import RemoveBtn from './RemoveBtn';

interface IButtons {
    text: string;
    customClass?: string;
    callback?: any;
}

const BtnRound = ({ text, customClass, callback }: IButtons) => {
    const classes = "btn btn__light btn__round-corners " + customClass;
    return <button className={classes} onClick={callback}>{text}</button>
}

export { CloseWidgetBtn, MaximizeWidgetBtn, RemoveBtn, BtnRound };