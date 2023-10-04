// # Calcolatore prezzo del biglietto del treno

// - chiedere all' utente i chilometri che vuole percorrere
const km =parseInt(prompt("quanti chilometri vuoi percorrere?"))
console.log(typeof km)
// - chiedere all'utente la sua eta
const age =parseInt(prompt("quanti anni hai?"))
console.log(age)

// - calcolare il prezzo che dovra pagare in base ai valori precedentemente dichiarati
//     - stabilire in una variabile il prezzo al km 
const pricePerKm = 0.21       
//     - calcolare il prezzo da pagare in base ai km
//         - prezzo base = numero km * prezzo per ogni km
let userPricePerKm = km * pricePerKm
console.log(userPricePerKm)
//     - stabilire in delle variabili gli sconti
//         - calcolare lo sconto da applicare
//             - sconto = prezzo base * entità sconto / 100
let discount
//         - applicare lo sconto determindo il prezzo finale
//             - prezzo scontato = prezzo base - sconto


// - stampare il prezzo che abbiamo calcolato con massimo due decimali  