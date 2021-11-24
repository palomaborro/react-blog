import React from 'react';
import './NavBar.scss';
import image from '../../assets/navbar/photo.jpeg';

export default function NavBar() {
    return (
        <div className='NavBar'>
            <div className='NavBar__left'>
                <i className="NavBar__left__icon fab fa-twitter-square"></i>
                <i className="NavBar__left__icon fab fa-github-square"></i>
                <i className="NavBar__left__icon fab fa-linkedin"></i>
            </div>
            <div className='NavBar__center'>
                <ul className='NavBar__center__list'>
                    <li className='NavBar__center__list__item'>HOME</li>
                    <li className='NavBar__center__list__item'>ABOUT</li>
                    <li className='NavBar__center__list__item'>WRITE</li>
                    <li className='NavBar__center__list__item'>LOGOUT</li>
                </ul>
            </div>
            <div className='NavBar__right'>
                <img
                    className='NavBar__right__img'
                    src={image}
                    alt=''
                />
                <i className="NavBar__right__icon fas fa-search"></i>
            </div>
        </div>
    )
}
