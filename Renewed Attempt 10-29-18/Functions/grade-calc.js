// My attempt
let grade = function (studentScore, totalPossibleScore) {

    let letterGrade = (studentScore / totalPossibleScore) * 100;

    if (letterGrade >= 90) {

        console.log(`You got an A (${letterGrade}%)!`)

    } else if (letterGrade >= 80 && letterGrade <= 89) {

        console.log(`You got a B (${letterGrade}%)!`)

    } else if (letterGrade >= 70 && letterGrade <= 79) {

        console.log(`You got a C (${letterGrade}%)!`)

    } else if (letterGrade >= 60 && letterGrade <= 69) {

        console.log(`You got a D (${letterGrade}%)!`)

    } else {

        console.log(`You got a F (${letterGrade}%)!`)

    };// END if statement

};// END function

grade(15, 20);

// Alt solution (re-frag)
let gradeCalc = function (studentScore, totalPossibleScore) {

    let letterGrade = (studentScore / totalPossibleScore) * 100;

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

let result = gradeCalc(18, 20);
console.log(result);