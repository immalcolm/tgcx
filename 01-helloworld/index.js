let dataURL = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt";

//READ THIS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// if a line in a function is going to use `await`
// the function must be marked `async`

fetchData(dataURL); // <-- fetchData will be an asynchronous function call
fetchAxios(dataURL);

async function fetchData(url) {
    // fetch the `data.txt` file which is
    // at the same relative URL as `index.html`
    // and WAIT for it to finish before moving to the next line
    // await must be CALLED in a line that inside is a function

    const response = await fetch(url);
    const text = await response.text();
    console.log("fetchData is done! using Fetch API")
    console.log(text);

    document.querySelector("#output").innerHTML = text;

}

 function fetchAxios(url){
    console.log("fetchWithAxios is done! using Method 1");
    axios.get(url)
    .then(function(response){
        console.log(response.data);
        document.querySelector("#output").innerHTML = response.data;
    })
    .catch(function(error){
        console.log(error);
    });

    //method 2
    console.log("fetchWithAxios is done! using Method 2");
    let response =  axios.get(url);
    console.log(response.data);
}