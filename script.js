// script.js
// ===========================
// CARDÁPIO SORVETES DANIONELLE
// ===========================
// ATENÇÃO: todos os preços abaixo são EXEMPLOS.
// Ajuste conforme a tabela oficial da sorveteria.

const menuData = [
  {
    categoria: "Picolés DanMilk",
    itens: [
      { nome: "Abacate", preco: 3.5 },
      { nome: "Amendoim", preco: 3.5 },
      { nome: "Banana", preco: 3.5 },
      { nome: "Beijinho", preco: 3.5 },
      { nome: "Blue Ice", preco: 3.5 },
      { nome: "Chocolate", preco: 3.5 },
      { nome: "Chocolate Branco", preco: 3.5 },
      { nome: "Coco Branco", preco: 3.5 },
      { nome: "Coco Queimado", preco: 3.5 },
      { nome: "Doce de Leite", preco: 3.5 },
      { nome: "Flocos", preco: 3.5 },
      { nome: "Leite Condensado", preco: 3.5 },
      { nome: "Maçã Verde", preco: 3.5 },
      { nome: "Menta c/ Flocos", preco: 3.5 },
      { nome: "Milho Verde", preco: 3.5 },
      { nome: "Mini Saia", preco: 3.5 },
      { nome: "Morango", preco: 3.5 },
      { nome: "Queijo", preco: 3.5 }
    ]
  },
  {
    categoria: "Picolés Frutelle",
    itens: [
      { nome: "Abacaxi", preco: 3.5 },
      { nome: "Abacaxi ao Vinho", preco: 3.5 },
      { nome: "Açaí", preco: 3.5 },
      { nome: "Caju", preco: 3.5 },
      { nome: "Cupuaçu", preco: 3.5 },
      { nome: "Goiaba", preco: 3.5 },
      { nome: "Groselha", preco: 3.5 },
      { nome: "Kiwi", preco: 3.5 },
      { nome: "Limão", preco: 3.5 },
      { nome: "Manga", preco: 3.5 },
      { nome: "Maracujá", preco: 3.5 },
      { nome: "Melancia", preco: 3.5 },
      { nome: "Morango", preco: 3.5 },
      { nome: "Tangerina", preco: 3.5 },
      { nome: "Uva", preco: 3.5 }
    ]
  },
  {
    categoria: "Picolés Especiais",
    itens: [
      { nome: "Chococo", preco: 4.5 },
      { nome: "Romeu e Julieta", preco: 4.5 },
      { nome: "Torta de Limão", preco: 4.5 }
    ]
  },
  {
    categoria: "Picolés Eski",
    itens: [
      { nome: "EskiChantilly", preco: 5.0 },
      { nome: "EskiChocolate", preco: 5.0 },
      { nome: "EskiCoco", preco: 5.0 },
      { nome: "EskiLacta", preco: 5.0 },
      { nome: "EskiMaracujá (Branco)", preco: 5.0 },
      { nome: "EskiMaracujá (Preto)", preco: 5.0 },
      { nome: "EskiMorango", preco: 5.0 }
    ]
  },
  {
    categoria: "Copinhos 250 ml (sorvete)",
    itens: [
      { nome: "Abacaxi", preco: 4.5 },
      { nome: "Abacaxi ao Vinho", preco: 4.5 },
      { nome: "Beijinho", preco: 4.5 },
      { nome: "Blue Ice", preco: 4.5 },
      { nome: "Brigadeiro", preco: 4.5 },
      { nome: "Chantilly c/ Amarena", preco: 4.5 },
      { nome: "Chocolate", preco: 4.5 },
      { nome: "Coco Branco", preco: 4.5 },
      { nome: "Creme", preco: 4.5 },
      { nome: "Flocos", preco: 4.5 },
      { nome: "Lacta", preco: 4.5 },
      { nome: "Leite Condensado", preco: 4.5 },
      { nome: "Leitinho Trufado", preco: 4.5 },
      { nome: "Limão", preco: 4.5 },
      { nome: "Maracujá", preco: 4.5 },
      { nome: "Menta c/ Flocos", preco: 4.5 },
      { nome: "Milho Verde", preco: 4.5 },
      { nome: "Morango", preco: 4.5 },
      { nome: "Napolitano", preco: 4.5 },
      { nome: "Passas ao Rum", preco: 4.5 },
      { nome: "Pistache", preco: 4.5 },
      { nome: "Sensação", preco: 4.5 }
    ]
  },
  {
    categoria: "Açaí 220 ml",
    itens: [
      { nome: "Açaí 220 ml c/ Granola", preco: 8.0 }
    ]
  },
  {
    categoria: "Potes 1,5 L",
    itens: [
      { nome: "Açaí", preco: 30.0 },
      { nome: "Açaí com Kinder", preco: 32.0 },
      { nome: "Abacaxi ao Vinho", preco: 28.0 },
      { nome: "Abóbora c/ Coco", preco: 28.0 },
      { nome: "Bombom", preco: 30.0 },
      { nome: "Brigadeiro", preco: 30.0 },
      { nome: "Cereja", preco: 30.0 },
      { nome: "Chantilly c/ Amarena", preco: 30.0 },
      { nome: "Chiclets", preco: 30.0 },
      { nome: "Chocolate", preco: 28.0 },
      { nome: "Chocotone", preco: 30.0 },
      { nome: "Coco Branco", preco: 28.0 },
      { nome: "Creme", preco: 28.0 },
      { nome: "Cupuaçu", preco: 28.0 },
      { nome: "Flocos", preco: 28.0 },
      { nome: "Floresta Negra", preco: 32.0 },
      { nome: "Kinder Bueno", preco: 32.0 },
      { nome: "Lacta", preco: 30.0 },
      { nome: "Leitinho", preco: 28.0 },
      { nome: "Leitinho Trufado", preco: 30.0 },
      { nome: "Maracujá", preco: 28.0 },
      { nome: "Morango", preco: 28.0 },
      { nome: "Napolitano", preco: 28.0 },
      { nome: "Raffaello", preco: 32.0 },
      { nome: "Sensação", preco: 30.0 },
      { nome: "Unicórnio", preco: 32.0 }
    ]
  },
  {
    categoria: "Caixas de Sorvete (atacado)",
    itens: [
      {
        nome: "Caixa de Picolé DanMilk (25 un.)",
        preco: 70.0
      },
      {
        nome: "Caixa de Picolé Frutelle (25 un.)",
        preco: 70.0
      },
      {
        nome: "Caixa sortida (consultar sabores)",
        preco: 75.0
      }
    ]
  }
];

