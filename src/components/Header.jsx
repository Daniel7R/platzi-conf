import React, { useContext } from 'react';
import '../styles/Header.scss';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Header = () => {

    const {state: {cart}} = useContext(AppContext);

    return (
        <header className='header'>
            <h1 className='header-title'>
                <Link to="/" >
                    Platzi Conf
                </Link>
            </h1>
            <div className="header-checkout">
                <Link to="/checkout" >
                    <i className='fas fa-shopping-cart'></i>
                </Link>
                {
                    cart.length >0 && <div className='counter-alert'>{cart.length}</div>
                }
            </div>
        </header>
    )
}

export { Header }
