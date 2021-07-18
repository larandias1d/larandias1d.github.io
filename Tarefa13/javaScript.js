var numero = prompt("Digite um número: ");

function fatorial(num) {

  var fatorial = numero;
  for (var i = 1; i < numero; i++) {
      fatorial *= i;
  }

  alert("O fatorial de " + num + " é " + fatorial);
}

fatorial (numero);