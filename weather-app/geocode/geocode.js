const request = require('request');

var geocodeAddress = (address, callback) =>{
    var encodedAddress = encodeURIComponent(address);
    var returnObject ={
        latitude:null,
        longitude:null,
        address
    }
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body)=>{
        if (error){
            callback('Unable to connect to the user servers.');
        } else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find the address.');
        } else if (body.status ==='OK') {
            returnObject = {
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
                address: body.results[0].formatted_address
            };
            callback(undefined, returnObject);
            
        }
    });
};

module.exports ={
    geocodeAddress
};


