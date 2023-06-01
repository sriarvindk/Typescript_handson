var persons = [
    {
        "name": "Ashok",
        "age": 60,
        "children": [
            {
                "name": "Arun",
                "age": 20,
                "children": []
            },
            {
                "name": "Divya",
                "age": 25,
                "children": [
                    {
                        "name": "Ajay",
                        "age": 10,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Sidhu",
        "age": 35,
        "children": []
    }
];
function calculateTotalPerson(persons) {
    return persons.length + persons.reduce(function (count, person) { return count + calculateTotalPerson(person.children); }, 0);
}
var totalPersonCount = calculateTotalPerson(persons);
console.log(totalPersonCount);
