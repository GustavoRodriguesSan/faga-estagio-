function isFibonacci(n) {
    let n1 = 0;
    let n2 = 1;
    let fibSequence = [n1, n2];
  
    while (n2 < n) {
      let next = n1 + n2;
      fibSequence.push(next);
      n1 = n2;
      n2 = next;
    }
  
    return fibSequence.includes(n) ? `O número ${n} pertence à sequência de Fibonacci.` : `O número ${n} não pertence à sequência de Fibonacci.`;
  }
  
  const userInput = parseInt(prompt("Informe um número: "));
  console.log(isFibonacci(userInput));