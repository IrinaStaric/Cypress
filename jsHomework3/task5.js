const users = [
    { firstName: "John", lastName: "Doe", email: "john.doe@example.com", age: 20 },
    { firstName: "Olivia", lastName: "Brown", email: "olivia.brown@example.com", age: 25 },
    { firstName: "Sophia", lastName: "Williams", email: "sophia.williams@example.com", age: 30 }
  ];
  
  for (const { firstName, lastName, email, age } of users) {
    console.log(`Name: ${firstName} ${lastName}, Email: ${email}, Age: ${age}`);
  }
  