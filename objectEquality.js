let address1 = new Address('51st ave', 'Vancouver', 'V5D C4E');
let address2 = new Address('51st ave', 'Vancouver', 'V5D C4E');
let address3 = address1;
console.log(areSame(address1,address3))

// Constructor function 
function Address(street,city,zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

function areEqual(address1,address2){
    return address1.city === address2.city 
        && address1.street === address2.street
        && address1.zipCode === address2.zipCode
       
        
}
console.log(areEqual(address1,address2));


function areSame(address1,address2){
    return address1 === address2;

}
console.log(areSame(address1,address2));