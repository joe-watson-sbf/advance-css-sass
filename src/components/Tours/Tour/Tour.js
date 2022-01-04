/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import Button from '../../Button/Button'

const Tour = ({ title, details, backTitle, price, classes }) => {
    return (
        <div className='card'>
            <Front title={title} details={details} classes={classes}/>
            <Back title={backTitle} value={price} classes={classes}/>

        </div>

    )
}


const Front = ({ details, title, classes }) => {
    return (

        <div className='card__side card__side--front'>

            <div className={`card__picture card__picture--${classes}`}>
                &nbsp;
            </div>
            <h4 className='card__heading'>
                <span className={`card__heading-spran card__heading-spran--${classes}`}>
                    {title}
                </span>

            </h4>
            <div className='card__details'>
                <ul>
                    {details && details.map((elt, idx) => {
                        return (
                            <li key={idx}>
                                {elt}
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}


const Back = ({ title, value, classes }) => {
    return (
        <div className={`card__side card__side--back card__side--back-${classes}`}>
            <div className='card__cta'>
                <div className='card__price-box' >
                    <p className='card__price-only'>{title}</p>
                    <p className='card__price-value'>${value}</p>
                </div>
                <Button
                    cssClass={'btn btn-white btn-animated'}
                    link={'#'}>
                    Book Now
                </Button>

            </div>
        </div>
    )
}

export default Tour
