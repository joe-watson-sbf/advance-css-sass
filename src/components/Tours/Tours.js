/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import Tour from './Tour/Tour'
import {tours} from '../../data/data';
import Button from '../Button/Button';
import Title from '../Title/Title';

const Tours = () => {
    return (
        <section className='section-tours'>
            <Title classes={'heading-secondary'}> 
                Most popular tours 
            </Title>

            <div className='row'>
                {tours.front.map((tour, idx)=>{
                    let nClass = 1 + idx;
                    return <div key={idx} className='col-1-of-3'>
                        <Tour
                            title={tour.title}
                            details={tour.details}
                            backTitle={tours.back[idx].title}
                            price={tours.back[idx].price}
                            classes={nClass}
                        />
                    </div>
                })}
            </div>

            <div className='u-center-text u-margin-top-huge'>
                <Button
                    cssClass={'btn btn-green btn-animated'}
                    link={'#'}>
                    Discover all tour
                </Button>
            </div>
        </section>
    )
}

export default Tours
