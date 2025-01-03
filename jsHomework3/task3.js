const car1 = {
    brand: "Tesla",
    model: "X",
    year: 2020
  };
  
  const car2 = {
    brand: "Tesla",
    model: "Y",
    owner: 2021
  };
  
  const car3 = { ...car1, ...car2 };
  
  console.log(car3);
  