import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './Coin.module.css';

const Coin = ( { coinInfo, displayUsd } ) => {

    const priceFunc = (price) => {
        const splitPrice = price.split(" ")
        const newPrice = Number(splitPrice[1]).toFixed(2)
        return newPrice
    }

    
    return (
        <Link style={{textDecoration: 'none'}} target='_blank' to={`https://www.cryptocompare.com${coinInfo.Url}`}>
        <div className={styles.container}>
            <div className={styles.name}>
                <div>
                    <img src={`https://www.cryptocompare.com${coinInfo.ImageUrl}`} />
                </div>
                <div>
                    <p>{coinInfo.FullName}</p>
                    <p>{coinInfo.Name}</p>
                </div>
            </div>
            <div className={styles.price}>
                <p>{displayUsd.PRICE}</p>
            </div>
            <div className={styles.change24}>
                <p>{displayUsd.CHANGE24HOUR}</p>
            </div>
            <div className={styles.vol24}>
                <p>{displayUsd.VOLUME24HOUR}</p>
            </div>
            <div className={styles.marketCap}>
                <p>{displayUsd.MKTCAP}</p>
            </div>
            <div className={styles.chart}>
                <img src={`https://images.cryptocompare.com/sparkchart/${coinInfo.Name}/USD/latest.png?ts=1683462000`} />
            </div>
        </div>
        </Link>
    );
};

export default Coin;