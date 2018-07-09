let myBook = {
    title: '1984',
    author: 'George Orwell', 
    pageCount: 326
}

let otherBook = {
    title: 'Peoples History',
    author: 'Howard Zin', 
    pageCount: 723
}

//a function returning an object

let getSummary = function (book) {
    
    return {
        
        summary: `${book.title} by ${book.author}`,
        
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary)

//challenge area

//create function that takes temp in and returns //celcius, kelvin, and fahrenheit

let getTemp = function (temp) {

    return {
        
        fahrenheit: temp,
        
        celcius: (temp - 32) * 5/9,
        
        kelvin: (temp + 459.67) * 5/9,
    }

};

let temps = getTemp(32);

console.log(temps);

console.log(temps.fahrenheit);
console.log(temps.celcius);
console.log(temps.kelvin);

