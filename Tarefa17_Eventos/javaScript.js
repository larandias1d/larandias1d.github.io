function adicionar() {
    var item = document.getElementById("itens").value;
    var lista  = document.getElementById("lista").innerHTML;
    lista = lista +"<li>"+item+"</li>";
  
    document.getElementById("lista").innerHTML = lista;
  }