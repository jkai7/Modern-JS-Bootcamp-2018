let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
};

let otherBook = {
    title: "A Peoples History",
    author: "Howard Zin",
    pageCount: 723
};

let getSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    };

};

let bookSummary = getSummary(myBook);
    // console.log(bookSummary.pageCountSummary);

let otherBookSummary = getSummary(otherBook);
    // console.log(otherBookSummary.summary);

//= challenge - create conversion function that returns object with 3 temps

let tempConvert = function (fahrenheit) {

    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5/9,
        kelvin: (fahrenheit + 459.67) * 5/9
    }

};

let temp = tempConvert(32);
    console.log(temp);



