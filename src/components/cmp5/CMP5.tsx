import './cmp5.scss'
import num1 from '../../assests/num1.png'
import num2 from '../../assests/num2.png'
import num3 from '../../assests/num3.png'

export default function CMP5(){
    return(
        <div className="cmp5">
            <div className='sm'>Let your friends, family, and co-workers (anonymously) rate your social skills.</div>
            <div className='lr'>Ever wondered what others think of you?</div>
            <div className='dt'></div>
            <img src={num1.src} alt='num' className='num num1'/>
            <img src={num2.src} alt='num' className='num num2'/>
            <img src={num3.src} alt='num' className=' num num3'/>
            <div className='desc'>
                <div className='p'>Answer questions on your socila skills</div>
                <div className='p'>Let others anonymously answer the same questions about you</div>
                <div className='p'>Find out where you and others see things the same way - and where not!</div>
            </div>
            <div className='rec'>
                <div className='st'></div>
                <div className='dot dot1'></div>
                <div className='dot dot2'></div>
                <div className='dot dot3'></div>
                <div className='dot dot4'></div>
            </div>
            <div className=' box purple'>You</div>
            <div className='box blue'>Anonymonos 1</div>
            <div className='box orange'>Anonymonos 2</div>
            <div className=' box green'>Anonymonos 3</div>
        </div>
    )
}