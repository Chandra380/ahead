'use client'

import './navbar.scss'
import icon from '../../assests/icon.png'
import {motion} from 'framer-motion'

export default function Navbar(){
    return(
        <div className="navbar">
            <img src={icon.src} alt='icon'/>
            <div className='options'>
                <div>Emotions</div>
                <div>Manifesto</div>
                <div>Self-awareness test</div>
                <div>Work With Us</div>
            </div>
            <motion.button 
                whileHover={{scale: 1.1}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >Download app</motion.button>
        </div>
    )
}