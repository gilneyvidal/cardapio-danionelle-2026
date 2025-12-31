// ===========================
// CARDÁPIO SORVETES DANIONELLE
// ===========================

const menuData = [
  {
    categoria: "Picolés DanMilk",
    itens: [
      { nome: "Abacate", precoVarejo: 3.5, precoAtacado: 3.0 },
      { nome: "Amendoim", precoVarejo: 3.5, precoAtacado: 3.0 },
      { nome: "Banana", precoVarejo: 3.5, precoAtacado: 3.0 },
      { nome: "Chocolate", precoVarejo: 3.5, precoAtacado: 3.0 },
      { nome: "Coco Branco", precoVarejo: 3.5, precoAtacado: 3.0 },
      { nome: "Morango", precoVarejo: 3.5, precoAtacado: 3.0 }
    ]
  },
  {
    categoria: "Picolés Frutelle",
    itens: [
      { nome: "Abacaxi", precoVarejo: 3.0, precoAtacado: 2.6 },
      { nome: "Limão", precoVarejo: 3.0, precoAtacado: 2.6 },
      { nome: "Uva", precoVarejo: 3.0, precoAtacado: 2.6 },
      { nome: "Maracujá", precoVarejo: 3.0, precoAtacado: 2.6 }
    ]
  },
  {
    categoria: "Picolés Especiais",
    itens: [
      { nome: "Chococo", precoVarejo: 4.5, precoAtacado: 4.0 },
      { nome: "Romeu e Julieta", precoVarejo: 4.5, precoAtacado: 4.0 },
      { nome: "Torta de Limão", precoVarejo: 4.5, precoAtacado: 4.0 }
    ]
  },
  {
    categoria: "Copinhos 250 ml (sorvete)",
    itens: [
      { nome: "Chocolate", precoVarejo: 4.5, precoAtacado: 4.0 },
      { nome: "Morango", precoVarejo: 4.5, precoAtacado: 4.0 },
      { nome: "Napolitano", precoVarejo: 4.5, precoAtacado: 4.0 }
    ]
  },
  {
    categoria: "Açaí 220 ml",
    itens: [
      { nome: "Açaí c/ Granola 220 ml", precoVarejo: 8.0, precoAtacado: 7.0 }
    ]
  },
  {
    categoria: "Potes 1,5 L",
    itens: [
      { nome: "Chocolate 1,5 L", precoVarejo: 30.0, precoAtacado: 26.0 },
      { nome: "Morango 1,5 L", precoVarejo: 30.0, precoAtacado: 26.0 },
      { nome: "Napolitano 1,5 L", precoVarejo: 30.0, precoAtacado: 26.0 },
      { nome: "Açaí 1,5 L", precoVarejo: 35.0, precoAtacado: 30.0 }
    ]
  },
  {
    categoria: "Caixas de Picolés (atacado)",
    itens: [
      {
        nome: "Caixa DanMilk (25 un.)",
        precoVarejo: 80.0,
        precoAtacado: 72.0
      },
      {
        nome: "Caixa Frutelle (25 un.)",
        precoVarejo: 75.0,
        precoAtacado: 68.0
      }
    ]
  }
];

let carrinho = [];

function formatarValor(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function encontrarProdutoPorNome(nome) {
  for (const categoria of menuData) {
    const encontrado = categoria.itens.find((item) => item.nome === nome);
    if (encontrado) return encontrado;
  }
  return null;
}

function obterPrecoUnitario(nome, quantidade) {
  const produto = encontrarProdutoPorNome(nome);
  if (!produto) return 0;
  return quantidade >= 5 ? produto.precoAtacado : produto.precoVarejo;
}

function renderMenu() {
  const menuContainer = document.getElementById("menu-container");
  if (!menuContainer) return;
  menuContainer.innerHTML = "";

  menuData.forEach((categoriaObj) => {
    const section = document.createElement("section");
    section.className = "menu-section";
    const h2 = document.createElement("h2");
    h2.textContent = categoriaObj.categoria;
    section.appendChild(h2);

    const listDiv = document.createElement("div");
    listDiv.className = "item-list";

    categoriaObj.itens.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";
      itemDiv.innerHTML = `
        <span class="item-name">${item.nome}</span>
        <span class="item-price">${formatarValor(item.precoVarejo)}</span>
        <button class="btn-add" onclick="adicionarAoCarrinho('${item.nome}')">+ Adicionar</button>
      `;
      listDiv.appendChild(itemDiv);
    });
    section.appendChild(listDiv);
    menuContainer.appendChild(section);
  });
}

