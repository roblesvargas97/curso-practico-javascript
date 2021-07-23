const precioOriginal = 100;
const descuento = 15;

const couponsArray = ['10_descuento' , '20_descuento' , "30_descuento"];


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

function calcularPrecioConDescuento(precio,descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = ( precio * porcentajePrecioConDescuento ) / 100;

    return precioConDescuento;
}


// function calculateDiscount(){

//     const inputPrice = document.getElementById('inputPrice');
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById('inputDiscount');
//     const discountValue = inputDiscount.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue , discountValue);
     
//     const resultP = document.getElementById('resultPrice');
//     resultP.innerText = `El precio con descuento son  $ ${precioConDescuento}`

// }

function checkCoupon(){

    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById('inputCoupons');
    const couponValue = inputCoupon.value;

    let precioConDescuento ;

    const resultP = document.getElementById('resultPrice');

    if(priceValue!=="" && couponValue!==""){

        for(let i = 0 ; i<=couponsArray.length ; i++){


            if(couponValue === couponsArray[0]){
                precioConDescuento = calcularPrecioConDescuento(priceValue , 10);
                
            }else if(couponValue === couponsArray[1]){
                precioConDescuento = calcularPrecioConDescuento(priceValue , 20);
                
            }else if(couponValue === couponsArray[2]){
                precioConDescuento = calcularPrecioConDescuento(priceValue , 30);

            }else{
                resultP.innerText = `El cupon no es valido`;
                return;
            }

            resultP.innerText = `El precio con descuento son  $ ${precioConDescuento}`;    
    
        }
    

    }


}