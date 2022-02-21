function exe3(){

    // obter dados
    let numero1 = Number(document.getElementById("Numero1").value)
    let numero2 = Number(document.getElementById("Numero2").value)

    //calcular resultado
    if (numero2 == 0){ 
        document.getElementById("resultado").innerHTML = " Digite outro valor maior !"
    }
        else {
             let resultado = numero1 / numero2

    //saida de dados
            document.getElementById("resultado").innerHTML = "O resultado é " + resultado.toFixed(2)
    // duas casas depois da virgula
        }

}