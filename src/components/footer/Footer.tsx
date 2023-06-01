import './footer.scss'
import icon from '../../assests/icon.png'
import email from '../../assests/email.png'
import pin from '../../assests/pin.png'
import apple from '../../assests/apple.png'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='st'></div>
            <img src={icon.src} alt='icon' className='icon'/>
            <h2>ahead</h2>
            <div className='info'>
                <span>
                    <img src={pin.src} alt='location'/>
                    <span className='text'>AugustraBe 26, 10117 Berlin</span>
                </span>
                <span>
                    <img src={email.src} alt='email'/>
                    <span className='text'>hi@ahead-app.com</span>
                </span>
            </div>
            <button>
                <img src={apple.src} alt='apple' className='apple'/>
                <div className='description'>
                    <p>Download on the</p>
                    <h4>App Store</h4>
                </div>
            </button>
            <div className='cpyrt'>© 2022 Ahead app. All right reserved</div>
        </div>
    )
}