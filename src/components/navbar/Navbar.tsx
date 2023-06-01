import './navbar.scss'

import './navbar.scss'
import icon from '../../assests/icon.png'

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
            <button>Download app</button>
        </div>
    )
}