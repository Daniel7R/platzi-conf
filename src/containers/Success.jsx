import React, {useContext} from 'react';
import { Map } from '../components/Map';
import { AppContext } from '../context/AppContext';
import { useGoogleAddress } from '../hooks/useGoogleAddress';
import '../styles/Success.scss';

const Success = () => {

    const {state: {buyer}} = useContext(AppContext);
    const location = useGoogleAddress(buyer[0].address);

    return (
        <div className='success'>
            <div className="success-content">
                <h2>{`Gracias ${buyer[0].name} por tu compra`}</h2>
                <span>Tu pedido llegará en 3 días a tu
                    dirección: 
                </span>
                <div className="success-map">
                    <Map data={location} />
                </div>
            </div>
        </div>
    )
}

export { Success }
