import React, { useRef, useState } from 'react'
import { MaximizeBtn, CloseBtn } from '../components/Buttons';

interface IWidget {
  type: string;
  options: IOptions[];
}

interface IOptions {
  name: any;
  isActive: any;
  content: any;
}

export default function Widget({ type, options }: IWidget) {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(options);

  const widgetBody: any = useRef<HTMLElement>();

  const openTab = (e: any, tabName: string) => {
    e.stopPropagation();

    const newData = data?.map((tab: IOptions, i: number) => {
      if (tab.name === tabName) {
        tab.isActive = true;
      } else {
        tab.isActive = false;
      }
      return tab;
    })
    setData(newData);
  }

  const closeTab = (e: any, index: number) => {
    e.stopPropagation();
    const newData = data.filter((_, i: number) => i !== index);
    if (newData.length >= 1) {
      newData[0].isActive = true;
    }
    setData(newData)
  }

  const Tabs = () => {
    return <div className="widget__tabs">
      {data && data.map((item: IOptions, index: number) =>
          <div key={index} className="widget__tab" onClick={(e) => openTab(e, item.name)}>
            {item.name}
            <i className="widget__tab-close fas fa-times" onClick={(e) => closeTab(e, index)}></i>
          </div>)}

      {toggle && <div className="widget__tab">+</div>}
    </div>
  }

  const Body = () => {
    return <>
      {data.length === 0 && <div className="widget__body" onMouseOver={() => setToggle(false)}>No data</div>}
      {data.length >= 1 && data.map((item: IOptions, i: number) =>
        <div key={i} className="widget__body" ref={widgetBody} id={item.name} onMouseOver={() => setToggle(false)}>
          {item.isActive && item.content}
        </div>)}
    </>
  }

  return <section className={`widget ${type}`} onMouseLeave={() => setToggle(false)}>
    <div className="widget__bar" onMouseOver={() => setToggle(true)}>
      <div className="widget__buttons" onMouseOver={() => setToggle(false)}>
        <MaximizeBtn widget={'widget'} />
        <CloseBtn />
      </div>
    </div>
    <Tabs />
    <Body />
  </section>
}