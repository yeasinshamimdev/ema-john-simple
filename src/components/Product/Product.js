import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, seller, ratings } = product;
    return (
        <div className='product-container'>
            <img src={img} alt="my img" />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p><small>Ratings: {ratings} starts</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'><p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;