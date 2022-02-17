let x=parseInt(prompt(`Digite o valor da variável x`))
let y=parseInt(prompt('Digite o valor da variável y'))
alert(`Valor de x =${x} e o valor de y=${y}`)
let z=x
x=y
y=z
alert(`Valor de x=${x} e o valor de y=${y}`)