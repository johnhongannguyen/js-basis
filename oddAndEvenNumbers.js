// Even and Odd numbers
// limit 10 numbers and show odd or even
// showNumbers(10);

// function showNumbers(limit){
//     for(limit = 0;limit <= 10; limit++){
//         if(limit % 2 === 0)
//         console.log('EVEN',limit);
//         else 
//         console.log('ODD',limit);
//     }
// }

// another solution
showNumbers(20)
function showNumbers(limit){
    for(i = 0; i <= limit; i++){
        // if(i % 2 === 0) console.log(i,'EVEN');
        // else console.log(i,'ODD');

        // cleaner code
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i,message);
    }
}