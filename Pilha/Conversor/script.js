function converter() {
    //pega o valor do html
    let numero = parseInt(document.getElementById('numero').value);

    const pilha = new Stack();
    let resto;
    let binaryString = '';

    // faz o loop dividindo por 2 até o numero zerar
    while (numero > 0) {
        //pega o resto da divisao
        resto = parseInt(numero % 2);
        //guarda o resto na pilha empilha
        pilha.push(resto);
        //pega o número e divide por 2
        numero = parseInt(numero / 2);
    }
    while (!pilha.isEmpty()) {
        binaryString += pilha.pop().toString();
    }
    document.getElementById('resultado').innerText = binaryString;
}