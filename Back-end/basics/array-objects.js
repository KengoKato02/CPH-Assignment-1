let student = {
 name: 'David',
 id: 1,
 grades: [7, 12, 10, 12]
}

function addgrades(student, grade) {
 student.grades.push(grade);
 return student.grades;
}

function updateStudentName(student, newName) {
 student.name = newName;
 return student.name;
}

const student1 = {
 name: 'james',
 id: 2,
 grades: [2, 7, 10, 12]
}

console.log("Added grades: ", addgrades(student1, 12, 7, 10));
console.log("Updated student name: ", updateStudentName(student1, 'Jeffery'));
