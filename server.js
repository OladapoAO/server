const express = require('express'); // Basically an Import statement 
const app = express();
app.listen(3000, () => console.log('listening at 3000')); // Provide a port number & Call back function
// A callback function, this provides a callback or response to show the server is listenng 

const folder = 'public'

app.use(express.static(`${folder}`));  // Express to host static files/
app.use(express.json({limit:'1mb'}));  // Allows server to understand incoming data as JSON

var storage = Array();
var name = 'Daps';

app.post('/api', (request, response) => {
    console.log(`i got a request! , thanks ${name}`)
    // console.log(request.body);

    const data = request.body;
    storage.push(data);
    console.log(storage);

    response.json({
        status:'success',
        latitude: data.lat,
        longitude: data.long
    })

   

})

