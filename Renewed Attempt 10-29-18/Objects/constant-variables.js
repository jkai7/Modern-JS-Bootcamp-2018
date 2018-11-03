// let isRaining = true;
// const isRaining = true;

// isRaining = false; // can not reassign constant variables
// console.log(isRaining);

const person = {
    age: 27
};

person.age = 28;// can re-assign object properties in a constant variable

console.log(person);

// challenge - assign const to variables that dont change

const gradeCalc = function (studentScore, totalPossibleScore) {

    const letterGrade = (studentScore / totalPossibleScore) * 100;

    let grade = '';

    if (letterGrade >= 90) {
        
         grade = "A";

    } else if (letterGrade >= 80) {

         grade = "B";

    } else if (letterGrade >= 70) {

         grade = "C";

    } else if (letterGrade >= 60) {

         grade = "D";

    } else {

         grade = "F";

    };// END if statement

    return `You got a ${grade} (${letterGrade}%)!`;

};// END function

const result = gradeCalc(18, 20);
console.log(result);

