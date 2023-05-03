function calculaIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value / 100;
    var sexo = document.getElementById("sexo").value;
  
    var imc = peso / (altura * altura);
    imc = imc.toFixed(1);
  
    trocaImagem(imc, sexo);
    mostraResultado(imc);
  }
  
  function trocaImagem(imc, sexo) {
    var imagem = document.querySelector("#imagem-imc");
  
    if (sexo === "M") {
      if (imc < 18.5) {
        imagem.src = "assets/m1.png";
      } else if (imc >= 18.5 && imc <= 24.9) {
        imagem.src = "assets/m2.png";
      } else if (imc >= 25 && imc <= 29.9) {
        imagem.src = "assets/m3.png";
      } else if (imc >= 30 && imc <= 39.9) {
        imagem.src = "assets/m4.png";
      } else {
        imagem.src = "assets/m5.png";
      }
    } else {
      if (imc < 18.5) {
        imagem.src = "assets/f1.png";
      } else if (imc >= 18.5 && imc <= 24.9) {
        imagem.src = "assets/f2.png";
      } else if (imc >= 25 && imc <= 29.9) {
        imagem.src = "assets/f3.png";
      } else if (imc >= 30 && imc <= 34.9) {
        imagem.src = "assets/f4.png";
      } else if (imc >= 35 && imc <= 39.9) {
        imagem.src = "assets/f5.png";
      } else {
        imagem.src = "assets/f6.png";
      }
    }
  }
  
  function mostraResultado(imc) {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Seu IMC é " + imc;
  
    // mostra a imagem
    var imagem = document.querySelector("#imagem-imc");
    imagem.style.display = "block";
  }
  
  // impede que a página seja recarregada após a submissão do formulário
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    calculaIMC();
  });