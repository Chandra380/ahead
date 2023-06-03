import './cmp7.scss'
import ghost0 from '../../assests/ghost0.png'
import record2 from '../../assests/record2.png'

export default function CMP7(){
    return(
        <div className='cmp7'>
            <div className='left'>
                <h1>Work with us</h1>
                <div className='about'>
                    <img src={ghost0.src} alt='ghost'/>
                    <h2>About</h2>
                    <p>At ahead our goal is to make self-improvement
                        fun and lasting. We know there&apos;s a way how to
                        make it work. And that&apos;s what aHead is all about!
                    </p>
                </div>
                <div className='product'>
                    <h2>Product</h2>
                    <p>Sure, you could spend ages reading books or
                        sitting in seminars on how to become a better
                        spouse, parent, or manager -like we did...
                    </p>
                </div>
                <img src={record2.src} alt='record' className='circle'/>
            </div>
            <div className='right'>
                <h1>ahead</h1>
                <div className='scroll'>
                    <div>
                        <h4>Lorem ipsum dolor sit amet, consec adipiscing elit</h4>
                        <p>
                            In tincidunt leo quis tellus lacinia, ut vulputate libero fringilla. 
                            Nam auctor orci lectus.
                            
                        </p>
                    </div>
                    <div>
                        <h4>Lorem ipsum dolor sit amet, consec adipiscing elit</h4>
                        <p>
                            In tincidunt leo quis tellus lacinia, ut vulputate libero fringilla. 
                            Nam auctor orci lectus. 
                        </p>
                    </div>
                    <div>
                        <h4>Lorem ipsum dolor sit amet, consec adipiscing elit</h4>
                        <p>
                            In tincidunt leo quis tellus lacinia, ut vulputate libero fringilla. 
                            Nam auctor orci lectus. 
                        </p>
                    </div>
                    <div>
                        <h4>Lorem ipsum dolor sit amet, consec adipiscing elit</h4>
                        <p>
                            In tincidunt leo quis tellus lacinia, ut vulputate libero fringilla. 
                            Nam auctor orci lectus.
                        </p>
                    </div>
                    <div>
                        <h4>Lorem ipsum dolor sit amet, consec adipiscing elit</h4>
                        <p>
                            In tincidunt leo quis tellus lacinia, ut vulputate libero fringilla. 
                            Nam auctor orci lectus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}