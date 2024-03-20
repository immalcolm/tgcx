//contain our JS code for the blockchain

const BTCUSD_BLOCKCHAIN_URL = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";

let query = "BTCUSDT"
let COINUSD_BINANCE_URL = `https://api.binance.com/api/v3/ticker/price?symbol=`;


let data_price = 0;
//fetch the latest price of Bitcoin in USD
//async function btc_usd_data() {}
//annyoumous function "function with no name or identifier"
let btc_usd_data = async () => {

    //@TODO error handling if need to 
    const response = await axios.get(`${COINUSD_BINANCE_URL}${query}`);
    console.log("Response:" + response);
    console.log("Data" + response.data);
    return response.data;
}

async function getLastTradedPrice(){
    const data = await btc_usd_data();
    console.log("Last traded price: " + data.price);
    let price = data.price;

    document.getElementById("btc-usd").innerHTML =  (Math.round(price * 100) / 100).toFixed(2);
    return data.price;
}
//getLastTradedPrice();

//do a event listener based on the change in select ("dropdown")
let coin_type = document.getElementById("coin-type");
coin_type.addEventListener("change", function(){
    query = coin_type.value; //value of our drop down option 
    //update our coin price URL because of our interval calling 
    console.log("Query:" + query);
});


///-----------------
//using polling
// traditional way of creating functions: function startPolling (interval){ ... }

//using an arrow function 
const startPolling = (interval)=>{
    data_price = getLastTradedPrice();//to call the function immediately 
    setInterval(getLastTradedPrice, interval);//subsequent calls every X secs
    console.log(data_price);
}

//poll every X secs "X000ms"
const INTERVAL = 1000;
startPolling(INTERVAL);

let chart_data = [30,40,35,50,49,60,70,91,125];
let chart_categories = [1991,1992,1993,1994,1995,1996,1997, 1998,1999];

var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'coin price',
      data: chart_data
    }],
    xaxis: {
      categories: chart_categories
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  

  chart.render();

  document.getElementById("add-data").addEventListener("click", function(){
    chart_data.push(Math.round(Math.random() * 100))
    chart_categories.push(chart_categories[chart_categories.length - 1] + 1)
    chart_data.shift();
    chart_categories.shift();
    chart.updateOptions({
        series: [{
            name: 'coin price',
            data: chart_data
          }],
          xaxis: {
            categories: chart_categories
          }
      })
   

  });

//URA updates every tues/thur
//check whether today is tues/thurs 
//if yes, then update the URA data

//IF YOU check the data and do manual cleanup 
//data will always be the "latest"
//unless so happen user is checking out the website at Monday 11:59pm .. 
//still using at Tuesday 12:01am ... then update or force a refresh/"poll" because it's tues

//LOCAL/DB database
//if you store the URA data locally. OR you store into the database of your choice
//if it's tues >>> retrieve the data >> update my database >>
//>> then take the data form the database and display updated details 
//>> you can always show the user "data was last update xxxx days ago"