const request = require('request');
//const yargs = request('yargs');
//const argv = yargs.argv;

//console.log(argv);

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=Wahnenmuehle%206,%20Erkrath',
    json: true
}, (error, response, body)=>{
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});