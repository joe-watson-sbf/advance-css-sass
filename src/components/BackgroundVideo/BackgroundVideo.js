/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const BackgroundVideo = ({ video1, video2 }) => {
    return (
        <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
                <source src={video1} type='video/mp4' />
                <source src={video2} type='video/webm' />
                Your browser is not supported!
            </video>
        </div>
    )
}

export default BackgroundVideo