// ===========================
// ESTADO DO CARRINHO
// ===========================
let carrinho = [];

// ===========================
// FUNÇÃO: FORMATAR VALOR
// ===========================
function formatarValor(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

// ===========================
// RENDERIZAR MENU
// ===========================
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

      const nameSpan = document.createElement("span");
      nameSpan.className = "item-name";
      nameSpan.textContent = item.nome;

      const priceSpan = document.createElement("span");
      priceSpan.className = "item-price";
      priceSpan.textContent = formatarValor(item.preco);

      const btnAdd = document.createElement("button");
      btnAdd.className = "btn-add";
      btnAdd.textContent = "+ Adicionar";
      btnAdd.addEventListener("click", () =>
        adicionarAoCarrinho(item.nome, item.preco)
      );

      itemDiv.appendChild(nameSpan);
      itemDiv.appendChild(priceSpan);
      itemDiv.appendChild(btnAdd);
      listDiv.appendChild(itemDiv);
    });

    section.appendChild(listDiv);
    menuContainer.appendChild(section);
  });
}

// ===========================
// ADICIONAR AO CARRINHO
// ===========================
function adicionarAoCarrinho(nome, preco) {
  const existente = carrinho.find((item) => item.nome === nome);

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }

  renderCarrinho();
}

// ===========================
// ATUALIZAR QUANTIDADE
// ===========================
function atualizarQuantidade(nome, delta) {
  carrinho = carrinho
    .map((item) =>
      item.nome === nome
        ? { ...item, quantidade: item.quantidade + delta }
        : item
    )
    .filter((item) => item.quantidade > 0);

  renderCarrinho();
}

