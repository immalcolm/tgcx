
// if a line in a function is going to use `await`
// the function must be marked `async`
async function fetchData() {
    // fetch the `data.txt` file which is
    // at the same relative URL as `index.html`
    // and WAIT for it to finish before moving to the next line
    // await must be CALLED in a line that inside is a function
    const response = await fetch("data.txt");
    const text = await response.text();
    console.log(text);
    document.querySelector("#output").innerHTML = text;
}

async function fetchWithAxios() {
    const response = await axios.get("data.txt");
    const text = response.data;
    console.log("fetchWithAxios is done!")
    document.querySelector("#output").innerHTML = text;
}
// fetchData(); // <-- fetchData will be an asynchronous function call
fetchWithAxios();
console.log("after fetchData is called()")

// show hello world in the console every 1000ms
setInterval(function(){
    console.log("Hello world");
}, 1000)