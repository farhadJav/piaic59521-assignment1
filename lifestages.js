var age = Math.floor(Math.random()* 100);
console.log(age);


if (age < 2)
console.log("BABY");

if (age >=2 && age < 4)
console.log("Toddler");

if (age >=4 && age < 13)
console.log("Kid");

if (age >=13 && age < 20)
console.log("Teenager");

if (age >=20 && age < 65)
console.log("Adult");

if (age>65)
console.log("Elder");