/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */

import React from 'react'
import logo from '../../assets/img/logo-green-2x.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__logo-box'>
                <img src={logo} alt='Full Logo' className='footer__logo' />
            </div>
            <div className='row'>
                <div className='col-1-of-2'>
                    <div className='footer__navigation'>
                        <ul className='footer__list'>
                            <li className='footer__item'><a href='/Company' className='footer__link'>Company</a></li>
                            <li className='footer__item'><a href='/Contact' className='footer__link'>Contact Us</a></li>
                            <li className='footer__item'><a href='/Carrers' className='footer__link'>Carrers</a></li>
                            <li className='footer__item'><a href='/Privacy' className='footer__link'>Privacy Policy</a></li>
                            <li className='footer__item'><a href='/Terms' className='footer__link'>Terms</a></li>

                        </ul>

                    </div>
                </div>

                <div className='col-1-of-2'>
                    <p className='footer__copyright'>
                        Built my <a href='/developper' className='footer__link'>Joe Watson SBF {' '}</a>
                        from a online course <a href='/author' className='footer__link'>Advanced CSS and Sass</a>
                        . Copyright &copy; by Jonas Schmedtmann.
                        You are 100% to use this webpage for both personal and commercial use, but NOT to claim it
                        as your own design. A credit to the original author, is of course highly appreciated!
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
