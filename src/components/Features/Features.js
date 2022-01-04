/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import Box from './Box/Box'

const Features = () => {
    return (
        <section className='section-features'>
            <div className='row'>
                <div className='col-1-of-4'>
                    <Box
                        icon={'icon-basic-world'}
                        title={'EXPLORE THE WORLD'}
                        content={'Lorem ipsum dolor sit amet '+
                        'consectetur adipisicing elit.'
                        }
                    />

                </div>
                <div className='col-1-of-4'>
                    <Box
                        icon={'icon-basic-compass'}
                        title={'Meet nature'}
                        content={'Lorem ipsum dolor sit amet '+
                        'consectetur adipisicing elit.'
                        }
                    />

                </div>
                <div className='col-1-of-4'>
                    <Box
                        icon={'icon-basic-map'}
                        title={'Find your way'}
                        content={'Lorem ipsum dolor sit amet '+
                        'consectetur adipisicing elit.'
                        }
                    />

                </div>
                <div className='col-1-of-4'>
                    <Box
                        icon={'icon-basic-heart'}
                        title={'Live a healthier life'}
                        content={'Lorem ipsum dolor sit amet '+
                        'consectetur adipisicing elit.'
                        }
                    />

                </div>
            </div>
            
        </section>
    )
}

export default Features
