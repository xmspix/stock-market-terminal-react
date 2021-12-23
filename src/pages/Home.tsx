import React, { useEffect } from 'react';
import Profile from '../components/Profile';
import store from '../store';
import Widget from '../components/Widget';
import { widgetCount } from '../utils/helpers';

import Screener from '../components/Widgets/Screener';
import Watchlist from '../components/Widgets/Watchlist';
import Matrix from '../components/Widgets/Matrix';
import PositionTracker from '../components/Widgets/PositionTracker';
import Wallets from '../components/Widgets/Wallets';
import Footer from '../components/Footer';

export default function Home() {
    useEffect(() => {
        const widgetSize: any = (window.innerHeight - 50 - 40) / widgetCount(store.widgets.length);
        document.querySelectorAll<HTMLDivElement>('.widget').forEach((e: HTMLDivElement) => e.style.height = `${widgetSize}px`);
        document.querySelectorAll<HTMLDivElement>('.widget__body').forEach((e: HTMLDivElement) => e.style.maxHeight = `${widgetSize - 80}px`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store]);

    const screenerOptions = [
        {name:'Market Screener', isActive: true, content: <Screener />}, 
        {name:'Test', isActive: false, content: <div>Test body</div>},
    ];

    const chartOptions = [
        {name:'Chart', isActive: true, content: <div>Chart will be added in next release</div>},
    ];

    const watchlistOptions = [
        {name:'Watchlist', isActive: true, content: <Watchlist/>},
    ];

    const matrixOptions = [
        {name:'Matrix', isActive: true, content: <Matrix/>},
    ];

    const positionTrackerOptions = [
        {name:'Position Tracker', isActive: true, content: <PositionTracker/>},
    ];

    const walletsOptions = [
        {name:'Wallets', isActive: true, content: <Wallets/>},
    ];
    
    return (
        <>
            <main className="main">
                <Widget type="screener" options={screenerOptions}/>
                <Widget type="chart" options={chartOptions}/>
                <Widget type="watchlist" options={watchlistOptions}/>
                <Widget type="matrix" options={matrixOptions}/>
                <Widget type="posisionTracker" options={positionTrackerOptions}/>
                <Widget type="wallets" options={walletsOptions}/>
            </main>
            <Profile />
            <Footer/>
        </>
    )
}
