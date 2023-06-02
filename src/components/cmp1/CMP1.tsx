'use client'

import './cmp1.scss'
import {delay, motion} from 'framer-motion'
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


export default function CMP1(){
   

    return(
        <motion.div className="cmp1"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
         >
            <motion.img
                initial={{ y: -100, x: 0 }}
                whileInView={{ y: -25, x: 50 }}
                transition={{ duration: 2, delay: 0.25}}
                viewport={{once: true}}
                src={record.src} alt='record' className='record'
            />
            <motion.img
                initial={{ y: -100, x: 50 }}
                whileInView={{ y: -35, x: -250}}
                transition={{ duration: 3, delay:1}}
                viewport={{once: true}}
                src={record1.src} alt='record' className='record1'
            />
            <motion.img
                whileInView={{
                    rotate: [0, 360],
                }}
                transition={{ duration: 2}}
                viewport={{once: true}}
                src={leaf.src} alt='leaf' className='leaf'/>
            <div className='left'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.5}}
                        viewport={{once:true}}
                    >
                        <p>Ahead app</p>
                        <h1>Master your life by mastering emotions</h1>
                    </motion.div> 
                <div className='info'>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <img src={apple.src} alt='apple' className='apple'/>
                        <div className='description'>
                            <p>Download on the</p>
                            <h4>App Store</h4>
                        </div>
                    </motion.button>
                    <div className='rating'>
                        <div>⭐⭐⭐⭐⭐</div>
                        <p>100+ AppStore reviews</p>
                    </div>
                </div>
            </div>
            <img src={ring.src} alt='ring' className='ring'/>
            <img src={record4.src} alt='record' className='record4'/>
            <img src={phone.src} alt='phone' className='phone'/>
            <motion.img
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: 'spring', duration: 1.4, delay: 0.25}}
                viewport={{once:true}}
            src={slide.src} alt='slide' className='slide'/> 
            <motion.img
                whileInView={{
                    rotate: 360,
                    scale: [1.4, 1],
                }}
                transition={{ duration: 0.5, delay: 1.25}}
                viewport={{once:true}}
            src={ghost1.src} alt='ghost' className='ghost1'/>
            <motion.img
                initial={{x: -25, rotate: -540}}
                whileInView={{
                    x: 0, rotate: -10 
                }}
                transition={{ duration: 0.5, delay: 2}}
                viewport={{once:true}}
            src={ghost3.src} alt='ghost' className='ghost3'/>
            <motion.img
                whileInView={{
                    scale: [1, 1.4, 1, 1.4, 1],
                }}
                transition={{ duration: 0.5, delay: 2.75}}
                viewport={{once:true}}
            src={ghost5.src} alt='ghost' className='ghost5'/>
            <img src={ghost6.src} alt='ghost' className='ghost6'/>
            <img src={ghost7.src} alt='ghost' className='ghost7'/>
            <img src={ghost8.src} alt='ghost' className='ghost8'/>
        </motion.div>
    )
}