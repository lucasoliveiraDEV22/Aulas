/* OPERADOR TERNÁRIO OU CONDICIONAL
?Se
:se não
*/
const rain = true
const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'
console.log (umbrela)

// PRECISO TRANSFERIR DINHEIRO
const balance = true
const isNotBlocked = true
const accountExist = true
const transferOK = balance && isNotBlocked && accountExist
console.log (transferOK)