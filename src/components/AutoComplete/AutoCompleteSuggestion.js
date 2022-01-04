/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const data = [
    {
        name: "Joe Watson SBF",
        phone: "000-000-0000"
    },
    {
        name: "Santiago",
        phone: "000-000-0000"
    },
    {
        name: "Raul",
        phone: "000-000-0000"
    },
    {
        name: "Camilo",
        phone: "000-000-0000"
    },
    {
        name: "Andres",
        phone: "000-000-0000"
    },
    {
        name: "Julian",
        phone: "000-000-0000"
    },
    {
        name: "Manuel",
        phone: "000-000-0000"
    },
    {
        name: "Leonardo",
        phone: "000-000-0000"
    }
]

const AutoCompleteSuggestion = () => {

    return (
        <div>
            <input list='people' name='person'/>
            <datalist id='people'>
                {data && data.map((person, index)=>{
                    return <option value={person.name} key={index} />
                })}
            </datalist>
        </div> 
    )
}

export default AutoCompleteSuggestion
