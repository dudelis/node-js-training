const request = require('request');

var geocodeAddress = (address) =>{
    return new Promise((resolve, reject)=>{
        var encodedAddress = encodeURIComponent(address);

        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body)=>{
            if (error){
                reject('Unable to connect to the user servers.');
            } else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find the address.');
            } else if (body.status ==='OK') {
                resolve({
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                    address: body.results[0].formatted_address
                });                
            }
        });
    });
};

geocodeAddress('abc-zyw').then((location)=>{
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) =>{
    console.log(errorMessage);
});