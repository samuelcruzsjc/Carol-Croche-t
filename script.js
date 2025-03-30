// Função para adicionar produtos ao carrinho


let carrinho = [];

// Função para atualizar a exibição do carrinho na página
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");
    
    listaCarrinho.innerHTML = ""; // Limpa a lista antes de atualizar
    let total = 0;

    carrinho.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        
        // Botão para remover item
        let btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener("click", () => removerDoCarrinho(index));

        li.appendChild(btnRemover);
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    totalCarrinho.textContent = total.toFixed(2);
    atualizarTotalItens();  // Atualiza o total de itens no cabeçalho
}

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho(); // Atualiza o carrinho na tela
}

// Função para remover itens do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho(); // Atualiza a exibição após remover
}

function atualizarTotalItens() {
    const totalItens = carrinho.length;
    document.getElementById("total-itens").textContent = totalItens;
}


// Evento para limpar o carrinho
document.getElementById("limpar-carrinho").addEventListener("click", () => {
    carrinho = [];
    atualizarCarrinho();
});

// Adiciona a função no botão de cada produto
document.querySelectorAll('.produto button').forEach((btn, index) => {
    const nomeProduto = document.querySelectorAll('.produto h2')[index].textContent;
    const precoProduto = parseFloat(document.querySelectorAll('.produto span')[index].textContent.replace('R$', '').trim());
    
    btn.addEventListener('click', function() {
        adicionarAoCarrinho(nomeProduto, precoProduto);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se estamos na página de checkout
    const formCheckout = document.getElementById("checkout-form");

    if (formCheckout) {
        // Quando o formulário for enviado
        formCheckout.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio tradicional do formulário

            // Coleta os dados do formulário
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const endereco = document.getElementById("endereco").value;
            const pagamento = document.getElementById("pagamento").value;

            // Exibe uma mensagem de sucesso (simulando a finalização da compra)
            alert(`Compra finalizada com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nEndereço: ${endereco}\nForma de Pagamento: ${pagamento}`);
            
            // Reseta o formulário após a finalização
            formCheckout.reset();
        });
    } else {
        console.error("Formulário de checkout não encontrado!");
    }
});

