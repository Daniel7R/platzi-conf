import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Checkout.scss';
import { AppContext } from '../context/AppContext';
import { Helmet } from 'react-helmet';

const Checkout = () => {

    const {state: {cart}, removeFromCart} = useContext(AppContext);

    const handleRemove = product => {
      removeFromCart(product);
    }

    const sumaTotalCart = () => {

      let suma= 0;

      for(let i= 0; i<cart.length; i++){
        suma+= cart[i].price; 
      } 

      return suma;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Platzi Conf - Productos</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Cdaniel_7rivera" />
          <meta name="twitter:creator" content="@Cdaniel_7rivera" />
          <meta name="twitter:title" content="Platzi Conf" />
          <meta name="twitter:description" content="Platzi Conf Store" />
          <meta name="og:description" content="Platzi Conf" />
          <meta name="og:url" content="platzi-conf-47f8a.web.app" />
          <meta name="og:site_name" content="Platzi Conf Store" />
          <meta name="og:locale" content="es_ES" />
          <meta name="og:type" content="article" />
        </Helmet>
        <div className="checkout">
          <div className="checkout-content">
            {cart.length > 0 ? (
              <h3>Lista de pedidos: </h3>
            ) : (
              <h3>Sin pedidos...</h3>
            )}
            {cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <div className="checkout-element">
                  <h4>{item.title}</h4>
                  <span>$ {item.price}</span>
                </div>
                <button type="button" onClick={() => handleRemove(item)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="checkout-sidebar">
              <h3>Precio total: $ {sumaTotalCart()}</h3>
              <Link to="/checkout/information">
                <button type="button">Continuar pedido</button>
              </Link>
            </div>
          )}
        </div>
      </React.Fragment>
    );
}

export {Checkout}
