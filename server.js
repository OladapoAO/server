const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));


app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

var storage = Array();
var name = 'Daps';

app.post('/api', (request, response) =>{
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

