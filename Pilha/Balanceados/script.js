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
            let ultimo = pilha.pop(); 
        // Se o par não bater invalida
            if(char === ')'&& ultimo !== '(') { valido = false; break; }
            if (char === ']'&& ultimo !== '[') { valido = false; break; }
            if (char === '}'&& ultimo !== '{') { valido = false; break; }
        }
    }
    //verificando se a pilha terminou vazia
    if (!pilha.isEmpty()) valido = false;

    if (valido) {
        saida.innerText = "Código Válido!";
        saida.style.color = "green";
    } else {
        saida.innerText = "Erro de Sintaxe!";
        saida.style.color = "red";
    }
}

