/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const Title = ({children, classes}) => {
    return (
        <div className='u-center-text u-margin-bottom-medium' >
            <h2 className={classes}>
                {children}
            </h2>
        </div>
    )
}

export default Title
