console.log("start");

getYahoo();


async function getYahoo(){
    const options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
        params: {
          q: 'tesla',
          region: 'US'
        },
        headers: {
          'X-RapidAPI-Key': '7372e723e1mshd0fb4693fd801f3p1f951ajsn8c5b81d515d4',
          'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };
      
      try {
          console.log("Retrieving data from Yahoo Finance API");
          const response = await axios.request(options);
          console.log(response.data.quotes);

          //loop through the quotes array and display the symbol and the shortname
            for (let i = 0; i < response.data.quotes.length; i++) {
                console.log(response.data.quotes[i].symbol + " : " + response.data.quotes[i].shortname);
            }
          console.log(response.data.news[0].title)
      } catch (error) {
          console.error(error);
      }
}
