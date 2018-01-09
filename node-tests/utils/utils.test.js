const expect = require('expect');

const utils = require('./utils');


it('Should add 2 numbers', ()=>{
    var result = utils.add(33, 11);
    
    expect(result).toBe(44).toBeA('number');
});

it ('should square a number', ()=>{
    var results = utils.square(5);
    if (results !== 25){
        throw new Error(`Expected 25, but get ${results}`);
    }
});
