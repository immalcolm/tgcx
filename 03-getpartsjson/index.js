let dataURL = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json";

//fetchAxios(dataURL); // <-- fetchData will be an asynchronous function call

document.getElementById("get").addEventListener("click", function(){   
    fetchAxios(dataURL);
});

async function fetchAxios(url) {
    console.log("fetchWithAxios is done! using Method ");
    let response = await axios.get(url);
    console.log(response.data);
    let data = response.data;
    let output = `
    <ul>
        <li>First Name: ${data.firstName}</li>
        <li>Last Name: ${data.lastName}</li>
        <li>Street Address: ${data.address.streetAddress}</li>
        <li>City: ${data.address.city}</li>
        <li>State: ${data.address.state}</li>
        <li>Postal Code: ${data.address.postalCode}</li>
    </ul>`;
    console.log(output);
    document.querySelector("#output").innerHTML = output;
}

