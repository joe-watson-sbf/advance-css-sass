/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */

import React from 'react';
import nat8 from '../../assets/img/nat-8.jpg'
import nat9 from '../../assets/img/nat-9.jpg'
import Button from '../Button/Button';

const Popup = () => {
    return <div className='popup' id='popup'>
        <div className='popup__content'>
            <div className='popup__left'>
                <img src={nat8} alt='Tour_photo1' className='popup__img'/>
                <img src={nat9} alt='Tour_photo2' className='popup__img'/>
            </div>

            <div className='popup__right'>
                <a href='#section-tours' className='popup__close'>&times;</a>
                <h2 className='heading-secondary u-margin-bottom-small'> Start booking now</h2>
                <h3 className='heading-tertiary .u-margin-bottom-small'> Important &ndash; Please read these terms before booking</h3>
                <p className='popup__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut faucibus pulvinar elementum integer. Etiam dignissim diam quis enim. 
                    In tellus integer feugiat scelerisque varius morbi enim.
                </p>
                <Button link='#section-book' cssClass={'btn btn-green'}> Book now </Button>
            </div>
        </div>
    </div>;
};

export default Popup;

