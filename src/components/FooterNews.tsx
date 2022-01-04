import React from 'react';
import svg from '../assets/sprite.svg';

interface IProps {
    logo?: string;
    title?: string;
}

export default function FooterNews({logo, title}: IProps) {
    return <div className="footer__news">
       {logo && <figure className="footer__news__container">
            <svg className="footer__news__icon" style={{ "fill": "#eee" }}>
                <use xlinkHref={`${svg}#${logo}`}></use>
            </svg>
            {title && <figcaption className="footer__news__company">{title}</figcaption>}
            <figcaption className="footer__news__time">1 min ago</figcaption>
        </figure>}
        <div className="footer__news--marquee">
            <p className="footer__news--marquee-scrolling">
                {loremIpsum()}
            </p>
        </div>
    </div>
}

function loremIpsum() {
    const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Quam', 'accusantium', 'obcaecati!', 'Voluptatem', 'aliquam', 'quae', 'elegendi', 'consequatur', 'ipsam', 'et', 'ipsum', 'necessitatibus', 'quis', 'unde', 'qui', 'ratione', 'architecto.'];
    let output = '';

    const numWords = Math.floor(Math.random() * 10) + 10;
    for (let i = 0; i < numWords; i++) {
        output += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return output;
}
