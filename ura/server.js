/* 
@README
ensure you have cors-anywhere installed
npm install cors-anywhere
then run this file "node server.js"
this will start a server on port 8080
you can change the port by changing the port variable
you can also change the host by changing the host variable
this server will be used to bypass cors restrictions
you can use it to make requests to any server from your client side
just change the url to the server you want to make a request to
and make a request to this server
for example if you want to make a request to https://www.example.com
you can make a request to http://localhost:8080/https://www.example.com
this server will then make the request to https://www.example.com
and send the response back to your client
this will bypass cors restrictions
you can also use this server to make requests to your own server
for example if your server is running on http://localhost:3000
you can make a request to http://localhost:8080/http://localhost:3000
this will bypass cors restrictions
*/


//run our cors anywhere server
// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});