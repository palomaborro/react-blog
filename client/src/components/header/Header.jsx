import React from 'react';
import './Header.scss'
import headerimg from '../../assets/header/headerimg.jpg'

export default function Header() {
    return (
        <div className='Header'>
            <div className='Header__titles'>
                <span className='Header__titles__s'>React & Node</span>
                <span className='Header__titles__l'>Blog</span>
            </div>
            <img 
                className='Header__img'
                src={headerimg}
                alt=''
            />
        </div>
    )
}
