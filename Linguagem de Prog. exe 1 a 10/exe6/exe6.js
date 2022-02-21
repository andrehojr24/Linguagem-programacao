function calcular(){
    // obter dados
    let salario = Number(document.getElementById("salario").value)
    let vendas = Number(document.getElementById("vendas").value)
    let percentagem = Number(document.getElementById("percentagem").value)
    //calcular comissão e total
    let comissao = vendas*percentagem/100
    let total = salario + comissao
    //saida de dados
    document.getElementById("total").innerHTML = "O valor da comissao é " + comissao + "<br> E o valor total é " + total


}