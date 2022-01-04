import React from 'react';
import FooterNews from './FooterNews';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__text">Right now</div>


            {/* <div className="footer__news">
                <div className="footer__news--marquee">
                <p className="footer__news--marquee-scrolling">
                Lyft improves outlook despite loosing tons
                of money.
                Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quam, accusantium obcaecati! Voluptatem aliquam quae eligendi
                consequatur, ipsam, et ipsum, necessitatibus quis unde qui ratione architecto.
                </p>
                </div>
            </div> */}

            <FooterNews logo={'new-york-times'} title={'NY Times'}/>
            <FooterNews logo={'coindesk'} title={'Coindesk'}/>
{/*             
            <div className="footer__news">
                <figure className="footer__news--NY-Times">
                    <svg className="footer__news--NY-Times-icon" style={{ "fill": "#eee" }}>
                        <use xlinkHref={`${svg}#new-york-times`}></use>
                    </svg>
                    <figcaption className="footer__news--NY-Times-time">1 min ago</figcaption>
                </figure>
                <div className="footer__news--marquee">
                    <p className="footer__news--marquee-scrolling">
                        Stocks Climb and Gold
                        Dips as China Calms
                        Markets.
                        Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quam, accusantium obcaecati! Voluptatem aliquam quae eligendi
                        consequatur, ipsam, et ipsum, necessitatibus quis unde qui ratione architecto.
                    </p>
                </div>
            </div>

            <div className="footer__news">
                <figure className="footer__news--Coindesk">
                    <svg className="footer__news--Coindesk-icon" style={{ "fill": "#eee" }}>
                        <use xlinkHref={`${svg}#coindesk`}></use>
                    </svg>
                    <figcaption className="footer__news--Coindesk-time">8 min ago</figcaption>
                </figure>
                <div className="footer__news--marquee">
                    <p className="footer__news--marquee-scrolling">
                        Ex-Barclays
                        Executives Faces New Charges.
                        Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quam, accusantium obcaecati! Voluptatem aliquam quae eligendi
                        consequatur, ipsam, et ipsum, necessitatibus quis unde qui ratione architecto.
                    </p>
                </div>
            </div> */}

        </footer>
    )
}