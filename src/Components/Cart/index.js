import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import styles from './styles.module.css';

function Cart({ item }) {

    const { product, setProductId, loading } = useCart();

    return (
        <div className={styles.card}>
            <div className={styles.cardLink}>
                <div className={styles.cardHeader}>
                    <Link to={`product/${item.id}`}>
                        <img src={item.image} alt="" className={styles.cardImg} />
                    </Link>
                </div>

                <div className={styles.cardBody}>
                    <>
                        <p className={styles.cardTitle}>
                            <span className={styles.brand}>
                                Brand,
                            </span>
                            {item.title}
                        </p>
                    </>
                </div>

                <div>
                    <div className="my-auto">
                        <span>${item.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
