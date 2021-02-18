const person = {
    firstName: 'John',
    lastName: 'Nguyen',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName (value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';


// add getters and setters 
// getters => access to properties 
// setters => access to change (mutate) them 

console.log(person);