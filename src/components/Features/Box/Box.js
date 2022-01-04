/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const Box = ({icon, title, content}) => {
    return (
        <div className='feature-box'>
            <i className={'feature-box__icon ' + icon} />
            <h3 className='heading-tertiary'>
                {title}
            </h3>
            <p className='feature-box__text'>
                {content}
            </p>
        </div>
    )
}

export default Box
