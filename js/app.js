// # Calcolatore prezzo del biglietto del treno

// - chiedere all' utente i chilometri che vuole percorrere
const km =parseInt(prompt("quanti chilometri vuoi percorrere?"));
console.log(typeof km);
// - chiedere all'utente la sua eta
const age =parseInt(prompt("quanti anni hai?"));
console.log(age);

// - calcolare il prezzo che dovra pagare in base ai valori precedentemente dichiarati
//     - stabilire in una variabile il prezzo al km 
const pricePerKm = 0.21       
//     - calcolare il prezzo da pagare in base ai km
//         - prezzo base = numero km * prezzo per ogni km
let totalPrice = km * pricePerKm;
console.log(totalPrice);
//     - stabilire in delle variabili gli sconti
//         - calcolare lo sconto da applicare
//             - sconto = prezzo base * entità sconto / 100
let discount = 0;

//         - applicare lo sconto determindo il prezzo finale
//             - prezzo scontato = prezzo base - sconto
// let userDiscountedPrice;

if (age < 18) {
    discount = totalPrice * 20 / 100
    console.log(discount)
    // userDiscountedPrice = totalPrice - discount
    // console.log(userDiscountedPrice)
    totalPrice = totalPrice - discount
    
} else if (age > 65) {
    
    discount = totalPrice * 40 / 100
    console.log(discount)
    totalPrice = totalPrice - discount
}

// userDiscountedPrice = (totalPrice - discount)

console.log(totalPrice.toFixed(2));
// let userDiscountedPriceDecimal = Math.round(userDiscountedPrice * 100) / 100


// - stampare il prezzo che abbiamo calcolato con massimo due decimali  
const priceDomElement = document.getElementById('price');
priceDomElement.innerHTML= totalPrice.toFixed(2);