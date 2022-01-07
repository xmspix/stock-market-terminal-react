import React from 'react';

interface IFriends {
    name: string;
    image: string;
    online?: boolean;
    unreadMesages?: number;
}

export default function Friends({name, image, online, unreadMesages}: IFriends) {
    return <div className="user-side-menu__friend">
    <img className=" user-side-menu__pic" src={image} alt={name} />
    {unreadMesages && <span className="notification notification--friend-red">{unreadMesages}</span>}
    {online && <span className="user-side-menu__friend--online"></span>}
</div>
}