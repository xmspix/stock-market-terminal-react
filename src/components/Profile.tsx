import React from 'react';

import me from "../assets/me.jpg";

import OliviaJacobs from "../assets/Olivia Jacobs.jpg";
import AliahPitts from "../assets/Aliah Pitts.jpg";
import AndreasBrixen from "../assets/Andreas Brixen.jpg";

import ArnobMukherjee from "../assets/Arnob Mukherjee.jpg";
import JordanSinger from "../assets/Jordan Singer.jpg";
import JuneCha from "../assets/June Cha.jpg";
import KonstaPeura from "../assets/konsta peura.jpg";
import LeoGill from "../assets/leo gill.jpg";
import LucreciaCalder from "../assets/Lucrecia Calder.jpg";

interface Props {

}

// profile__active
export default function Profile(props: Props) {
    return (
        <aside className="profile ">
            <div className="profile__container">
                <img className="profile__pic" src={me} alt="Mark Stoler" />
            </div>
            <div className="profile__options">
                <i className="btn far fa-user"></i>
                <i className="btn far fa-comment-alt">
                    <span className="notification notification--top-red">1</span>
                </i>
                <i className="btn fas fa-phone-alt"></i>
            </div>
            <div className="profile__friends-container">
                <div className="profile__friends">
                    <img className="profile__pic" src={OliviaJacobs} alt="Olivia Jacobs" />
                    <img className="profile__pic" src={AliahPitts} alt="Aliah Pitts" />
                    <div className="profile__friend">
                        <img className=" profile__pic" src={AndreasBrixen} alt="Andreas Brixen" />
                        <span className="notification notification--friend-red">1</span>
                    </div>
                    <img className="profile__pic" src={ArnobMukherjee} alt="Arnob Mukherjee" />
                    <img className="profile__pic" src={JordanSinger} alt="Jordan Singer" />
                    <img className="profile__pic" src={JuneCha} alt="June Cha" />
                    <img className="profile__pic" src={KonstaPeura} alt="konsta peura" />
                    <img className="profile__pic" src={LeoGill} alt="leo gill" />
                    <img className="profile__pic" src={LucreciaCalder} alt="Lucrecia Calder" />
                </div>
                <i className="btn btn__friend-add fas fa-plus"></i>
            </div>

        </aside>
    )
}
