

//1. add button listener
//2. get date time from input  >>> additional do error handling if needed for bad queries 
//3. make query to carpark availability api using input values

document.getElementById("submit").addEventListener("click", function(){

    let date_time = document.getElementById("date_time").value;
    console.log("date time is : " + date_time);

    getCarpark(date_time);

});


function getCarpark(date_time){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.data.gov.sg/v1/transport/carpark-availability?date_time=${date_time}`,
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        //loop through the data and get the carpark availability
        let carparkXTotalLots = response.data.items[0].carpark_data[1].carpark_info[0].total_lots
        //beautify the data into html
      })
      .catch((error) => {
        console.log(error);
      });
}
