const person = {
    firstName: "Olivia",
    lastName: "Doe",
    age: 30
  };
  
  person.email = "olivia.doe@example.com";
  delete person.age;
  
  console.log(person);
  