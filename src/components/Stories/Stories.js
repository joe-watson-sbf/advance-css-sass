/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import { testimonial } from '../../data/data'
import Title from '../Title/Title'
import Story from './Story/Story'
import backgImage1 from '../../assets/img/nat-8.jpg'
import backgImage2 from '../../assets/img/nat-9.jpg'
import Button from '../Button/Button'
import video1 from '../../assets/img/video.mp4'
import video2 from '../../assets/img/video.webm'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'

const Stories = () => {
    return (
        <section className='section-stories'>
            <BackgroundVideo
                video1={video1}
                video2={video2}
                
            />

            <Title classes={['u-center-text u-margin-bottom-big', 'heading-secondary']}> 
                We make people genuinely happy
            </Title>

            <div className='row'>
                <Story
                    username={"Marry Smith"}
                    title={'I had the best week ever with my family'}
                    url={backgImage1}
                    testimonial={testimonial}
                />
            </div>
            
            <div className='row'>
                <Story
                    username={"Jack Wilson"}
                    title={'Wow! My life is completely different now'}
                    url={backgImage2}
                    testimonial={testimonial}
                />
            </div>

            <div className='u-center-text u-margin-top-huge'>
                <Button
                    cssClass={'btn-text'}
                    link={'#'}>
                    Read all stories &rarr;
                </Button>
            </div>

        </section>
    )
}

export default Stories
