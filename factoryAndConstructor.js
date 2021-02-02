// initialize an object 
// first using a factory function
// and then using a constructor function
// write two different functions to initialize an address object

// address object 

// const address = {
//     street: '49th ave',
//     city: 'Vancouver',
//     zipCode: 'D34 V4P'
// }

const address = createAddress('49th ave', 'Vancouver', 'D6P 4R6');
console.log(address);

let address1 = new Address('51st ave', 'Alberta', 'D5P D4E');
console.log(address1);


// using factory function 
function createAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    }

}

// using constructor function 
function Address(street,city,zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode

}


