//RECORRE VECTOR Y OBTIENE VALOR UN VALOR
console.log("_______________VECTOR________________")
let paisesLatam=["Argentina","Mexico","Colombia","Brazil"];
for (let i=0;i<paisesLatam.length;i++) {
    console.log(paisesLatam[i]);

    if(paisesLatam[i]=="Argentina"){
        console.log("Estoy en el pais de Messi");
    }
    
}

//recorrer una matriz
console.log("_______________MATRIZ________________")
let paiseslatam2 = [
    ["Argentina","Mexico","Colombia"],
    ["Chile","Peru","Brazil"],
    ["Ecuador","Bolivia","Uruguay"]
];

for (let f = 0; f < paiseslatam2.length; f++) {
    for (let c = 0; c < paiseslatam2.length; c++) {
        console.log(paiseslatam2[f][c]);
    
    }
    
}

//metodos
console.log("_______________METODS________________")

let frutas = ["naranja","banana","kiwi"];
frutas.push("manzana");
console.log(frutas);

//frutas.pop();//elimina el ultimo elemento
//frutas.shift();//elimina el primer elemento
frutas.unshift("sandia");//reemplaza el primer elemeto
console.log(frutas);

let frutasConA = frutas.filter(fruta=>fruta.includes("a"));
console.log(frutasConA);

let frutas2 = ["naranja","banana","kiwi"];
let frutas3 = ["manzana","mango","sandia"];

let todasLasFrutas = frutas2.concat(frutas3);
console.log(todasLasFrutas);

todasLasFrutas.reverse();
console.log(todasLasFrutas);

todasLasFrutas.sort();
console.log(todasLasFrutas);




