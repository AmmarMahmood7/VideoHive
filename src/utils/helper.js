
const subjects = ['The cat', 'The dog', 'The bird', 'The rabbit', 'The elephant'];
const verbs = ['jumps', 'runs', 'flies', 'eats', 'sleeps'];
const objects = ['over the fence', 'on the mat', 'through the air', 'the delicious food', 'under the tree'];


export function generateRandomSentence() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];

    return `${subject} ${verb} ${object}.`;
}
export function generateRandomName() {
    var firstNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
    var lastNames = ["Smith", "Johnson", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas"];

    var randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    var randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    var randomName = randomFirstName + " " + randomLastName;
    return randomName;
}

