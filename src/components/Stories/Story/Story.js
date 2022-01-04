/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'


const Story = ({url, title, testimonial}) => {
    return (
        <div className='story'>
            <figure className='story__shape'>
                <img className='story__img' src={url} alt='bgImag'/>
            </figure>
            <div className='story_text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                    {title}
                </h3>
                <p>
                    {testimonial }
                </p>
            </div>
        </div>
    )
}

export default Story
