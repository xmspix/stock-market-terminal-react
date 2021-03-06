import React, { useRef } from 'react'
import WidgetTabs from './WidgetTabs';
import store from '../store';
import { observer } from 'mobx-react-lite';
import { CloseWidgetBtn, MaximizeWidgetBtn } from './Buttons';
import Screener from "./Widgets/Screener";
import Chart from "./Widgets/Chart";
import Watchlist from "./Widgets/Watchlist";
import Matrix from "./Widgets/Matrix";
import PositionTracker from "./Widgets/PositionTracker";
import Wallets from "./Widgets/Wallets";

export interface IWidget {
  options: IOptions[];
  widgetID: number;
}

export interface IOptions {
  id: number;
  tab: string;
  type: string;
  isActive: boolean;
  content: any;
}

export const widgets = [
  { id: 1, type: 'screener', tab: 'Market Screener', isActive: false, content: <Screener /> },
  { id: 2, type: 'chart', tab: 'Chart', isActive: false, content: <Chart /> },
  { id: 3, type: 'watchlist', tab: 'Watchlist', isActive: false, content: <Watchlist /> },
  { id: 4, type: 'matrix', tab: 'Matrix', isActive: false, content: <Matrix /> },
  { id: 5, type: 'position', tab: 'Position Tracker', isActive: false, content: <PositionTracker /> },
  { id: 6, type: 'wallets', tab: 'Wallets', isActive: false, content: <Wallets /> }
]

function Widget({ options, widgetID }: IWidget) {
  let data: any = options;

  const widget = useRef<HTMLElement>(null);
  const widgetBody: any = useRef<HTMLElement>(null);

  const Body = observer(() => {
    return <>
      {data.length === 0 && <div className="widget__body">No data</div>}
      {data.length >= 1 && data.map((item: IOptions, i: number) =>
        <div key={i} className="widget__body"
          style={store.isWidgetMaximized ? { maxHeight: '100vh' } : { maxHeight: '296px' }}
          ref={widgetBody} id={item.tab + item.id}>
          {item.isActive && item.content}
        </div>)}
    </>
  })

  return <section className={`widget`} ref={widget}>
    <div className="widget__bar"
      onMouseOver={() => { store.setWidgetBarHoverd(widget.current, true) }}
      onMouseLeave={() => { store.setWidgetBarHoverd(widget.current, false) }}>
      <div className="widget__buttons">
        <MaximizeWidgetBtn widget={'widget'} />
        <CloseWidgetBtn />
      </div>
    </div>
    {widget && <WidgetTabs data={data}
      widget={widget} widgetID={widgetID} />}
    <Body />
  </section>
}

export default Widget;