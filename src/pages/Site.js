import React from 'react'
import About from '../components/About/About'
import Booking from '../components/Booking/Booking'
import Features from '../components/Features/Features'
import Popup from '../components/Popup/Popup'
import Stories from '../components/Stories/Stories'
import Tours from '../components/Tours/Tours'

const Site = () => {
    return (
        <main>
            <About/>
            <Features/>
            <Tours/>
            <Stories/>
            <Booking/>
            <Popup/>
        </main>
    )
}

export default Site
