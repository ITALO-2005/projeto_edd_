function converter() {
    let numero = parseInt(document.getElementById('numero').value);
    const pilha = new Stack();
    let resto;
    let stringBinaria = '';

    if (!numero) {
        alert("digite um numero valido");
        return;
    }