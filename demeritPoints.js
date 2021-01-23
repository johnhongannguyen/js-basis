/* Demerit Point exercise */
// speed limit = 70 km/h
// under speed limit = ok 
// over 5 km/h - get 1 point 
// using Math.floor() - this function is to return the largest integer less than or equal to a given number
// get more than 12 points -> license suspended 

checkSpeed(180);
function checkSpeed(speed){
    const limitSpeed = 70;
    const kmPerPoint = 5;
    if( speed < limitSpeed + kmPerPoint){
        console.log('OK');
     return  
    }
    let points = Math.floor((speed - limitSpeed)/ kmPerPoint);
    if(points > 12) console.log('License Suspended')
    else console.log('Points',points);
 }



    
