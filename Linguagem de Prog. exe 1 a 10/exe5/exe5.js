
function exe5(){

    // obter dados
    let produto = Number(document.getElementById("Produto").value)
    let desconto = Number(document.getElementById("desconto").value)

    //calcular resultado
         desconto =  desconto / 100 * produto
         resultado = produto - desconto


    //saida de dados
    document.getElementById("resultado").innerHTML = "O resultado é " + resultado.toFixed(2)
    // duas casas depois da virgula


}