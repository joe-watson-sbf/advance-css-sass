/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const Grid = () => {
    return (
        <section className='grid-test'>
            <div className='row'>
                <div className='col-1-of-2'>
                    Col 1 of 2
                </div>
                <div className='col-1-of-2'>
                    Col 1 of 2
                </div>
            </div>
            
            <div className='row'>
                <div className='col-1-of-3'>
                    Col 1 0f 3
                </div>
                <div className='col-1-of-3'>
                    Col 1 0f 3
                </div>
                <div className='col-1-of-3'>
                    Col 1 0f 3
                </div>
            </div>

            <div className='row'>
                <div className='col-1-of-3'>
                    Col 1 0f 3
                </div>
                <div className='col-2-of-3'>
                    Col 2 0f 3
                </div>
            </div>

            <div className='row'>
                <div className='col-1-of-4'>
                    Col 1 0f 4
                </div>
                <div className='col-1-of-4'>
                    Col 1 0f 4
                </div>
                <div className='col-1-of-4'>
                    Col 1 0f 4
                </div>
                <div className='col-1-of-4'>
                    Col 1 0f 4
                </div>
            </div>

            <div className='row'>
                <div className='col-1-of-4'>
                    Col 1 0f 4
                </div>
                <div className='col-1-of-4'>
                    Col 1 0f 4
                </div>
                <div className='col-2-of-4'>
                    Col 2 0f 4
                </div>
            </div>

            <div className='row'>
                <div className='col-1-of-4'>
                    Col 1 0f 4
                </div>
                <div className='col-3-of-4'>
                    Col 3 0f 4
                </div>
            </div>
            

        </section>
    )
}

export default Grid
