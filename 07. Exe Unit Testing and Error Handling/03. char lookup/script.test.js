const { expect } = require('chai');
const lookupChar = require('./script');

describe('lookupchar', () => {
    it('should return UNDEFINED if first parameter is not a string', () => {
        expect(lookupChar(2, 2)).to.equal(undefined);
    });
    
    it('should return UNDEFINED if second parameter is not a number', () => {
        expect(lookupChar("test", "test")).to.equal(undefined);
    });

    it('should return UNDEFINED if second parameter is not an integer', () => {
        expect(lookupChar("test", 3.4)).to.equal(undefined);
    });

    it('should return UNDEFINED if both parameters are invalid', () => {
        expect(lookupChar(2, "test")).to.equal(undefined);
    });

    it('should return INCORECT INDEX if index is bigger than expected', () => {
        expect(lookupChar('string', 10)).to.equal("Incorrect index");
    });

    it('should return INCORECT INDEX if index is negative', () => {
        expect(lookupChar('string', -1)).to.equal("Incorrect index");
    });

    it('should return INCORECT INDEX if index equal to string length', () => {
        expect(lookupChar('string', 6)).to.equal("Incorrect index");
    });

    it('should return correct result if all requirements are fulfilled', () => {
        expect(lookupChar('string', 0)).to.equal("s");
    });
    it('should return correct result if all requirements are fulfilled', () => {
        expect(lookupChar('string', 5)).to.equal("g");
    });
});