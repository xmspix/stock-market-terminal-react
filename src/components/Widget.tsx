import { useRef } from 'react'
import { MaximizeBtn, CloseBtn } from '../components/Buttons';
import WidgetTabs from './WidgetTabs';
import store from '../store';
import { observer } from 'mobx-react-lite';

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

function Widget({ options, widgetID }: IWidget) {
  let data: any = options;

  const widget = useRef<HTMLElement>(null);
  const widgetBody: any = useRef<HTMLElement>(null);

  const Body = observer(() => {
    return <>
      {data.length === 0 && <div className="widget__body">No data</div>}
      {data.length >= 1 && data.map((item: IOptions, i: number) =>
        <div key={i} className="widget__body" ref={widgetBody} id={item.tab + item.id}>
          {item.isActive && item.content}
        </div>)}
    </>
  })

  return <section className={`widget`} ref={widget}>
    <div className="widget__bar"
      onMouseOver={() => { store.setWidgetBarHoverd(widget.current, true) }}
      onMouseLeave={() => { store.setWidgetBarHoverd(widget.current, false) }}>
      <div className="widget__buttons">
        <MaximizeBtn widget={'widget'} />
        <CloseBtn />
      </div>
    </div>
    {widget && <WidgetTabs data={data}
      widget={widget} widgetID={widgetID} />}
    <Body />
  </section>
}

export default Widget;