import React, { useEffect } from 'react';
import UserSideMenu from '../components/UserSideMenu';
import store from '../store';
import { widgetCount } from '../utils/helpers';
import Footer from '../components/Footer';
import { observer } from 'mobx-react-lite';
import Widget from '../components/Widget';

const DefaultWidgets = () => {
    return <>
        {store.widgets.map((e: any, i: number) => {
            return <Widget options={e} key={i} widgetID={i} />
        })}
    </>
}
const ObserverDefaultWidgets = observer(DefaultWidgets);

function Home() {
    useEffect(() => {
        const widgetSize: any = (window.innerHeight - 50 - 40) / widgetCount(store.widgets.length);
        document.querySelectorAll<HTMLDivElement>('.widget').forEach((e: HTMLDivElement) => e.style.height = `${widgetSize}px`);
        document.querySelectorAll<HTMLDivElement>('.widget__body').forEach((e: HTMLDivElement) => e.style.maxHeight = `${widgetSize - 80}px`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <main className="main">
                <ObserverDefaultWidgets />
            </main>
            <UserSideMenu />
            <Footer />
        </>
    )
}

export default observer(Home);
