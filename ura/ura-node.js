

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://corsproxy.io/?https://www.ura.gov.sg/uraDataService/insertNewToken.action',
  headers: { 
    'AccessKey': 'e60d2cf5-8a2e-4be8-8a77-b292cbed12b5'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
