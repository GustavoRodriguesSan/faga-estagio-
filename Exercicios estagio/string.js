function verificarLetraA() {
    const entrada = prompt("Informe uma string: ");
    const letraA = entrada.toLowerCase().split('a').length - 1;
  
    if (letraA > 0) {
      console.log(`A letra 'a' ocorre ${letraA} vezes na string.`);
    } else {
      console.log("A letra 'a' não ocorre na string.");
    }
  }
  
  verificarLetraA();