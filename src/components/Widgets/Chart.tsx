import React from 'react';
import { observer } from 'mobx-react-lite';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { getChart, renderChart, updateChart } from '../../lib/chart';
import store from '../../store';
import csv from '../../assets/sprite.svg';

export function Chart() {   
    const chartRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        store.isWidgetMaximized
            ? renderChart(chartRef, {width: window.innerWidth, height: window.innerHeight})
            : renderChart(chartRef, {width: window.innerWidth / 2, height: 295});
    }, [chartRef]);

      useLayoutEffect(() => {
          store.isWidgetMaximized 
            ? updateChart({width: window.innerWidth, height: window.innerHeight})
            : getChart() && updateChart({width: window.innerWidth / 2, height: 295});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[store.isWidgetMaximized]);
    
    const WidgetToolBar = () => {
        return <div className="widget__toolbar">
        <input className="input input__dark" type="text" defaultValue={"AAPL"} />
        <div className="chart__timeframe">
            <button className="btn btn__timeframe">1m</button>
            <button className="btn btn__timeframe">30m</button>
            <button className="btn btn__timeframe">1h</button>
            <button className="btn btn__timeframe">D</button>
        </div>
        <div className="chart__charts">
            <svg className="icon icon__stroke btn">
                <use xlinkHref={`${csv}#bars`}></use>
            </svg>
            <svg className="icon icon__fill btn">
                <use xlinkHref={`${csv}#candles`}></use>
            </svg>
            <svg className="icon icon__fill btn">
                <use xlinkHref={`${csv}#area`}></use>
            </svg>
            <svg className="icon icon__stroke btn">
                <use xlinkHref={`${csv}#line`}></use>
            </svg>
        </div>
    </div>
    }

    return <>
        <WidgetToolBar />
        <div ref={chartRef}></div>
    </>
}

export default observer(Chart);