const lista1 = [ 1 , 2 , 3 , 1 , 2 , 3 , 4 , 2 , 2 , 1];

function calcularModa(arreglo){
    
    const listaContador = {};

    arreglo.map(
        function(elemento){

            if(listaContador[elemento]) {

                listaContador[elemento] += 1;

            }else{
                listaContador[elemento] =1;
            }

        }
    )

    lista1Array = Object.entries(listaContador).sort(
        function(elementoA , elementoB) {
            return elementoA[1] - elementoB[1]; 
        }
    )

    const moda = lista1Array[lista1Array.length - 1];
    return moda;

}