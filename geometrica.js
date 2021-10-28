//funciones para calculo de areas y perimetros de figuras geometricas//
//Funciones para el cuadrado//

const valor = 1
const areaCuad = valor*valor

function onclickButtonAreaCuadro(){
    const unlado = document.getElementById("ladocuadrado")
    const ladoValor = unlado.value
    const areaTotalCuadro = calcularAreaCuadro(ladoValor)
    const resulAreaCuadro = document.getElementById("resultCuadro")
    resulAreaCuadro.innerText = areaTotalCuadro
}

function calcularAreaCuadro(valor){
    const areaCuad = parseFloat(valor)*parseFloat(valor)
    return "El area del cuadrado es: " + areaCuad + " cm^2"
}

function onclickButtonPerimetroCuadro(){
    const otrolado = document.getElementById("ladocuadrado")
    const ladoValor2 = otrolado.value
    const periTotalCuadro = calculaPerimetroCuadrado(ladoValor2)
    const resulPeriCuadro = document.getElementById("resultCuadro1")
    resulPeriCuadro.innerText = periTotalCuadro
}

function calculaPerimetroCuadrado(valor){
    const periCuad = parseFloat(valor)+parseFloat(valor)+parseFloat(valor)+parseFloat(valor)
    return "El perimetro del cuadrado es: " + periCuad + " cm"
}

//Funciones para el Triangulo//
const valorB = 1
const valorA = 1
const areaTrian = (valorB*valorA)/2

function onclickButtonAreaTriangulo(){
    const base = document.getElementById("trianguloBase")
    const baseValor = base.value
    const altura = document.getElementById("trianguloAltura")
    const alturaValor = altura.value
    const areaTotalTriangulo = calcularAreaTriangulo(baseValor,alturaValor)
    const resulAreaTriangulo = document.getElementById("resultTriangulo")
    resulAreaTriangulo.innerText = areaTotalTriangulo
}

function calcularAreaTriangulo(valorB,valorA){
    const areaTrian = parseFloat(valorB)*parseFloat(valorA) / 2
    return "El area del Triangulo es: " + areaTrian + " cm^2"
}

function onclickButtonPerimetroTriangulo(){
    const base = document.getElementById("trianguloBase")
    const baseValor = base.value

    const lado1 = document.getElementById("trianguloLado1")
    const lado1Valor = lado1.value

    const lado2 = document.getElementById("trianguloLado2")
    const lado2Valor = lado2.value

    const periTotalTriangulo = calcularPeriTriangulo(baseValor,lado1Valor,lado2Valor)
    const resulPeriTriangulo = document.getElementById("resultTriangulo1")
    resulPeriTriangulo.innerText = periTotalTriangulo
}

function calcularPeriTriangulo(valorB,valorL1,valorL2){
    const areaTrian = parseFloat(valorB)+parseFloat(valorL1)+parseFloat(valorL2)
    return "El perimetro del Triangulo es: " + areaTrian + " cm"
}

//Funciones para el Cirulo//

const radio = 1
const areaCir = 3.14*(radio*radio)

function onclickButtonAreaCirculo(){
    const unradio = document.getElementById("circuloradio")
    const radioValor = unradio.value
    const areaTotalCirculo = calcularAreaCirculo(radioValor)
    const resulAreaCirculo = document.getElementById("resultCirculo")
    resulAreaCirculo.innerText = areaTotalCirculo
}

function calcularAreaCirculo(radio){
    const areaCir = 3.14 * (parseFloat(radio)*parseFloat(radio))
    return "El area del circulo es: " + areaCir + " cm^2"
}

function onclickButtonPerimetroCirculo(){
    const otroradio = document.getElementById("circuloradio")
    const radioValor2 = otroradio.value
    const periTotalCirculo = calculaPerimetroCirculo(radioValor2)
    const resulPeriCirculo = document.getElementById("resultCirculo1")
    resulPeriCirculo.innerText = periTotalCirculo
}

function calculaPerimetroCirculo(radio){
    const periCir = 2 * 3.14 * parseFloat(radio)
    return "El perimetro del circulo es: " + periCir + " cm"
}



