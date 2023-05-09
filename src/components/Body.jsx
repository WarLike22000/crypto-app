import React, { useContext, useState } from 'react';
//context
import { cryptoContext } from '../context/TopListContextProvider.jsx';
//styles
import styles from './Body.module.css';
//mui
import { Container } from '@mui/material';
import { Info } from '@mui/icons-material';
//components
import Coin from './shared/Coin.jsx';

import { CirclesWithBar } from 'react-loader-spinner';

const Body = () => {

    const crypto = useContext(cryptoContext);
    
    return (
        <Container maxWidth='xl'>
        <div className={styles.mainContainer}>
            <div>
                <div className={styles.topContainer}>
                    <div className={styles.firstTopContainer}>
                        <h3>Today's Cryptocurrency Prices</h3>
                        <div>
                            <input id='toggle' type='checkbox' />
                            <label htmlFor='toggle' />
                            <p>WatchList</p>
                        </div>
                    </div>
                    <div className={styles.bottomContainer}>
                        {/* <div>
                            <p>#</p>
                            <Info color='info' sx={{fontSize: '15px', marginLeft: 1}} />
                        </div> */}
                        <div>
                            <p>NAME</p>
                        </div>
                        <div>
                            <p>PRICE</p>
                            <Info color='info' sx={{fontSize: '15px', marginLeft: 1}} />
                        </div>
                        <div>
                            <p>24H CHANGE</p>
                            <Info color='info' sx={{fontSize: '15px', marginLeft: 1}} />
                        </div>
                        <div>
                            <p>24H VOLUME</p>
                            <Info color='info' sx={{fontSize: '15px', marginLeft: 1}} />
                        </div>
                        <div>
                            <p>MARKET CAP</p>
                            <Info color='info' sx={{fontSize: '15px', marginLeft: 1}} />
                        </div>
                        <div>
                            <p>7D CHART</p>
                            <Info color='info' sx={{fontSize: '15px', marginLeft: 1}} />
                        </div>
                    </div>
                </div>
                        {
                                    crypto.length === 0 &&
                            <div className={styles.loading}>
                                <CirclesWithBar
                                    height="100"
                                    width="100"
                                    color="#1D267D"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    outerCircleColor=""
                                    innerCircleColor=""
                                    barColor=""
                                    ariaLabel='circles-with-bar-loading'
                                    />
                            </div>
                        }
                <div>
                    {
                        crypto.length != 0 &&
                        crypto.Data.map(item => <Coin key={item.CoinInfo.Id} coinInfo={item.CoinInfo} displayUsd={item.DISPLAY.USD} />)
                    }
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Body;