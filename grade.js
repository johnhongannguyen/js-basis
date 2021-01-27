// 1-59 : F
// 60-69: D
// 70 - 79: C
// 80-89: B
// 90 -100 :A

const marks = [86,78,45];
console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     let sum = 0; 
//     for(let grade of marks)
//         sum += grade;
//     let avgGrade = sum/ marks.length;
//     if(avgGrade <= 59) return 'F';
//     else if(avgGrade >= 60 && avgGrade <=69) return 'D';
//     else if(avgGrade >=70 && avgGrade <=79) return 'C';
//     else if(avgGrade >=80 && avgGrade <=89) return 'B';
//     else return 'A';


// }

// rebuilt for good coder

function calculateGrade(marks){
    const average = calculateAverage(marks);
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

function calculateAverage(array){
    let sum = 0;
    for(let index of array)
        sum += index; 
    return sum/ array.length 
}