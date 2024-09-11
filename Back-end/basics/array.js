const names = ['Patrik', 'John', 'Jane', 'Doe', 'Smith'];
console.log('first name in array', names[0])

console.log('Index of John:', names.indexOf('John'));
console.log('Index of Bob:', names.indexOf('Bob'));

names.push('Bob');
console.log('Names after push:', names);

const firstThreeNames = names.slice(0, 3);
console.log('First three names:', firstThreeNames);

const person1 = {
 firstname: 'John',
 lastname: 'Doe',
 email: 'john@gmail.com'
}
const person2 = {
 firstname: 'Jane',
 lastname: 'Smith',
 email: 'jane@gmail.com'
}

const people = [person1, person2];
console.log('People:', people);
console.log('First person email:', people[0].email);
