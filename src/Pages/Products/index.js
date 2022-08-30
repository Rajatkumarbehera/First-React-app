import React from 'react'
import { useProduct } from '../../Context/ProductContext'
import Card from '../../Components/Card';
import styles from './styles.module.css';
import Loader from '../../Components/Loader';

const Products = () => {
    const {productList, loading} = useProduct();

    return (
        <div className={styles.cardGroup}>
            {
                !loading ? (
                    productList?.map((item) => {
                        return (
                            <Card item={item} />
                        )
                    })
                ) : (<Loader />)
            }
        </div>
    )
}

export default Products;
