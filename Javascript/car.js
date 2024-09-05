export class Car {
 constructor(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.isRunning = false; // Initialize isRunning to false
 }

 getCarInfo() {
   return `${this.make} ${this.model} (${this.year})`;
 }

 start() {
   this.isRunning = true;
   return 'Car has started';
 }

 stop() {
   this.isRunning = false;
   return 'Car has stopped';
 }
}

// Create instances of the Car class
const car1 = new Car('Toyota', 'Corolla', 2019);
const car2 = new Car('Honda', 'Civic', 2018);

// Test the methods
console.log(car1.getCarInfo());
console.log(car1.start());     
console.log(car1.stop());      

console.log(car2.getCarInfo());
console.log(car2.start());     
console.log(car2.stop());      
