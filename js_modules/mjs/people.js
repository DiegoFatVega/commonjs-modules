import person from "./names.js"
import hobbies from "./hobbies.js"

function people(){
    const peopleInfo = {
        fullName: person('Diego', 'FatVega'),
        hobbies: hobbies('Soccer','VideoGames', 'Tennis'),
    }

    return peopleInfo;
}

const peopleOne = people();

console.log(peopleOne)

