/* OPERADORES TYPEOF E DELETE
typeof = tipo de variável
delete = deleta alguma função ou algum objeto
*/
const myNumber = 20
const myString = "Olá, sou uma string"
const myObject = {
    name: "João",
    age: 20,
    height: 1.7
}
// console.log (typeof myNumber )
delete myObject.height
console.log (myObject)