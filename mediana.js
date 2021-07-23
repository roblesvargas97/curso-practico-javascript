const lista1 = [
    100 ,
    500 ,
    400 ,
    900,
    50
];

// function that calculates an arithmetic average

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0 , nuevoElemento) {
            
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length ;

    return promedioLista;
}

// functiont that orders an array 
function ordenarArreglo(arreglo){
    for(let i=0 ; i<arreglo.length ; i++){
        for(let j=0; j<arreglo.length-1 ; j++){
            if(arreglo[j]>arreglo[j+1]){
                let temp = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = temp;
            }
        }
    }

    return arreglo;
}

// Function that identifies if is even or odd

function esPar(numero){

    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
// function that calculate the median in an array

function calcularMediana(arreglo){

    const ordenado = ordenarArreglo(arreglo);
    console.log(ordenado);

    const mitadArreglo = parseInt(ordenado.length / 2);

    esPar(ordenado.length);

    let mediana;

    if(esPar(ordenado.length) ){
    
        const elemento1 = lista1[mitadArreglo - 1];
        const elemento2 = lista1[mitadArreglo];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1 , elemento2]);
    
           return mediana = promedioElemento1y2;
    
    
    } else {
    
           return mediana = lista1[mitadArreglo];
    }

}