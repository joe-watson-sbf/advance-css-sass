/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import Button from '../../components/Button/Button'
import CompositionImg from '../CompositionImg/CompositionImg'
import image1 from '../../assets/img/nat-1-large.jpg'
import image2 from '../../assets/img/nat-2-large.jpg'
import image3 from '../../assets/img/nat-3-large.jpg'
import Title from '../Title/Title'

const About = () => {
    return (
        <section className='section-about u-margin-bottom-big'>
            <Title classes={['u-center-text u-margin-bottom-big', 'heading-secondary']}>
                Exciting tours for adventurous people
            </Title>

            <div className='row'>
                <div className='col-1-of-2'>
                    <h3 className='heading-tertiary u-margin-bottom-small'>
                        You're going to fall in love with nature
                    </h3>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni repudiandae quia eligendi cum? Quasi fugiat dicta
                        fugit sunt enim distinctio quibusdam voluptatibus?
                        Quia mollitia veniam quis voluptate temporibus repellat deleniti.
                    </p>

                    <h3 className='heading-tertiary u-margin-bottom-small'>
                        Live adventures like you never have before
                    </h3>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni repudiandae quia eligendi cum? Quasi fugiat dicta
                        fugit sunt enim distinctio quibusdam voluptatibus?
                        Quia mollitia veniam quis voluptate temporibus repellat deleniti.
                    </p>

                    <Button 
                        cssClass={'btn-text'} 
                        link={'http://localhost:3000/'}> Learn more &rarr; </Button>
                </div>


                <div className='col-1-of-2'>
                    <CompositionImg
                        img1={image1}
                        img2={image2}
                        img3={image3}
                    />
                </div>
            </div>

        </section>
    )
}

export default About
