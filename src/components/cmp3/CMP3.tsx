'use client'

import './cmp3.scss' 
import {motion} from 'framer-motion'
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
            <motion.div className='wordings'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: 'spring', damping: 5, duration: 0.75, delay: 1}}
                viewport={{once:true}}
            >
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
            </motion.div>
            <motion.img 
                whileInView={{rotate: 360}}
                transition={{duration: 4, delay: 0.25}}
                viewport={{once: true}}
            src={flower.src} alt='flower' className='flower'/>
            <motion.img 
                whileInView={{rotate: 360}}
                transition={{duration: 4, delay: 0.25}}
                viewport={{once: true}}
            src={leaf.src} alt='leaf' className='leaf1'/>
            <motion.img 
                initial = {{rotate: -80}}
                whileInView={{rotate: 280}}
                transition={{duration: 4, delay: 0.25}}
                viewport={{once: true}}
            src={leaf.src} alt='leaf' className='leaf2'/>
            <motion.img 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 1}}
                viewport={{once: true}}
            src={record.src} alt='record' className='record'/>
            <motion.img 
                initial={{x: 150, y: -150}}
                whileInView={{x: 0, y: 0}}
                transition={{duration: 1, delay: 1.25}}
                viewport={{once: true}}
            src={record1.src} alt='record' className='record1'/>
            <motion.img 
                initial={{x: -120, y: 130}}
                whileInView={{x: 0, y: 0}}
                transition={{duration: 1, delay: 1.25}}
                viewport={{once: true}}
            src={circle.src} alt='circle' className='circle'/>
            <motion.img 
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                transition={{type: 'spring', damping: 5, duration: 0.75, delay: 1.5}}
                viewport={{once: true}}
            src={ghost0.src} alt='ghost' className='ghost0'/>
            <motion.img 
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                transition={{type: 'spring', damping: 5, duration: 0.75, delay: 1.75}}
                viewport={{once: true}}
            src={num1.src} alt='num' className='num1'/>
        </div>
    )
}