'use client'
import './cmp6.scss'
import {motion} from 'framer-motion'
export default function CMP6(){
    const renderDivs = () => {
        const divs = [];
    
        for (let i = 0; i < 12; i++) {
          divs.push(<motion.div className='sm'
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.75, delay: 0.5+i/5}}
            viewport={{once:true}}
          ></motion.div>);
        }
    
        return divs;
    };

    return(
        <div className="cmp6">
            <div className='l1'>We take privacy serously</div>
            <div className='l2'>Before you get started</div>
            <div className='l3'>"We won't share your answers with anyone (and 
            won't ever tell you which friends said what about you)"</div>
            <div className='sign'>
                with love, 
                <span> Chandra </span>
            </div>
            <button>Start a test</button>
            <div className='f1'>Take only 5 minutes</div>
            <div className='manyDivs'>{renderDivs()}</div>
        </div>
    )
}