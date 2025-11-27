function verificar() {
    let texto = document.getElementById('texto').value;
    let saida = document.getElementById('resultado');
    let pilha = new Stack();
    let valido = true;

    for (let i = 0; i<texto.length; i++) {
        let char = texto[i];

        // Se abrir empilha
        if (char === '(' ||char === '[' ||char === '{') {
            pilha.push(char);
        }
         // se fechar verifica
         else if (char === ')'||char === ']'||char === '}') {
            if (pilha.isEmpty()) {valido = false; break;}
            let ultimo
