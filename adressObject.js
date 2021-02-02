// create address of Object with 3 properties 
// street
// city
// zipCode
// then create a function calls showAddress(address)

const address = {
    street: 'Gladstone st',
    city: 'Vancouver',
    zipCode: 'V4D V6P'
}

function showAddress(address){
    for(let key in address)
        console.log(key,address[key]);
}
showAddress(address);

