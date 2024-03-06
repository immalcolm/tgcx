
//1. retrieve URA token
//2. store URA token into local storage
//3. make new request to a URA service with token 
//this doma


let token = localStorage.getItem("uraToken");
if(token == null){
    
}else{
    //3. make new request to a URA service with token

    //if token error
    //request for new token.. 
    //make the request again
    
}

//1. retrieve URA token

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://www.ura.gov.sg/uraDataService/insertNewToken.action?AccessKey=1bfca438-3f53-49f2-b53b-825f66369749',
    headers: { 
      'AccessKey': '1bfca438-3f53-49f2-b53b-825f66369749'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
   


    //2. store URA token into local storage
    localStorage.setItem('uraToken', response.data.Result);
  })
  .catch((error) => {
    console.log(error);
  });