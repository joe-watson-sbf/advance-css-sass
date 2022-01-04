/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import { testimonial } from '../../data/data'
import Title from '../Title/Title'
import Story from './Story/Story'
import backgImage from '../../assets/img/nat-8.jpg'

const Stories = () => {
    return (
        <section className='section-stories'>
            <Title classes={'heading-secondary'}> 
                We make people genuinely happy
            </Title>

            <Story
                title={'I had the best week ever with my family'}
                url={backgImage}
                testimonial={testimonial}
            />

        </section>
    )
}

export default Stories
