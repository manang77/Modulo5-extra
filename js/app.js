let numArray = [25, 2.05, 1000, 63, 4.01, -9];
console.log("*******************************************************************");
console.log("******                   EJERCICIO 1                        *******");
console.log("*******************************************************************");

console.log("--------------------- BUCLE FOR -----------------------------------");
for (i = 0 ; i < numArray.length ; i++) {
    console.log("Elemento " + i + " : " + numArray[i]);
}

console.log("--------------------- BUCLE FOR..OF--------------------------------");
for (item of numArray) {
    console.log("Elemento " + i + " : " + item);
}

console.log("--------------------- WHILE ---------------------------------------");
let j = 0;

while (j < numArray.length) {
    console.log("Elemento " + j + " : " + numArray[j]);
    j++
}

console.log("--------------------- DO WHILE ------------------------------------");
let k = 0;

do {
    console.log("Elemento " + k + " : " + numArray[k]);
    k++
} while (k < numArray.length);



console.log("*******************************************************************");
console.log("******                   EJERCICIO 2                        *******");
console.log("*******************************************************************");
let numArray2 = [14, 2, 2.02, 63, 0, -9];

for (item of numArray2) {
    if (item > 0)  
        console.log("Elemento " + numArray2.indexOf(item) + " : " + item);
}



console.log("*******************************************************************");
console.log("******                   EJERCICIO 3                        *******");
console.log("*******************************************************************");
let greaterOrEqualZero = [];
let lowerThanZero = [];

for (item of numArray2) {
    if (item >= 0) 
        greaterOrEqualZero.push(item);
    else
        lowerThanZero.push(item);
}

console.log("----- Elementos >= 0 ----------------------------------------------");
for (item of greaterOrEqualZero) {
    console.log("Elemento " + greaterOrEqualZero.indexOf(item) + " : " + item);
}

console.log("----- Elementos < 0 -----------------------------------------------");
for (item of lowerThanZero) {
    console.log("Elemento " + lowerThanZero.indexOf(item) + " : " + item);
}



console.log("*******************************************************************");
console.log("******                   EJERCICIO 4                        *******");
console.log("*******************************************************************");
for (item of lowerThanZero) {
    numArray2.splice(numArray2.indexOf(item), 1);
}
for (item of numArray2) {
    console.log("Elemento " + numArray2.indexOf(item) + " : " + item);
}



console.log("*******************************************************************");
console.log("******                   EJERCICIO 5                        *******");
console.log("*******************************************************************");
let persons = [ 
    { id: 1, name: "Jhon", }, 
    { id: 2, name: "Doe", }, 
    { id: 3, name: "Clara", }, 
    { id: 4, name: "Elisa", }, 
    { id: 4, name: "Pedro", }, 
];

for (i = persons.length - 1; i >= 0; i--) {
    printItem(persons[i]);
}

function printItem(item) {
    for (dataItem in item) {
        console.log(dataItem + " : " + item[dataItem]);
    }
    console.log(".........................");
}



console.log("*******************************************************************");
console.log("******                   EJERCICIO 6                        *******");
console.log("*******************************************************************");
let persons2 = [ 
    { id: 1, name: "Jhon", age: 25, }, 
    { id: 2, name: "Doe", age: 8, }, 
    { id: 3, name: "Clara", age: 15, }, 
    { id: 4, name: "Elisa", age: 30, }, 
    { id: 4, name: "Pedro", age: 18, }, 
];

for (person of persons2) {
    if (person.age >= 18 ) 
        printItem(person);
}
    


console.log("*******************************************************************");
console.log("******                   EJERCICIO 7                        *******");
console.log("*******************************************************************");
let olderThan18 = [];
let youngerThan18 = [];

for (person of persons2) {
    if (person.age >= 18)
        olderThan18.push(person);
    else    
        youngerThan18.push(person);
}

console.log("----- Mayores de 18 años --------------------------------------------");
for (person of olderThan18) {
    printItem(person);
}

console.log("----- Menores de 18 años --------------------------------------------");
for (person of youngerThan18) {
    printItem(person);
}



console.log("*******************************************************************");
console.log("******                   EJERCICIO 8                        *******");
console.log("*******************************************************************");
let hotels = [
    {hoteId: 1, hotelName: "Jhon", availableRooms: 25, price: 10.20,},
    {hoteId: 2, hotelName: "Doe", availableRooms: 8, price: 4.25,},
    {hoteId: 3, hotelName: "Clara", availableRooms: 15, price: 14.30,},
    {hoteId: 4, hotelName: "Elisa", availableRooms: 30, price: 10,},
    {hoteId: 4, hotelName: "Pedro", availableRooms: 10, price: 8.10,},
]


for (hotel of hotels) {
    if (hotel.availableRooms < 10) 
        hotel.price = hotel.price + 10;
    
    printItem(hotel);
}

console.log("*******************************************************************");
console.log("******                   EJERCICIO 9                        *******");
console.log("*******************************************************************");
let hotels2 = [
    {hoteId: 1, hotelName: "Jhon", availableRooms: 25, price: 10.20,},
    {hoteId: 2, hotelName: "Doe", availableRooms: 8, price: 4.25,},
    {hoteId: 3, hotelName: "Clara", availableRooms: 15, price: 14.30,},
    {hoteId: 4, hotelName: "Elisa", availableRooms: 30, price: 10,},
    {hoteId: 4, hotelName: "Pedro", availableRooms: 10, price: 8.10,},
]
let lessThan10Rooms = [];

for (hotel of hotels2) {
    if (hotel.availableRooms < 10) {
        hotel.price = hotel.price + 10;
        lessThan10Rooms.push(hotel);
    } 
}

for (hotel of lessThan10Rooms) {
    printItem(hotel);
}



console.log("*******************************************************************");
console.log("******                   EJERCICIO 10                        ******");
console.log("*******************************************************************");
let hotels3 = [ 
    {hoteId: 1, hotelName: "Hotel 1", availableRooms: 25, price: 10.20, }, 
    {hoteId: 2, hotelName: "Hotel 2", availableRooms: 8, price: 4.25, }, 
    {hoteId: 3, hotelName: "Hotel 3", availableRooms: 15, price: 14.30, }, 
    {hoteId: 4, hotelName: "Hotel 4", availableRooms: 30, price: 10, }, 
    {hoteId: 5, hotelName: "Hotel 5", availableRooms: 10, price: 8.10, }, ]

let existeHotel = name => {
    let exists = false;
    for (n = 0; n < hotels3.length && !exists; n++) {
        exists = exists || (hotels3[n].hotelName == name);
    }
    return exists;    
}

let hotelName = document.getElementById("hotel-name");
let getHotelName = () => hotelName.value;

function handleClickEvent() {
    if (existeHotel(getHotelName()))
        alert("El hotel " + getHotelName() + " existe");
    else
        alert("El hotel " + getHotelName() + " no existe");
}

document.getElementById("myButton").addEventListener("click", handleClickEvent);