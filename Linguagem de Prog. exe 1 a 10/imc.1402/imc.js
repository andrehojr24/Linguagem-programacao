function calculaImc(){
    // recupera os dados digitados pelo usuário
    // JS é não tipado => não se define o tipo da variável
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    // calcular o IMC
    let imc = (peso / (altura * altura))
    // mostra o resultado para o usuário
    document.getElementById("imc").innerHTML = "O imc é" + imc.toFixed(2) // duas casas depois da vírgula
    if (imc < 18.5){
        document.getElementById("tipo").innerHTML= "magreza"
    }
    else if ((imc >= 18.5) && (imc < 25)){
        document.getElementById("tipo").innerHTML= "normal"
        
    } else if ((imc >=25) && (imc < 30)){
        document.getElementById("tipo").innerHTML= "sobrepeso"
    }
    else if ((imc >= 30) && (imc < 40)){
        alert("Obesidade")
    }
    else {
        alert("Obesidade grave")
    }
}