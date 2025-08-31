function people(){
    const person = require('./names');
    const hobbies = require('./hobbies');

    const personData = person();
    const hobbiesData = hobbies();

    const peopleInfo = {
        fullName: personData,
        hobbies: hobbiesData,
    }

    return peopleInfo;
}