import axios from 'axios';

const getData = async ( page ) => {
    const response = await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api-key=8da2c07b384f024464cb84b107f1329f89d060a1d5659ad445835fb95ff95bf3&page=${page}`)
    return response.data
}

export { getData };