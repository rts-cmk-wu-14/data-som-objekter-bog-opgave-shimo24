// Step 1: Create an object with 5 properties
let person = {
  firstname: "Sara",
  lastname: "Andersen",
  age: 28,
  city: "Copenhagen",
  hobby: "Painting"
};

document.getElementById("info1").textContent = "Firstname: " + person.firstname;
document.getElementById("info2").textContent = "Lastname: " + person.lastname;


document.getElementById("info3").textContent = "City: " + person["city"];
document.getElementById("info4").textContent = "Hobby: " + person["hobby"];

console.log("firstname:", person.firstname);
console.log(person["firstname"]);

console.log("lastname:", person.lastname);
console.log(person["lastname"]);

console.log("age:", person.age);
console.log(person["age"]);

console.log("city:", person.city);
console.log(person["city"]);

console.log("hobby:", person.hobby);
console.log(person["hobyy"]);






