/* const nombre = document.getElementById('nombre');
const curso = document.getElementById('curso');
const genero = document.getElementById('genero');
const agregar = document.getElementById('agregar');
const mostrar = document.getElementById('mostrar');
datos =[];

agregar.addEventListener('click',()=>{
    datos.push(nombre.value,curso.value,genero.value);
    localStorage.setItem('estudiantes',JSON.stringify(datos));
})

mostrar.addEventListener('click',()=>{
   lista = JSON.parse(localStorage.getItem('estudiantes'));
   if(lista==undefined){
    alert('lista esta vacia');
   }
   for(i=0;i<lista;i++){
    console.log(lista[i]);
   }
})
 */

/*
proporciones

let arr = [-4, 3, -9, 0, 4, 1];

let positivo = 0;
let negativo = 0;
let cero = 0
let pro_pos = 0;
let pro_neg = 0;
let pro_cero = 0;


for (let i = 0; i < arr.length; i++) {
  let number = arr[i];
  if (number > 0) {
    positivo++;
    pro_pos = positivo / arr.length;
  }else if(number<0){
    negativo++;
    pro_neg = negativo / arr.length;

  }else{
    cero ++;
    pro_cero = cero / arr.length;
  }
}

console.log(pro_pos);
console.log(pro_neg);
console.log(pro_cero);
 */

/*    staircase

    let n = Math.floor(Math.random()*10+1);

    console.log(n);

      for (let i = 1; i <= n; i++) {

        
          console.log(" ".repeat(n-i) + "#".repeat(i))
      }    
   */


/* console.log("Funcion MinMax - Way 1");

let arr = [1,3,5,7,9];
let result = [];

let arr_menor = arr.slice();
let arr_mayor = arr.slice();


let menor = arr_menor.sort(function(a,b){
    return a-b;
})
menor.pop();


let mayor = arr_mayor.sort(function(a,b){
    return b-a;
})
mayor.pop();

let suma_menor = menor.reduce((a,b)=>a+b,0);

let suma_mayor = mayor.reduce((a,b)=>a+b,0);



console.log(`${suma_menor} ${suma_mayor}`); */



/* console.log("Funcion MinMax - Way 2");
let arr = [];
let n = 0;


// Composicion extra 

n = Math.floor(Math.random()*10+1);

console.log(n);

for (i=0;i<n;i++){
    
    arr[i] = Math.floor(Math.random()*10+1);

}

arr.sort()

console.log(arr);

// solucion

let menor;
let mayor;

for(let i=0;i<arr.length;i++){
  

let arr_menor = arr.slice();
let arr_mayor = arr.slice();


menor = arr_menor.sort(function(a,b){
return a-b;
})
menor.pop();


mayor = arr_mayor.sort(function(a,b){
return b-a;
})
mayor.pop();


}

let suma_menor = menor.reduce((a,b)=>a+b,0);

let suma_mayor = mayor.reduce((a,b)=>a+b,0);

console.log(`${suma_menor} ${suma_mayor}`);
 */




