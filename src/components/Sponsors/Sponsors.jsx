import React from 'react'
import './Sponsors.css'
import logo1 from '../../assets/Photo/Sponsors/Burgreens.png'
import logo2 from '../../assets/Photo/Sponsors/Health Kitchen.png'
import logo3 from '../../assets/Photo/Sponsors/Re-juve.png'
import logo4 from '../../assets/Photo/Sponsors/SaladStop!.png'
import logo5 from '../../assets/Photo/Sponsors/summer Minibar.png'
import logo6 from '../../assets/Photo/Sponsors/Yellow Fit Kitchen.png'

function Sponsors() {
    return (
        <div className='sponsors'>
            <div className='title'>
                <h1>Our Sponsorships</h1>
            </div>
            <div className='sponsor-lists'>
                {/* <img src={logo1} alt="" /> */}
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                {/* <img src={logo4} alt="" /> */}
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>
        </div>
    )
}

export default Sponsors
