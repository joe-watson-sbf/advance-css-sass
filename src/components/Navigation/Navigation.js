/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */

import React from 'react'

const Navigation = () => {
    return (
        <div className='navigation'>
            <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
            <label for='navi-toggle' className='navigation__button'>
                <span className='navigation__icon'> &nbsp; </span>
            </label>
            <div className='navigation__background'>&nbsp;</div>

            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li className='navigation__item'><a href='/About' className='navigation__link'>About Natours</a></li>
                    <li className='navigation__item'><a href='/benfits' className='navigation__link'>Your benfits</a></li>
                    <li className='navigation__item'><a href='/Popular' className='navigation__link'>Popular tours</a></li>
                    <li className='navigation__item'><a href='/Stories' className='navigation__link'>Stories</a></li>
                    <li className='navigation__item'><a href='/Book' className='navigation__link'>Book now</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
