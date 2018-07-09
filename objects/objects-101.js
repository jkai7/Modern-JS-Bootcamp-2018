let myBook = {
    title: '1984',
    author: 'George Orwell', 
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`);

//challenge area

//model a person - name, age, location
//`name is age and lives in location`
//then increase age by one, and print again

let person = {
    name: 'Jens',
    age: 31,
    location: 'Miami'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);