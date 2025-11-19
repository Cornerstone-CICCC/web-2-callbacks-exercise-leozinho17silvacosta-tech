const fs = require("fs");


let firstName, lastName, age, hobbies;

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  firstName = data1.trim();
    
    fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
      lastName = data2.trim();

      fs.readFile("./age.txt", "utf-8", (err, data3) => {
        age = data3.trim();

        fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
          hobbies = data4.trim().split(',');

          console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`)
        })
      })
    })
  })