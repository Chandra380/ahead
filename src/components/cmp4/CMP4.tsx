'use client'

import './cmp4.scss'
import {motion} from 'framer-motion'

export default function CMP4(){
    return(
        <motion.div className='cmp4'
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ type: 'spring', damping: 5, duration: 0.75, delay: 1}}
            viewport={{once:true}}
        >
            <div className='lr'>
                Be the best you with EQ
            </div>
            <div className='sm'>
                Not having your own emotions under control might be holding you back.
            </div>
            <div className='sm'>
                Addionally, not understanding those of others stops you from being parent, friend you can be.
            </div>
        </motion.div>
    )
}