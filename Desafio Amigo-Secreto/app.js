let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector("input");
    let nome = input.value.trim();

    if (!nome) {
        alert("Campo vazio! Você deve digitar um nome.");
        return;
    }

    amigos.push(nome); 
    alert(`${nome} foi adicionado com sucesso!`);
    console.log(amigos);
    
    limparCampo();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos primeiro.");
        return;
    }

    const index_aleatorio = Math.floor(Math.random() * amigos.length);
    alert(`Amigo sorteado: ${amigos[index_aleatorio]}`);
}

function limparCampo() {
    document.querySelector("input").value = "";
}

function limparLista() {
    amigos = [];
    alert("A lista de amigos foi limpa!");
    console.log("Lista apagada:", amigos);
}

function mostrarLista() {
    if (amigos.length === 0) {
        alert("A lista está vazia!");
    } else {
        alert("Lista de amigos:\n" + amigos.join(", "));
    }
}