function getFullName(firstName, lastName) {
 return `Your full name is: ${firstName} ${lastName}`;
}

function getRectArea(width, height) {
 return `Your calculated ares is: ${width * height}`;
}

function getDistance(speed, time) {
 const dist = speed * time;
 return `You have travelled ${dist} km`;
}

const calculator = {
 fullName: getFullName('Kengo', 'Kato'),
 rectArea: getRectArea(10, 20),
 distance: getDistance(100, 2)
};

console.log(calculator);