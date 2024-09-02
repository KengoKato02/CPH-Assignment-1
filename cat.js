export class Cat {
 constructor(name, colour, breed) {
  this.name = name;
  this.colour = colour;
  this.breed = breed;
 }

 getCatInfo() {
  return `${this.name} is a ${this.colour} ${this.breed}`;
 }

 changeCatName(newName) {
  this.name = newName;
  return `Name changed to ${this.name}`;
 }
}