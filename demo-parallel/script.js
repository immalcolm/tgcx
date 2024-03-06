document.querySelector("#load").addEventListener('click',
    async function () {
        let loader1 = axios.get('data.json');
        let loader2 = axios.get('data1.json');
        let loader3 = axios.get('data2.json');
        let response = await loader1;
        document.querySelector('#output').innerHTML += response.data.message + "\n<br/>";

        response = await loader2;
        document.querySelector('#output').innerHTML += response.data.message + "\n<br/>";

        response = await loader3;
        document.querySelector("#output").innerHTML += response.data.message + "\n<br/>";


    })
