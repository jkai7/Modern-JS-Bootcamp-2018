// Sum up array
const sampleArray = [1, 2, 3, 4, 10, 11];

let sum = 0

function simpleArraySum(ar) {

    //SOLUTION #1
    let result = ar.reduce(function(a,b) {
        return a + b 
    });
    console.log(result);

    //SOLUTION #2
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i]       
    };
    console.log(sum);
        //ALT FOR SOLUTION #2
        let numberOfElements = sampleArray.length;
        let sumOfArray = 0;
        for (let i = 0; i < numberOfElements; i++) {
            sumOfArray += sampleArray[i];
        }
        console.log(sumOfArray);

};

simpleArraySum(sampleArray);