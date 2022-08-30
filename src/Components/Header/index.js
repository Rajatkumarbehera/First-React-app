import { HeartIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Link to={"/"}>
                    <button className={styles.logo}>
                        <ShoppingBagIcon className={styles.bag}/>
                        Shopping
                    </button>
                </Link>
            </div>

            <div className={styles.right}>
                <Link to={"favourite"}>
                    <button>
                        <HeartIcon className={styles.favButton}/>
                    </button>
                </Link>
                
                <Link to={"cart"}>
                    <button>
                        <ShoppingCartIcon className={styles.shoppingCartIcon}/>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header;
