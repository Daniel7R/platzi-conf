import React, {useContext} from 'react';
import '../styles/Products.scss';
import { Product } from './Product';
import { AppContext } from "../context/AppContext";

const Products = () => {

    const {state: {products}, addToCart} = useContext(AppContext);

    const handleAddToCart = product => {
        addToCart(product);
    }

    return (
        <div className='products'>
            <div className="products-items">
                {
                    products.map(product => (
                        <Product key={product.id} product={product} handleAddToCart={ handleAddToCart } />
                    ))
                }
            </div>
        </div>
    )
}

export { Products }
