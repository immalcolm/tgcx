//
const BTCUSD_EXCHANGE_URL = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
const BTCUSD_BINANCE_URL = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";

const BINANCE = "binance";
const BLOCKCHAIN = "blockchain";
const BINANCE_BTCUSD = "price";
const BLOCKCHAIN_BTCUSD = "last_trade_price";

let btc_usd_data = async (option) => {
    console.log("option: " + option);
    if(option === BINANCE) {
        const response =  await axios.get(BTCUSD_BINANCE_URL);
        return response.data;

    }else if(option == BLOCKCHAIN) {
        const response =  await axios.get(BTCUSD_EXCHANGE_URL);
        return response.data;
    }

    //const response = await axios.get(option);
    //const data = await response;//response.json();
    //console.log("test" + response.data.last_trade_price);
    //return response.data;
}



async function getLastTradePriceBTCUSD(option) {
    console.log("getting last trade" + option);
    const data = await btc_usd_data(option);
    let btc_usd = 0;
    console.log(data);
    if(option === BINANCE) {
        console.log(data.price);
        btc_usd = data.price;
    }else if(option == BLOCKCHAIN) {
        console.log(data.last_trade_price);
        btc_usd = data.last_trade_price;
    }
    document.getElementById("btc-usd-result").innerHTML = btc_usd;

    //console.log(data.last_trade_price);
}

document.getElementById("data-source").addEventListener("change", () => {
    const selectedOption = document.getElementById("data-source").value;
    console.log(selectedOption);
    getLastTradePriceBTCUSD(selectedOption);
});
//getLastTradePriceBTCUSD(BINANCE);