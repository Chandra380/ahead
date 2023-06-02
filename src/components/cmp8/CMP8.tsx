'use client'

import './cmp8.scss'
import React, {useState, ReactNode} from 'react'

interface HoverButtonProps {
    children: ReactNode;
    className?: string;
}

function HoverButton({ children, className }: HoverButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={className}>
          {children}
          {isHovered && <button className="button">Details</button>}
        </div>
      </div>
    );
}

export default function CMP8(){
    
    return(
        <div className='cmp8'>
            <h1>Open vacancies</h1>
            <div className='tables'>
                <HoverButton className='table t1'>
                <div className='table t1'>
                    <h3>Senior Full-Stack Engineer</h3>
                    <ul>
                        <li>Full time position</li>
                        <li>Berlin or remote</li>
                        <li>$65-85k, 0.50-1.50% equity </li>
                    </ul>
                </div>
                </HoverButton>
                <HoverButton className='table t2'>
                <div className='table t2'>
                    <h3>Senior Designer</h3>
                    <ul>
                        <li>Full time position</li>
                        <li>Berlin or remote</li>
                        <li>$65-85k, 0.50-1.50% equity </li>
                    </ul>
                </div>
                </HoverButton>
                <HoverButton className='table t3'>
                <div className='table t3'>
                    <h3>Superstar Intern</h3>
                    <ul>
                        <li>Full time position</li>
                        <li>Berlin or remote</li>
                        <li>$25-35k, 0.50-1.50% equity</li>
                    </ul>
                </div>
                </HoverButton>
            </div>
        </div>
    )
}