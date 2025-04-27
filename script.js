function converter() {
    const valorDolar = document.getElementById('valor').value
    const numero = parseFloat(valorDolar)
    const umDolar = 0.92
    const resultado = numero * umDolar
    document.getElementById('resultado').innerText = "€"+resultado 
}
document.getElementById('conversor').addEventListener('click', converter)