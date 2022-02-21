
function exe9(){

    // obter dados
    let basemaior = Number(document.getElementById("basemaior").value)
    let basemenor = Number(document.getElementById("basemenor").value)
    let altura = Number(document.getElementById("altura").value)

    //calcular resultado
    
    resultado = ((basemaior + basemenor) * altura / 2)

    //saida de dados
            document.getElementById("resultado").innerHTML = "O resultado da área do trapézio é de  " + resultado.toFixed(2)
    // duas casas depois da virgula
        }