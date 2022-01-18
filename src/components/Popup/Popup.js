/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React, {useState} from 'react'

const Popup = ({zIndex=10, children, btnText}) => {

    const [show, setShow] = useState(false)

    const handleShowingPopup=()=>{
        setShow(!show);
    }
    
    return (
        <div className='section-book' style={{zIndex:{zIndex}}}>

            {show && 
                <>
                    <div className='u-right-text'>
                        <p className='btn'>
                            <span 
                                style={{color:'red', fontSize:'1.9rem'}} 
                                onClick={handleShowingPopup}> X </span>
                        </p>
                    </div>
                    <div className='u-center-text u-margin-top-huge'>
                        {children}
                    </div>
                </>
            }

            {
                !show && 
                <div className='u-center-text u-margin-top-huge'>
                    <button 
                        className='btn btn-green btn-animated' 
                        onClick={handleShowingPopup}
                    >
                        {btnText}
                    </button>
                </div>
            }
        </div>
    )
}

export default Popup
