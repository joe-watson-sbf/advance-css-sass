/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const InputGroup = ({type, title, id}) => {
    return (
        <div className='form__group'>
            <input type={type} className='form__input' placeholder={title} id={id} required />
            <label for={id} className='form__label'>{title}</label>
        </div>
    )
}

export default InputGroup
