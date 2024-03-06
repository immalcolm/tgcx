let dataURL = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json";

fetchAxios(dataURL); // <-- fetchData will be an asynchronous function call

async function fetchAxios(url) {

    console.log("fetchWithAxios is done! using Method ");
    let response = await axios.get(url);
    console.log(response.data);
    let data = response.data;
    let output = `
    <ul>
        <li>Name: ${data.Name}</li>  
        <li>Mobile Number: ${data.Mobile}</li>
        <li>Pets: ${data.Pets}</li>
        <li>Current Address: ${data.Address["Permanent address"]}</li>
        <li>Permanent Address: ${data.Address["current Address"]}</li>
    </ul>`;
    console.log(output);
    document.querySelector("#output").innerHTML = output;
}