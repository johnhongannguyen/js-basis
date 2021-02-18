const person = {
    firstName: 'John',
    lastName: 'Nguyen',
    // get fullName() {
    //     return `${this.firstName} ${this.lastName}`
    // },
    set fullName (value) {
        // const e = new Error();
        // throw e;
        if( typeof value !== 'string')
            throw new Error('Value is not a string');
       

        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name !')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullName = null;
}
catch(e){
    alert(e);
}



// add getters and setters 
// getters => access to properties 
// setters => access to change (mutate) them 

console.log(person);