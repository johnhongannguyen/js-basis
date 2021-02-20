// circle obj -using obj literal syntax 
// radius property - can read and write to 

const circle = {
   radius : 2,
   get area() {
        return Math.PI * this.radius * this.radius;
   },
   
};


console.log(circle.radius);
console.log(circle.area);