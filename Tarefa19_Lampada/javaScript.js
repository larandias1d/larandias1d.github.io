//Lara Nogueira Dias
var indexImg=1;
var arrayImagens = [ 
'./lampada_on.gif',
'./lampada_off.gif',
];

function trocar(){

  if(indexImg == arrayImagens.length) 
  {
    indexImg=0;
  }
  document.getElementById("lampada").src=arrayImagens[indexImg];
  indexImg++;

}