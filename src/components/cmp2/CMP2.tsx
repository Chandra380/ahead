import React from 'react'
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
            <div className='description'>
                <div className='h'>
                    EQ beats IQ
                </div>
                <div className='p'>
                    People with high emotional intelligence(EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
                </div>
                <div className='p'>
                    They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year. 
                </div>
            </div>
            <div className='headline'>
                <div className='heading'>Does this sound familiar...</div>
                <img src={ghost2.src} alt='ghost' className='ghost2'/>
            </div>
            <div className='palletes'>
                <div><img src={plt.src} alt='plt' className='plt'/></div>
                <div><img src={plt1.src} alt='plt' className='plt two'/></div>
                <div><img src={plt2.src} alt='plt' className='plt'/></div>
                <div><img src={plt3.src} alt='plt' className='plt four'/></div>
                <div><img src={plt4.src} alt='plt' className='plt'/></div>
            </div>
        </div>
    )
}