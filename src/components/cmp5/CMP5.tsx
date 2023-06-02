'use client'

import './cmp5.scss'
import {motion} from 'framer-motion'
import num1 from '../../assests/num1.png'
import num2 from '../../assests/num2.png'
import num3 from '../../assests/num3.png'

export default function CMP5(){
    return(
        <div className="cmp5">
            <div className='sm'>Let your friends, family, and co-workers (anonymously) rate your social skills.</div>
            <div className='lr'>Ever wondered what others think of you?</div>
            <motion.div className='dt'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.75, delay: 1}}
                viewport={{once:true}}
            ></motion.div>
            <motion.img 
                initial={{ scale: 0, }}
                whileInView={{ scale: 1}}
                transition={{ type: 'spring', damping: 3, duration: 0.75, delay: 0.5}}
                viewport={{once:true}}
            src={num1.src} alt='num' className='num num1'/>
            <motion.img 
                initial={{ scale: 0, }}
                whileInView={{ scale: 1}}
                transition={{ type: 'spring', damping: 3, duration: 0.75, delay: 0.5}}
                viewport={{once:true}}
            src={num2.src} alt='num' className='num num2'/>
            <motion.img 
                initial={{ scale: 0, }}
                whileInView={{ scale: 1}}
                transition={{ type: 'spring', damping: 3, duration: 0.75, delay: 0.5}}
                viewport={{once:true}}
            src={num3.src} alt='num' className=' num num3'/>
            <motion.div className='desc'
                initial={{ scale: 0, }}
                whileInView={{ scale: 1}}
                transition={{ type: 'spring', damping: 10, duration: 1, delay: 0.5}}
                viewport={{once:true}}
            >
                <div className='p'>Answer questions on your socila skills</div>
                <div className='p'>Let others anonymously answer the same questions about you</div>
                <div className='p'>Find out where you and others see things the same way - and where not!</div>
            </motion.div>
            <div className='rec'>
                <div className='st'></div>
                <div className='dot dot1'></div>
                <div className='dot dot2'></div>
                <div className='dot dot3'></div>
                <div className='dot dot4'></div>
            </div>
            <motion.div className=' box purple'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: 'spring', damping: 5, duration: 0.75, delay: 0.75}}
                viewport={{once:true}}
            >You</motion.div>
            <motion.div className='box blue'
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{ type: 'spring', damping: 5, duration: 0.75, delay: 1}}
                viewport={{once:true}}
            >Anonymonos 1</motion.div>
            <motion.div className='box orange'
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{ type: 'spring', damping: 5, duration: 0.75, delay: 1}}
                viewport={{once:true}}
            >Anonymonos 2</motion.div>
            <motion.div className=' box green'
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{ type: 'spring', damping: 5, duration: 0.75, delay: 1}}
                viewport={{once:true}}
            >Anonymonos 3</motion.div>
        </div>
    )
}