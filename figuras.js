// Este es el codigo del cuadrado

console.group('Cuadrados');

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado){
    return lado * 4
} 
// perimetroCuadrado( )
// console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm');

function areaCuadrado(lado){

     return lado * lado;
} 
// console.log('El area del cuadrado es: ' + areaCuadrado + 'cm^2' );

console.groupEnd();

// Este el el codigo del triángulo

console.group('Triangulos');

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log('Los lados del triangulo miden: ' 
// + ladoTriangulo1 
// + 'cm, ' 
// + ladoTriangulo2 
// + 'cm, ' 
// + baseTriangulo 
// + 'cm');

// const alturaTriangulo = 5.5;
// console.log('La altura del triangulo es de: ' +  alturaTriangulo + ' cm');

function perimetroTriangulo(lado1 , lado2 , base) {

    return lado1 + lado2 + base;
}
// console.log('El perimetro del triangulo es: ' + perimetroTriangulo + ' cm');

function areaTriangulo(base , altura){

    return (base * altura) / 2;
    
} 
// console.log('El area del triangulo es: ' + areaTriangulo + 'cm^2' );


console.groupEnd();

// Este es el codigo del circulos
// console.group('Circulos');

// Radio
const radioCirculo = 4;
// console.log('El radio del circulo mide: ' + radioCirculo + 'cm');

// Diámetro
function diametroCirculo(radio){

    return radio * 2;

} 
// console.log('El diametro del circulo es: ' + diametroCirculo + 'cm');

// PI
const pi = Math.PI;
// console.log('PI es: ' + pi );

// Circunferencia
function perimetroCirculo(radio){
    
    const diametro = diametroCirculo(radio);
    return diametro * pi;
    
} 
// console.log('El perimetro del circulo es: ' + perimetroCirculo + 'cm');

// Area
function areaCirculo(radio){
    return (radio * radio) * pi;
} 
// console.log('El area del circulo es: ' + areaCirculo + 'cm');  


// Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);


}

function calcularAreaCuadrado(){

    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);


}

function calcularPerimetroTriangulo(){

    const inputl1 = document.getElementById('inputTriangulol1');
    const valuel1 = Number(inputl1.value);
   

    const inputl2 = document.getElementById('inputTriangulol2');
    const valuel2 = Number(inputl2.value);

    const inputb = document.getElementById('inputTrianguloB');
    const valueb = Number(inputb.value);

    const perimetro = perimetroTriangulo(valuel1 , valuel2 , valueb);
    alert(perimetro);

}


function calcularPerimetroTriangulo(){

    const inputl1 = document.getElementById('inputTriangulol1');
    const valuel1 = Number(inputl1.value);
   

    const inputl2 = document.getElementById('inputTriangulol2');
    const valuel2 = Number(inputl2.value);

    const inputb = document.getElementById('inputTrianguloB');
    const valueb = Number(inputb.value);

    const perimetro = perimetroTriangulo(valuel1 , valuel2 , valueb);
    alert(perimetro);

}

function calcularAreaTriangulo(){

    const inputb = document.getElementById('inputTrianguloB');
    const valueb = Number(inputb.value);

    const inputA = document.getElementById('inputTrianguloA');
    const valueA = Number(inputA.value);

    const area = areaTriangulo(valueb , valueA);
    alert(area);

}

function calcularPerimetroCirculo(){

    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);

}

function calcularAreaCirculo(){

    const input = document.getElementById('inputCirculo');
    const value = Number(input.value);

    const perimetro = areaCirculo(value);
    alert(perimetro);

}