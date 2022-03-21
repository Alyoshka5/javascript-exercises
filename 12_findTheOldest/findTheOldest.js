const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();
    people.forEach(person => { if (!("yearOfDeath" in person)) person.yearOfDeath = thisYear; });
    return people.reduce((oldestPerson, person) => (person.yearOfDeath - person.yearOfBirth > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) ? person : oldestPerson, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
