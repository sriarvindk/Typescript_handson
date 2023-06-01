interface Parent {
    name: string;
    age: number;
    children: Child[];
  }
  
  interface Child {
    name: string;
    age: number;
    children: Child[];
  }
  
  const persons: Parent[] = [
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
  
  function calculateTotalPerson(persons: Parent[]): number {
    return persons.length + persons.reduce((count, person) => count + calculateTotalPerson(person.children), 0);
  }
  
  const totalPersonCount = calculateTotalPerson(persons);
  console.log(totalPersonCount); 
  