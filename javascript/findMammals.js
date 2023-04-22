animals = [
    {
        type: 'Dog',
        mammal: true,
    },
    {
        type: 'Snake',
        mammal: false,
    },
    {
        type: 'Cheetah',
        mammal: true,
    },
]

const findMammals = (animals) => {
    const mammals = [];

    for (let idx = 0; idx < animals.length; idx++) {
        if (animals[idx].mammal === true) {
            mammals.push(animals[idx]);
        }
    }
    return mammals;
}

const findMammals2 = (animals) => {
    return animals.filter((animal) => animal.mammal === true)
}

console.log(findMammals(animals));
console.log(findMammals2(animals));