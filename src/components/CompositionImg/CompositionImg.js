/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const CompositionImg = ({img1, img2, img3}) => {
    return (
        <div className='composition'>
            <img
                src={img1}
                alt='photo1'
                className='composition__photo composition__photo--p1' />
            <img
                src={img2}
                alt='photo2'
                className='composition__photo composition__photo--p2' />
            <img
                src={img3}
                alt='photo3'
                className='composition__photo composition__photo--p3' />
        </div>
    )
}

export default CompositionImg
