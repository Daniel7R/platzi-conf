import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Checkout.scss';
import { AppContext } from '../context/AppContext';

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
      <div className="checkout">
        <div className="checkout-content">
          
          {cart.length > 0 ? (
            <h3>Lista de pedidos: </h3>
            ):(
            <h3>Sin pedidos...</h3>
            )
          }
          {
            cart.map( item => (
              <div className="checkout-item" key={item.id}>
                <div className="checkout-element">
                  <h4>{item.title}</h4>
                  <span>$ {item.price}</span>
                </div>
                <button type='button' onClick={()=> handleRemove(item)}>
                  <i  className='fas fa-trash-alt'></i>
                </button>
              </div>
            ))}
            </div>
            {
              cart.length > 0 && (
                <div className="checkout-sidebar">
                  <h3>Precio total: $ {sumaTotalCart()}</h3>
                  <Link to="/checkout/information">
                    <button type="button">Continuar pedido</button>
                  </Link>
                </div>
              )
            }
      </div>
    );
}

export {Checkout}
