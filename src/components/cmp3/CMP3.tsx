import './cmp3.scss' 
import leaf from '../../assests/leaf.png'
import record from '../../assests/record.png'
import record1 from '../../assests/record1.png'
import flower from '../../assests/flower.png'
import circle from '../../assests/circle.png'
import ghost0 from '../../assests/ghost0.png'
import num1 from '../../assests/num1.png'

export default function CMP3(){
    return(
        <div className="cmp3">
            <div className='wordings'>
                <div className='sm'>
                    Built out of frustration
                </div>
                <div className='lr'>
                    Meet the ahead app
                </div>
                <div className='details'>
                    <div>A personalized pocket coach that provides bite-sized,
                        science-driven tools to boost emotional intelligence.
                    </div>
                    <div>
                        Think of it as a pocket cheerleader towards a better, more fulfilling.
                    </div>
                </div>
            </div>
            <img src={flower.src} alt='flower' className='flower'/>
            <img src={leaf.src} alt='leaf' className='leaf1'/>
            <img src={leaf.src} alt='leaf' className='leaf2'/>
            <img src={record.src} alt='record' className='record'/>
            <img src={record1.src} alt='record' className='record1'/>
            <img src={circle.src} alt='circle' className='circle'/>
            <img src={ghost0.src} alt='ghost' className='ghost0'/>
            <img src={num1.src} alt='num' className='num1'/>
        </div>
    )
}