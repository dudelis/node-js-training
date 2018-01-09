const utils = require('./utils');

it('Should add 2 numbers', ()=>{
    var result = utils.add(33, 11);
    
    if (result !== 44){
        throw new Error(`Expected 44, but get ${result}`);
    }
});

it ('should square a number', ()=>{
    var results = utils.square(5);
    if (results !== 25){
        throw new Error(`Expected 25, but get ${results}`);
    }
});
