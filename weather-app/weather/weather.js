const request = require('request');

var getWeather = (lat, lng, callback) =>{
    request({
        uri: `https://api.darksky.net/forecast/2a04f690c1b7f526b1e2f7df3ee90d48/${lat},${lng}?units=si`,
        json: true
    }, (error, response,body) =>{
        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else{
            callback("Unable to fetch weather");
        }    
    });
}

module.exports.getWeather = getWeather;

