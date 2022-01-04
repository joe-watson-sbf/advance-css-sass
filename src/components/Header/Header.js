/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */


import React from 'react'
import logo from '../../assets/img/logo-white.png';
import Button from '../Button/Button';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo-box'>
                <img src={logo} alt='logo' className='header__logo' />
            </div>
            <div className='header__text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary-main'>OUTDOORS</span>
                    <span className='heading-primary-sub'>is where life happens</span>
                </h1>
                <Button 
                    cssClass={'btn btn-white btn-animated'} 
                    link={'http://localhost:3000/'}>
                        Discover our tours
                </Button>
            </div>
        </header>
    )
}

export default Header
