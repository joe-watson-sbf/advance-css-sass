/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const RadioGroup = ({title, type, classes, id}) => {
    return (
        <div className={classes[0]}>
            <input type={type} className={classes[1]} id={id} name='btn-radio'/>
            <label for={id}  className={classes[2]}>
                <span className='form__radio-button'></span>
                {title}
            </label>
        </div>
    )
}

export default RadioGroup
