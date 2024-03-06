let dataURL = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json";

fetchAxios(dataURL); // <-- fetchData will be an asynchronous function call

async function fetchAxios(url) {
    let response = await axios.get(url);

    let data = response.data.users;
    console.log(data);

    //using list rendering
    // Select the <ul> by its ID . needs to be existing ul
    const ul = document.getElementById('myList');

    for (let i = 0; i < data.length; i++) {
        // Create a new <li> element
        const li = document.createElement('li');
        // Set the text content for the <li>
        li.textContent = `${data[i].firstName} ${data[i].lastName} (${data[i].emailAddress})`;
        // Append the new <li> to the <ul>
        ul.appendChild(li);
    }
}