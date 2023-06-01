class Person {
    name: string;
    age: number;
  
    introduce(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Parent extends Person {
    children: string[];
  
    introduce(): void {
      super.introduce();
      if (this.children.length > 0) {
        console.log(`I have ${this.children.length} children: ${this.children.join(", ")}.`);
      } else {
        console.log("I have no children.");
      }
    }
  }
  
  // Creating an instance of Parent with children and invoking the introduce method
  const parent = new Parent();
  parent.name = "John";
  parent.age = 40;
  parent.children = ["Miller", "Bob"];
  parent.introduce();