// ===========================
// RENDERIZAR CARRINHO
// ===========================
function renderCarrinho() {
  const container = document.getElementById("carrinho-container");
  const totalSpan = document.getElementById("total");
  if (!container || !totalSpan) return;

  container.innerHTML = "";

  let total = 0;

  carrinho.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-row";

    const nameSpan = document.createElement("span");
    nameSpan.className = "cart-item-name";
    nameSpan.textContent = `${item.quantidade}x ${item.nome}`;

    const controlsDiv = document.createElement("div");
    controlsDiv.className = "cart-controls";

    const btnMinus = document.createElement("button");
    btnMinus.className = "cart-btn";
    btnMinus.textContent = "−";
    btnMinus.addEventListener("click", () =>
      atualizarQuantidade(item.nome, -1)
    );

    const qtySpan = document.createElement("span");
    qtySpan.className = "cart-qty";
    qtySpan.textContent = item.quantidade;

    const btnPlus = document.createElement("button");
    btnPlus.className = "cart-btn";
    btnPlus.textContent = "+";
    btnPlus.addEventListener("click", () =>
      atualizarQuantidade(item.nome, 1)
    );

    controlsDiv.appendChild(btnMinus);
    controlsDiv.appendChild(qtySpan);
    controlsDiv.appendChild(btnPlus);

    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    const subtotalSpan = document.createElement("span");
    subtotalSpan.className = "cart-subtotal";
    subtotalSpan.textContent = formatarValor(subtotal);

    row.appendChild(nameSpan);
    row.appendChild(controlsDiv);
    row.appendChild(subtotalSpan);
    container.appendChild(row);
  });

  totalSpan.textContent = formatarValor(total);
}

// ===========================
// MONTAR MENSAGEM WHATSAPP
// ===========================
function montarMensagemWhatsApp() {
  const nome = document.getElementById("nome")?.value?.trim() || "";
  const tipoAtendimento =
    document.getElementById("tipo-atendimento")?.value || "Não informado";
  const endereco =
    document.getElementById("endereco")?.value?.trim() || "Não informado";
  const pagamento =
    document.getElementById("pagamento")?.value || "Não informado";
  const observacoes =
    document.getElementById("observacoes")?.value?.trim() || "";

  let mensagem = `*Pedido - Sorvetes Danionelle*\n\n`;

  if (carrinho.length === 0) {
    mensagem += "_(Carrinho vazio)_\n\n";
  } else {
    mensagem += "*Itens:*\n";
    let total = 0;

    carrinho.forEach((item) => {
      const subtotal = item.preco * item.quantidade;
      total += subtotal;
      mensagem += `- ${item.quantidade}x ${item.nome} - ${formatarValor(
        subtotal
      )}\n`;
    });

    mensagem += `\n*Total:* ${formatarValor(total)}\n\n`;
  }

  mensagem += `*Nome:* ${nome || "Não informado"}\n`;
  mensagem += `*Tipo de atendimento:* ${tipoAtendimento}\n`;
  mensagem += `*Endereço / referência:* ${endereco}\n`;
  mensagem += `*Pagamento:* ${pagamento}\n`;

  if (observacoes) {
    mensagem += `\n*Observações:*\n${observacoes}\n`;
  }

  return encodeURIComponent(mensagem);
}

// ===========================
// ENVIAR WHATSAPP
// ===========================
function enviarWhatsApp() {
  const mensagemCodificada = montarMensagemWhatsApp();

  // IMPORTANTE: confirme com o cliente qual número tem WhatsApp.
  // Abaixo usei o telefone (11) 4746-4394 como exemplo.
  const numeroWhatsApp = "551147464394";

  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
  window.open(url, "_blank");
}

// ===========================
// INICIALIZAÇÃO
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderCarrinho();

  const btnEnviar = document.getElementById("btn-enviar");
  if (btnEnviar) {
    btnEnviar.addEventListener("click", (e) => {
      e.preventDefault();
      enviarWhatsApp();
    });
  }
});
