const hbs = require('hbs');

// Helpers
let getYear = hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});
let capitalize = hbs.registerHelper('capitalize', ( text ) => {
    // we separate the words
    let words = text.split(" ");
    words.forEach( ( word, idx ) => {
        // charAt extrae la primera letra de la cadena (word)
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return words.join(' ');
});

module.exports = {
    getYear,
    capitalize
}