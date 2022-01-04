/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const Button = ({children, cssClass, link}) => {
    return (
        <a href={link} className={cssClass}> {children} </a>
    )
}

export default Button
