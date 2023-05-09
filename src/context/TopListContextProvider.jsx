import React, { useEffect, useState, createContext } from 'react';
//api
import { getData } from '../services/api';
import { Container, Pagination } from '@mui/material';

export const cryptoContext = createContext();

const TopListContextProvider = ( { children } ) => {

    const [crypto, setCrypto] = useState([]);

    const [page, setPage] = useState(1);
    const pageHandler = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        const fetchAPI = async () => {
            setCrypto(await getData(page))
        }
        fetchAPI()
    }, [page])
    
    return (
        <Container maxWidth='xl'>
            <cryptoContext.Provider value={crypto}>
                { children }
            </cryptoContext.Provider>
            <Pagination sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#ACB1D6', p: 1, margin: '1px 23px 20px'}} count={50} color='primary' page={page} variant='outlined' showFirstButton showLastButton onChange={pageHandler} />
        </Container>
    );
};

export default TopListContextProvider;