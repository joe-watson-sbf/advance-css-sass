/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const Title = ({children, classes}) => {
    return (
        <div className={classes[0]} >
            <h2 className={classes[1]}>
                {children}
            </h2>
        </div>
    )
}

export default Title
