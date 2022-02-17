

let a = parseInt(prompt(`Digite o valor do lado 1 do triângulo`))
let b = parseInt(prompt(`Digite o valor do lado 2 do triângulo`))
let c = parseInt(prompt('Digite o valor do lado 3 do triângulo'))
if (a == b && b== c) {
    alert("Esse triângulo é equilátero");
} else if (a == b && b!= c || a==c && a!=b || b==c && c!=a) {5
    alert("Esse triângulo é isósceles");
} else if (a != b && b!= c) {
    alert("Esse triângulo é escaleno");
}


