import React,{ useContext} from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/Payment.scss';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';

const Payment = () => {

    const {state: {cart,buyer}, addNewOrder} = useContext(AppContext);
    const navigate = useNavigate();

    const paypalOptions = {
        
        clientId: "AXcGiz9qTkhksgikXqfTqotbRRE7WJ2F0yZ7Jhbeb7Djv6quW4feGI77LUM59zGxC4VSY_815g9IY1fl",
        intent: 'capture',
        currency: 'USD'
    };
    
    const buttonStyles = {
        layout: "vertical",
        shape: "react"
    };

    const sumaTotalCart = () => {

        let suma= 0;
  
        for(let i= 0; i<cart.length; i++){
          suma+= cart[i].price; 
        } 
  
        return suma;
    };

    const handlePaymentSuccess = data => {
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            };
            console.log("pago");

            addNewOrder(newOrder);
            navigate("/checkout/success");
        }
    }
  

    return (
        <div>
            <div className="payment">
                <div className="payment-content">
                    <h3>Resumen del pedido: </h3>
                    {
                        cart.map(item => (
                            <div className="payment-item" key={item.title}>
                                <div className="payment-element">
                                    <h4>{item.title}</h4>
                                    <span>$ {item.price}</span>
                                </div>
                            </div>
                        ))
                    }
                    <div className="payment-button">
                        <PayPalButton 
                            paypalOptions={paypalOptions}
                            buttonStyles= {buttonStyles}
                            amount={ sumaTotalCart() }
                            onSuccess = {data => handlePaymentSuccess(data)}
                            onError = { error => console.log(error) }
                            onCancel = {data => console.log(data)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Payment }
