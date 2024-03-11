const myHeaders = new Headers();
myHeaders.append("AccessKey", "e60d2cf5-8a2e-4be8-8a77-b292cbed12b5");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://corsproxy.io/?https://www.ura.gov.sg/uraDataService/insertNewToken.action", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));