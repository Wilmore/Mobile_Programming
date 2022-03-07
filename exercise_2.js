// Italilpessy, Wilmore
// Izaac, Bryan Vallen
// Sangari, Richard
// Tangkda, Perkins
// Thomas, Marched

const array = ["Marchel", "Wilmore", "Vallen", "Richard", ,];

const object = {
  namaDepan: "John",
  namaBelakang: "Doe",
  fakultas: "FIK",
  healt: undefined
};

// Destrurcturing Array
console.log("Destrurcturing Array :")
let [nama1, nama2, nama3] = array;

console.log(nama1, nama2);
console.log("-------")
console.log("-------")

// Destructuring array menggunakan koma
console.log("Destructuring array menggunakan koma :")

let [name1,  , name2,  ,name3] = ["Marchel", "Perkins", "Vallen", "Sanggari", "Wilmore"];

console.log(name1);
console.log(name2);
console.log(name3);
// array Perkins dan Sanggari tidak akan muncul
console.log("-------")
console.log("-------")

//Desctructuring menukar nilai
console.log("Desctructuring menukar nilai :")
let x = 15;
let y = 10;
let z = 20; 

[x,y] = [y,x];
console.log(`x = 10`,x)
console.log(`z = `,y)
console.log(`Hasil dari x + z =`,x + z);
console.log("Jadi nilai x ditukar dengan nilai y sehingga nilai x yangn awalnya 15 menjadi 10")
// Jadi nilai x ditukar dengan nilai y sehingga nilai x yangn awalnya 15 menjadi 10
console.log("-------")
console.log("-------")


//Destructuring Object
console.log("Destructuring Object :")

let { namaDepan : firstName, namaBelakang : lastName, fakultas : faculty } = object;

console.log(firstName);
console.log(lastName);
console.log(faculty);

console.log("-------")
console.log("-------")


//Destructuring Default Value Array
console.log("Destructuring Default Value Array :")
let [dv1, dv2, dv3, dv4, dv5="Bryan" ] = array;

console.log(dv1);
console.log(dv2);
console.log(dv3);
console.log(dv4);
console.log(dv5);

console.log("-------")
console.log("-------")

//Destructuring Default Value Object
console.log("Destructuring Default Value Object");

let{namaDepan : dvo1, namaBelakang : dvo2, fakultas: dvo3 ="Perawat" , health: dvo4 ="Sehat"} = object;
console.log(dvo1, dvo2,dvo3, dvo4);
// console.log(dvo2);
// console.log(dvo3);

console.log("-------")
console.log("-------")

// Destructuring Rest Array
console.log("Destructuring Rest Adrray d :")
let [a1, a2, ...aRest] = array;
console.log(a1)
console.log(a2)
console.log(aRest)

console.log("-------")
console.log("-------")

//Destructuring Rest Object
console.log("Destructuring Rest Object :")
let {namaDepan : nD, namaBelakang : nB, ...nRest} = object;
console.log(nD, nB, nRest);

console.log("-------")
console.log("-------")
