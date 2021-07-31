/*Lara Nogueira Dias*/

var DateDiff = {

    inDays: function (d1, d2) {
        var s = d2.getTime();
        var e = d1.getTime();

        return parseInt((s - e) / (24 * 3600 * 1000));
    },

}

function valorQuarto(quarto) {
    var diaria = 0;


    if (quarto === 'Single') {
        diaria = 139;

    }
    else if (quarto === 'Double') {
        diaria = 220;

    }
    else if (quarto === 'Triplo') {
        diaria = 340;

    }

    return (diaria);
}



function calcularTotal(entrada, saida, quarto) {
    var e = new Date(entrada);
    var s = new Date(saida);
    var nome = (document.getElementById("nome").value);
    var telefone = (document.getElementById("telefone").value);
    var quarto = quarto;
    var tempo = DateDiff.inDays(e, s);
    var qtdeCrianca = parseFloat(document.getElementById("qtde").value);
    var valorCrianca = 30 * qtdeCrianca;
    var preco = (valorQuarto(quarto) + valorCrianca) * tempo; 

    if (quarto === 'Single' && qtdeCrianca > 3) { 
        alert('Só é permitido no máximo 4 hospedes')
    } else if (quarto === 'Double' && qtdeCrianca >> 2) {
        alert('Só é permitido no máximo 4 hospedes')

    }
    else if (quarto === 'Triplo' && qtdeCrianca > 1) {
        alert('Só é permitido no máximo 4 hospedes')

    } else {

        alert(' Preço final da Hospedagem: ' + preco);
    }
}