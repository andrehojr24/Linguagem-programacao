function exe7(){

    // obter dados
    let peso = Number(document.getElementById("peso").value)

    //calcular resultado
     emagrece = peso - (20 * peso) / 100
     engorda = peso + (15 * peso) / 100

    //saida de dados
            document.getElementById("emagrece").innerHTML = "O resultado se emagrecer 20% " + emagrece
            document.getElementById("engorda").innerHTML = "O resultado se engorda 15% " + engorda
    // duas casas depois da virgula
        }