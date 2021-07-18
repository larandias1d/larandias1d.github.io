var verifyPalindromo = prompt("Digite uma palavra: ");

function isPalindromo(l){
  x = l.split("").reverse().join("");
    if (x === l){
      alert("É um palindromo");
    }  
    else{
      alert("Não é um palindromo");
    }
}
isPalindromo(verifyPalindromo);