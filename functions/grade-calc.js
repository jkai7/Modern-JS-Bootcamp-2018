// students score, total possible score
// 15/20 -> You got a C (75%)! return a string 
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59

//my solution

// let gradeCalc = function (studentScore, totalPossibleScore = 20) {

//     let percent = (studentScore / totalPossibleScore) * 100 


//     if (percent <= 59) {
        
//         letterGrade = 'F'
    
//     }else if (percent >= 60 && percent <= 69) {
        
//         letterGrade = 'D'
    
//     }else if (percent >= 70 && percent <= 79) {
        
//         letterGrade = 'C'
    
//     }else if (percent >= 80 && percent <= 89) {
        
//         letterGrade = 'B'
    
//     }else if (percent >= 90) {
        
//         letterGrade = 'A'
    
//     }else{
//         letterGrade = 'Invalid'
//     }
       
//     return `You got a ${percent}% on your test. Your grade is a ${letterGrade}!`

// }

// let grade = gradeCalc(15)
// console.log(grade);

//video solution

const gradeCalc = function (studentScore, totalPossibleScore) {

    const percent = (studentScore / totalPossibleScore) * 100 
    let letterGrade = ''


    if (percent >= 90) {
       
        letterGrade = 'an A'
    
    }else if (percent >= 80) {
        
        letterGrade = 'a B'

    }else if (percent >= 70) {
        
        letterGrade = 'a C'
    
    }else if (percent >= 60) {
        
        letterGrade = 'a D'
    
    }else{
        
        letterGrade = 'a F'
    }
       
    return `You got ${letterGrade} (${percent}%)!`


}

const grade = gradeCalc(15, 20)
console.log(grade);