window.adicionarAoCarrinho = function(nome) {
  const existente = carrinho.find((item) => item.nome === nome);
  if (existente) { existente.quantidade += 1; } 
  else { carrinho.push({ nome, quantidade: 1 }); }
  renderCarrinho();
};

function atualizarQuantidade(nome, delta) {
  carrinho = carrinho
    .map((item) => item.nome === nome ? { ...item, quantidade: item.quantidade + delta } : item)
    .filter((item) => item.quantidade > 0);
  renderCarrinho();
}

function renderCarrinho() {
  const container = document.getElementById("carrinho-container");
  const totalSpan = document.getElementById("total");
  if (!container || !totalSpan) return;
  container.innerHTML = "";
  let total = 0;

  carrinho.forEach((item) => {
    const precoUnitario = obterPrecoUnitario(item.nome, item.quantidade);
    const subtotal = precoUnitario * item.quantidade;
    total += subtotal;

    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <span class="cart-item-name">${item.quantidade}x ${item.nome}</span>
      <div class="cart-controls">
        <button class="cart-btn" onclick="atualizarQuantidade('${item.nome}', -1)">−</button>
        <span class="cart-qty">${item.quantidade}</span>
        <button class="cart-btn" onclick="atualizarQuantidade('${item.nome}', 1)">+</button>
      </div>
      <span class="cart-subtotal">${formatarValor(subtotal)}</span>
    `;
    container.appendChild(row);
  });
  totalSpan.textContent = formatarValor(total);
}

window.atualizarQuantidade = atualizarQuantidade;

function montarMensagemWhatsApp() {
  const nome = document.getElementById("nome")?.value || "Não informado";
  const tipo = document.getElementById("tipo-atendimento")?.value;
  const endereco = document.getElementById("endereco")?.value || "Não informado";
  const pagamento = document.getElementById("pagamento")?.value;
  const obs = document.getElementById("observacoes")?.value;

  let msg = `*Pedido - Sorvetes Danionelle*%0A%0A*Itens:*%0A`;
  let total = 0;
  carrinho.forEach(item => {
    const preco = obterPrecoUnitario(item.nome, item.quantidade);
    const sub = preco * item.quantidade;
    total += sub;
    msg += `- ${item.quantidade}x ${item.nome} (${item.quantidade >= 5 ? 'Atacado' : 'Varejo'}) - ${formatarValor(sub)}%0A`;
  });
  msg += `%0A*Total:* ${formatarValor(total)}%0A%0A*Cliente:* ${nome}%0A*Tipo:* ${tipo}%0A*Endereço:* ${endereco}%0A*Pagamento:* ${pagamento}`;
  if(obs) msg += `%0A*Obs:* ${encodeURIComponent(obs)}`;
  return msg;
}

function imprimirRecibo() {
  if (carrinho.length === 0) return alert("Carrinho vazio!");

  const agora = new Date();
  document.getElementById("recibo-data").textContent = "Data: " + agora.toLocaleString();
  document.getElementById("recibo-id").textContent = "Pedido: #" + agora.getTime().toString().slice(-6);
  document.getElementById("recibo-nome").textContent = document.getElementById("nome").value || "Consumidor";
  document.getElementById("recibo-tipo-atendimento").textContent = document.getElementById("tipo-atendimento").value;
  document.getElementById("recibo-pagamento").textContent = document.getElementById("pagamento").value;
  document.getElementById("recibo-endereco").textContent = document.getElementById("endereco").value || "N/A";

  const lista = document.getElementById("recibo-itens-lista");
  lista.innerHTML = "";
  let total = 0;
  carrinho.forEach(item => {
    const preco = obterPrecoUnitario(item.nome, item.quantidade);
    const sub = preco * item.quantidade;
    total += sub;
    const p = document.createElement("p");
    p.textContent = `${item.quantidade}x ${item.nome.slice(0,18)}.. - ${formatarValor(sub)}`;
    lista.appendChild(p);
  });
  document.getElementById("recibo-total").textContent = formatarValor(total);
  window.print();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  document.getElementById("btn-enviar").onclick = () => {
    window.open(`https://wa.me/551147464394?text=${montarMensagemWhatsApp()}`, "_blank");
  };
  document.getElementById("btn-imprimir").onclick = imprimirRecibo;
});
