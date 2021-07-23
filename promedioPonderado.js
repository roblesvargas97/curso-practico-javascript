const listaDePromedios = [[1000 , 50] , [300 , 80]];


function calcularPromedioPonderado(arreglo) {
    

    let contador1 = 0 ,
        contador2 = 0;

    for(let i = 0; i<arreglo.length ; i++){    

        contador1 += arreglo[i][0] * arreglo[i][1];
        contador2 += arreglo[i][1];
    }

    return contador1 / contador2;

    
}

console.log(calcularPromedioPonderado(listaDePromedios));

