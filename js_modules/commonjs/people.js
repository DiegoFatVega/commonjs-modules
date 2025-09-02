function people(){
    const person = require('./names');
    const hobbies = require('./hobbies');

    const peopleInfo = {
        fullName: person('Diego', 'FatVega'),
        hobbies: hobbies('Soccer','VideoGames', 'Tennis'),
    }

    return peopleInfo;
}

console.log(people());
console.log("Hello World")