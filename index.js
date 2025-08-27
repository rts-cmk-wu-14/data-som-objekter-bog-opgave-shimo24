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

// opgver 2
//  ...................................................................................

let person2 = {
    firstname: "Ole",
    lastname: "Erling",
    married: true,
    age: 54,
    hometown: "Roskilde",
    hobbies: ["Reptiler", "Frimærker", "Programmering"],
    pet: {
        type: "Klapperslange",
        name: "Holger"
    }
};

let profileDiv = document.getElementById("profile");

profileDiv.innerHTML = `
    <h2>${person2.firstname} ${person2.lastname}</h2>
    <p><strong>Gift:</strong> ${person2.married ? "Ja" : "Nej"}</p>
    <p><strong>Alder:</strong> ${person2.age}</p>
    <p><strong>By:</strong> ${person2.hometown}</p>
    <p><strong>Kæledyr:</strong> ${person2.pet.type} ved navn ${person2.pet.name}</p>
    <div class="hobbies">
        <strong>Hobbyer:</strong>
        <ul id="hobbyList"></ul>
    </div>  
`;

let hobbyList = document.getElementById("hobbyList");

for (let i = 0; i < person2.hobbies.length; i++) {
    let li = document.createElement("li");
    li.textContent = person2.hobbies[i];
    hobbyList.appendChild(li);

    
    console.log("Hobby:", person2.hobbies[i]);
}

console.log("Kæledyrstype:", person2.pet.type);
console.log("Kæledyrsnavn:", person2.pet.name);




