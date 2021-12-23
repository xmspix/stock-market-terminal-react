import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const [active, setActive] = useState(true);

    const location = useLocation();

    useEffect(() => {
        const rootElem = document.querySelector<HTMLDivElement>('#root');
        const profileElem = document.querySelector<HTMLDivElement>('.profile');
        if (active) {
            profileElem?.classList.add("profile__active");
            rootElem!.style.width = "calc(100% - 50px)"
        }
    }, [active])

    const handleUserSideMenu = () => {
        const rootElem = document.querySelector<HTMLDivElement>('#root');
        const profileElem = document.querySelector<HTMLDivElement>('.profile');
        if (active) {
            //  if user menu is active than hide
            setActive(false);
            profileElem?.classList.remove("profile__active");
            rootElem!.style.width = "100%";
        } else {
            //  if user menu is't active than show
            setActive(true);
            profileElem?.classList.add("profile__active");
            rootElem!.style.width = "calc(100% - 50px)";
        }
    }

    return <header className="header">
        <div className="header__logo-container">
            <p>Stock Market Terminal</p>
        </div>
        <div className="header__search">
            <i className="search search__icon fa fa-search"></i>
            <input className="search__input" type="text" placeholder="Search" />
        </div>
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__list-item"><NavLink to="/" className={location.pathname !== '/' ? "header__list-link" : 'header__list-link header__list-link-active'}>Main</NavLink></li>
                <li className="header__list-item"><NavLink to="/charts" className={location.pathname !== '/charts' ? "header__list-link" : 'header__list-link header__list-link-active'}>Charts</NavLink></li>
            </ul>
        </nav>
        <div className="header__status">
            <i className="header__status-refresh fas fa-sync-alt"></i>
            <p className="header__status-text">Connected</p>
        </div>
        <div className="header__menu">
            <i className="btn fas fa-cog" onClick={() => handleUserSideMenu()}></i>
        </div>
    </header>
}