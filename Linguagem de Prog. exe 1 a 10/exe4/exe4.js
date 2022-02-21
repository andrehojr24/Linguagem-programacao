
function exe4(){

    // obter dados
    let nota1 = Number(document.getElementById("Nota1").value)
    let nota2 = Number(document.getElementById("Nota2").value)

    //calcular resultado
        let resultado = (nota1 * 2 + nota2 * 3) / (2+3)

    //saida de dados
    document.getElementById("resultado").innerHTML = "O resultado é " + resultado.toFixed(2)
    // duas casas depois da virgula


}