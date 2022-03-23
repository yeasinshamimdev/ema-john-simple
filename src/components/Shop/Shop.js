import React, { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    useEffect(() => {
        const storedData = getStoredCart();
        const savedCart = [];
        for (const id in storedData) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                }
            </div>
            <div className='order-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;