
function exe8(){

    // obter dados
    let peso = Number(document.getElementById("peso").value)

    //calcular resultado
     
    resultado = peso * 1000

    //saida de dados
            document.getElementById("resultado").innerHTML = "O resultado é " + resultado.toFixed(2)
    // duas casas depois da virgula
        }