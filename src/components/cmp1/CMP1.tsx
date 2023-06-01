import './cmp1.scss'
import ring from '../../assests/ring.png'
import leaf from '../../assests/leaf.png'
import ghost1 from '../../assests/ghost1.png'
import ghost3 from '../../assests/ghost3.png'
import ghost5 from '../../assests/ghost5.png'
import ghost6 from '../../assests/ghost6.png'
import ghost7 from '../../assests/ghost7.png'
import ghost8 from '../../assests/ghost8.png'
import phone from '../../assests/phone.jpg'
import slide from '../../assests/slide.jpg'
import record from '../../assests/record.png'
import record1 from '../../assests/record1.png'
import record4 from '../../assests/record4.png'
import apple from '../../assests/apple.png'

export default function(){
    return(
        <div className="cmp1">
            <img src={record.src} alt='record' className='record'/>
            <img src={record1.src} alt='record' className='record1'/>
            <img src={leaf.src} alt='leaf' className='leaf'/>
            <div className='left'>
                <p>Ahead app</p>
                <h1>Master your life by mastering emotions</h1>
                <div className='info'>
                    <button>
                        <img src={apple.src} alt='apple' className='apple'/>
                        <div className='description'>
                            <p>Download on the</p>
                            <h4>App Store</h4>
                        </div>
                    </button>
                    <div className='rating'>
                        <div>⭐⭐⭐⭐⭐</div>
                        <p>100+ AppStore reviews</p>
                    </div>
                </div>
            </div>
            <img src={ring.src} alt='ring' className='ring'/>
            <img src={record4.src} alt='record' className='record4'/>
            {/* <img src={ghost8.src} alt='ghost' className='ghost9'/> */}
            <img src={phone.src} alt='phone' className='phone'/>
            <img src={slide.src} alt='slide' className='slide'/>
            <img src={ghost1.src} alt='ghost' className='ghost1'/>
            <img src={ghost3.src} alt='ghost' className='ghost3'/>
            <img src={ghost5.src} alt='ghost' className='ghost5'/>
            <img src={ghost6.src} alt='ghost' className='ghost6'/>
            <img src={ghost7.src} alt='ghost' className='ghost7'/>
            <img src={ghost8.src} alt='ghost' className='ghost8'/>
        </div>
    )
}