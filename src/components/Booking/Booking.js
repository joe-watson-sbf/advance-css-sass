/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import InputGroup from '../InputGroup/InputGroup'
import RadioGroup from '../RadioGroup/RadioGroup'
import Title from '../Title/Title'

const Booking = () => {
    return (
        <section className='section-book'>
            <div className='row'>
                <div className='book'>
                    <div className='book__form'>
                        <form action='#' className='form'>

                            <Title classes={['u-margin-bottom-small', 'heading-secondary']}> 
                                Start booking now
                            </Title>

                            <InputGroup
                                type={'text'}
                                title={'Full name'}
                                id={'name'}
                            />
                            <InputGroup
                                type={'email'}
                                title={'Email address'}
                                id={'email'}
                            />

                            <div className='form__group u-margin-bottom-medium'>
                                <RadioGroup
                                    type={'radio'}
                                    title={'Small tour group'}
                                    classes={['form__radio-group', 'form__radio-input', 'form__radio-label']}
                                    id={'small'}
                                />
                                <RadioGroup
                                    type={'radio'}
                                    title={'Large tour group'}
                                    classes={['form__radio-group', 'form__radio-input', 'form__radio-label']}
                                    id={'large'}
                                />
                            </div>

                            <div className='form__group'>
                                <button className='btn btn-green'>Next Step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking
