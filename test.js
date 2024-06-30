let { sum, division } = require('./app.js'); 
let chai = require('chai'); 
let expect = chai.expect;

describe(`SumFunction`, () => {
    it(`works`, () => {
        expect(sum(2, 3)).to.equal(5);
    });
    
});
describe(`DivideFunctions`, ()=>{
    it (`correct`, ()=>{
        expect(division(6,3)).to.equal(2);
    })
})