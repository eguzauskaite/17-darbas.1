// Sukurkite atskirus aplankalus kiekvienai užduočiai su index ir script. Atlikite užduotis ir paviešinę per Github pages įkelkite :)

// 1. Switch užduotis:

// 1. Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

// 2. Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

// 3. Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.

// 4. Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas

// 1 uzduotis
// var vardas = prompt("Įveskite savo vardą")
// if(vardas.length < 5){
//     alert("Short Name")
//     console.log("Short Name")  
// } else {
//     alert("Long Name")
//     console.log("Long Name")
// }
var vardas = prompt("Įveskite savo vardą")
switch("vardas") {
    case "vardas.length < 5":
    alert("Short Name")
    break
    default: alert("Long Name")
}

// 2 uzduotis
// var clientAge, legalAge
// var clientAge = prompt("Įrašykite savo amžių")

// if(clientAge >= 18){
//     alert("client Can Drive")
//     console.log("Can Drive")
// } else {
//     alert("client Can't Drive")
//     console.log("client Can't Drive")
// }

var clientAge, legalAge
var clientAge = prompt("Įrašykite savo amžių")

switch("clientAge"){
    case "legaltlAge >= 18":
     alert("Can Drive")
    break
    default: alert("Can't Drive")
}

console.log("======")
    // 3 uzduotis
//     var clientAge, legalAge
// var clientAge = prompt("Įrašykite savo amžių")
// if(clientAge < 0 || clientAge > 120){
//     alert("Invalid Age")
//     console.log("Invalid Age")
// }

var clientAge = prompt("Įrašykite savo amžių")

switch("clientAge"){
    case"clientAge < 0 || clientAge > 120":
  default: alert("Invalid Age")
}
console.log("=======")
// 4 uzduotis
var phone = prompt("Įveskite savo phone modelis")
var phone = "iPhone"
var isIphoneUser = "Boolean"

switch("phone"){
case "iphone":
    alert("it's iphone")
case "Boolean":
     alert("it's Boolean") 
    break
    default: alert("phone not iphone and not Boolean")
    }