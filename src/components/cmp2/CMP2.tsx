'use client'

import React from 'react'
import {motion} from 'framer-motion'
import './cpm2.scss'
import ghost2 from '../../assests/ghost2.png'
import plt from '../../assests/plt.png'
import plt1 from '../../assests/plt1.png'
import plt2 from '../../assests/plt2.png'
import plt3 from '../../assests/plt3.png'
import plt4 from '../../assests/plt4.png'


export default function CMP2(){

    return(
        <div className="cmp2">
            <motion.div className='description'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1,  x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: 'spring', damping: 5, duration: 0.5, delay: 0.5}}
                viewport={{once:true}}
            >
                <div className='h'>
                    EQ beats IQ
                </div>
                <div className='p'>
                    People with high emotional intelligence(EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
                </div>
                <div className='p'>
                    They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year. 
                </div>
            </motion.div>
            <div className='headline'>
                <motion.div className='heading'
                    initial={{ opacity: 0, x: -100}}
                    whileInView={{ opacity: 1, x: 0}}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ type: 'tween', duration: 0.5, delay: 0.5}}
                    viewport={{once:true}}
                >Does this sound familiar...</motion.div>
                <motion.img src={ghost2.src} alt='ghost' className='ghost2'
                     initial={{y: 25, x: 300, opacity: 0, rotate: 40}}
                     whileInView={{y: 0, x: 0, opacity: 1, rotate: -20}}
                     transition={{ duration: 1, delay: 0.8}}
                     viewport={{once: true}}
                />
            </div>
            <motion.div className='palletes'>
                <div><img src={plt.src} alt='plt' className='plt'/></div>
                <div><img src={plt1.src} alt='plt' className='plt two'/></div>
                <div><img src={plt2.src} alt='plt' className='plt'/></div>
                <div><img src={plt3.src} alt='plt' className='plt four'/></div>
                <div><img src={plt4.src} alt='plt' className='plt'/></div>
            </motion.div>
        </div>
    )
}