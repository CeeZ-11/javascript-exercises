const findTheOldest = function(people) {
    const currYear = new Date().getFullYear();

    const age = people.map(person => {
        if(person.yearOfDeath == null || person.yearOfDeath == undefined){
            person.yearOfDeath = currYear;
        }
    return({
        name: person.name,
        age: person.yearOfDeath - person.yearOfBirth
    })});

    console.log(age);

    const oldest = age.reduce((acc, curr) => {
        return curr.age > acc.age ? curr : acc;
    }, age[0]);

    console.log(oldest);
    
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
