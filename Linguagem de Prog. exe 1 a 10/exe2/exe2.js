
function exe2(){

    // obter dados
    let numero1 = Number(document.getElementById("Numero1").value)
    let numero2 = Number(document.getElementById("Numero2").value)
    let numero3 = Number(document.getElementById("Numero3").value)

    //calcular resultado
        let resultado = numero1 * numero2 * numero3

    //saida de dados
    document.getElementById("resultado").innerHTML = "O resultado é " + resultado.toFixed(2)
    // duas casas depois da virgula


}