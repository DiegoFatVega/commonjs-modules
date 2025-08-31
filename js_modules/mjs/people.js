import person from "./names.js"
import hobbies from "./hobbies.js"

function people(){
    const name = 'Vanessa';
    const surname = 'Recinos';

    const hobbie_1 = 'lecture';
    const hobbie_2 = 'soccer';
    const hobbie_3 = 'videogames';

    const personData = person(name, surname);
    const hobbiesData = hobbies(hobbie_1, hobbie_2, hobbie_3);

    const peopleInfo = {
        fullName: personData,
        hobbies: hobbiesData,
    }

    return peopleInfo;
}

const peopleOne = people();

console.log(peopleOne)