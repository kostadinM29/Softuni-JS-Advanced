const { expect } = require('chai');
const library = require('./library');

describe("library", function() {
    describe("calcPriceOfBook", () => {
        it('returns correct result with correct input', () => {
            expect(library.calcPriceOfBook('Book', 1981)).to.equal(`Price of Book is 20.00`);
            expect(library.calcPriceOfBook('Test', 1979)).to.equal(`Price of Test is 10.00`);
            expect(library.calcPriceOfBook('Book', 1980)).to.equal(`Price of Book is 10.00`);
        });
        it('returns error with invalid inputs', () => {
            expect(() => library.calcPriceOfBook(1251, 1978)).to.throws("Invalid input");
            expect(() => library.calcPriceOfBook('Book', 'Book')).to.throws("Invalid input");
        });
     });
     describe("findBook", () => {
        it('returns correct result with correct input', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
            expect(library.findBook(["Troy", "Life Style", "Book"], 'Book')).to.equal('We found the book you want.');
            expect(library.findBook(["Troy", "Life Style"], 'Book')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'BookTwo')).to.equal('The book you are looking for is not here!');
        });
        it('returns error with invalid inputs', () => {
            expect(() => library.findBook([], 'Troy')).to.throws('No books currently available');
        });
     });
     describe("arrangeTheBooks", () => {
        it('returns correct result with correct input', () => {
            expect(library.arrangeTheBooks(15)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(30)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
        it('returns error with invalid inputs', () => {
            expect(() =>  library.arrangeTheBooks('5')).to.throws('Invalid input');
            expect(() =>  library.arrangeTheBooks(-1)).to.throws('Invalid input');
        });
     });
    
});
