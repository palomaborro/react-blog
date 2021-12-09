import React from 'react';
import './NavBar.scss';
import image from '../../assets/navbar/photo.jpeg';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const user = true;
    return (
        <div className='NavBar'>
            <div className='NavBar__left'>
                <i className="NavBar__left__icon fab fa-twitter-square"></i>
                <i className="NavBar__left__icon fab fa-github-square"></i>
                <i className="NavBar__left__icon fab fa-linkedin"></i>
            </div>
            <div className='NavBar__center'>
                {user ? (
                <ul className='NavBar__center__list'>
                    <li className='NavBar__center__list__item'>
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li className='NavBar__center__list__item'>
                        <Link className='link' to='/about'>ABOUT</Link>
                    </li>
                    <li className='NavBar__center__list__item'>
                        <Link className='link' to='/write'>WRITE</Link>
                    </li>
                    <li className='NavBar__center__list__item'>
                        <Link className='link' to='/logout'>LOGOUT</Link>
                    </li>
                </ul>
                ) : (
                <ul className='NavBar__center__list'>
                    <li className='NavBar__center__list__item'>
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li className='NavBar__center__list__item'>
                        <Link className='link' to='/login'>LOGIN</Link>
                    </li>
                </ul>
                )}
            </div>
            <div className='NavBar__right'>
            {user ? (
                <img
                    className='NavBar__right__img'
                    src={image}
                    alt=''
                />
            ) : (
                <ul className='NavBar__center__list'>
                    <li className='NavBar__center__list__item'>
                        <Link className='link' to='/login'>LOGIN</Link>
                    </li>
                    <li className='NavBar__center__list__item'>
                        <Link className='link' to='/register'>REGISTER</Link>
                    </li>
                </ul>
            )}
                <i className="NavBar__right__icon fas fa-search"></i>
            </div>
        </div>
    )
}
