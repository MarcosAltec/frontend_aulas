var num = 4, fatorado = 0, resultado = 1

while (num > 0) {
    fatorado = num * (num-1)
    
    fatorado = fatorado * fatorado
    console.log(fatorado)
    num -= 1
}


console.log(resultado)

console.log("FIM")