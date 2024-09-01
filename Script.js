let products = [];
// Array para armazenar os produtos

const productTableBody = document.querySelector("#productTable tbody");
// Seleciona o corpo da tabela

const productForm = document.getElementById("productForm");
// Seleciona o formulário

function renderTable() {
    productTableBody.innerHTML = "";
    // Limpa a tabela

    products.forEach((product, index) => {
        const row = document.createElement("tr");
        // Cria uma nova linha

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.code}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>
                <button onclick="editProduct(${index})">Editar</button>
                <button onclick="deleteProduct(${index})">Deletar</button>
            </td>
        `;
        // Preenche a linha com os dados do produto

        productTableBody.appendChild(row);
        // Adiciona a linha na tabela
    });
}

productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Evita o envio padrão do formulário

    const name = document.getElementById("productName").value;
    // Pega o nome do produto

    const id = document.getElementById("productId").value;
    // Pega o id do produto

    const code = document.getElementById("productCode").value;
    // Pega o código do produto

    const description = document.getElementById("productDescription").value;
    // Pega a descrição do produto

    const price = document.getElementById("productPrice").value;
    // Pega o preço do produto

    const product = { name, code, description, price };
    // Cria um objeto com os dados do produto

    if (id) {
        products[id] = product;
        // Se tem ID atualiza o produto
    } else {
        products.push(product);
        // Se não tem ID adiciona um novo produto
    }

    renderTable();
    // Atualiza a tabela

    productForm.reset();
    // Reseta o formulário
});

function editProduct(index) {
    const product = products[index];
    // Pega o produto pelo índice

    document.getElementById("productId").value = index;
    // Coloca o id no campo hidden

    document.getElementById("productCode").value = product.code;
    // Coloca o código no formulário

    document.getElementById("productDescription").value = product.description;
    // Coloca a descrição no formulário

    document.getElementById("productPrice").value = product.price;
    // Coloca o preço no formulário
}

function deleteProduct(index) {
    products.splice(index, 1);
    // Remove o produto do array

    renderTable();
    // Atualiza a tabela
}

renderTable();
// Mostra a tabela no início
