import React from 'react';
import Frinds from "./Friends";

import MarkStoler from "../../assets/me.jpg";
import OliviaJacobs from "../../assets/Olivia Jacobs.jpg";
import AliahPitts from "../../assets/Aliah Pitts.jpg";
import AndreasBrixen from "../../assets/Andreas Brixen.jpg";
import ArnobMukherjee from "../../assets/Arnob Mukherjee.jpg";
import JordanSinger from "../../assets/Jordan Singer.jpg";
import JuneCha from "../../assets/June Cha.jpg";
import KonstaPeura from "../../assets/konsta peura.jpg";
import LeoGill from "../../assets/leo gill.jpg";
import LucreciaCalder from "../../assets/Lucrecia Calder.jpg";

// profile__active
export default function UserSideMenu() {
    return (
        <aside className="user-side-menu ">
            <div className="user-side-menu__container">
                <img className="user-side-menu__pic" src={MarkStoler} alt="Mark Stoler" />
            </div>
            <div className="user-side-menu__options">
                <i className="btn far fa-user"></i>
                <i className="btn far fa-comment-alt">
                    <span className="notification notification--top-red">3</span>
                </i>
                <i className="btn fas fa-phone-alt"></i>
            </div>
            <div className="user-side-menu__friends-container">
                <div className="user-side-menu__friends">
                    <Frinds name="Olivia Jacobs" image={OliviaJacobs} online={true} unreadMesages={2} />
                    <Frinds name="Aliah Pitts" image={AliahPitts} />
                    <Frinds name="Andreas Brixen" image={AndreasBrixen}  />
                    <Frinds name="Arnob Mukherjee" image={ArnobMukherjee} online={true} />
                    <Frinds name="Jordan Singer" image={JordanSinger} unreadMesages={1} />
                    <Frinds name="June Cha" image={JuneCha} />
                    <Frinds name="Konsta Peura" image={KonstaPeura} online={true}  />
                    <Frinds name="Leo Gill" image={LeoGill} />
                    <Frinds name="Lucrecia Calder" image={LucreciaCalder} />
                </div>
                <i className="btn btn__friend-add fas fa-plus"></i>
            </div>

        </aside>
    )
}
