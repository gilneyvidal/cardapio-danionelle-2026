// ===========================
// CARDÁPIO SORVETES DANIONELLE
// ===========================
// Regra de preço automática por item:
// - 1 a 4 unidades: precoVarejo
// - 5 ou mais unidades: precoAtacado
// Valores fictícios para apresentação.

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

// ===========================
// ESTADO DO CARRINHO
// ===========================
let carrinho = [];

// ===========================
// FUNÇÕES DE UTILIDADE
// ===========================
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

/**
 * Retorna o preço unitário correto de um produto
 * de acordo com a quantidade escolhida no carrinho.
 */
function obterPrecoUnitario(nome, quantidade) {
  const produto = encontrarProdutoPorNome(nome);
  if (!produto) return 0;

  if (quantidade >= 5) {
    return produto.precoAtacado;
  }
  return produto.precoVarejo;
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
      // Mostramos o preço de varejo como referência (público final)
      priceSpan.textContent = formatarValor(item.precoVarejo);

      const btnAdd = document.createElement("button");
      btnAdd.className = "btn-add";
      btnAdd.textContent = "+ Adicionar";
      btnAdd.addEventListener("click", () => adicionarAoCarrinho(item.nome));

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
// CARRINHO
// ===========================
function adicionarAoCarrinho(nome) {
  const existente = carrinho.find((item) => item.nome === nome);

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ nome, quantidade: 1 });
  }

  renderCarrinho();
}

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

    const precoUnitario = obterPrecoUnitario(item.nome, item.quantidade);
    const subtotal = precoUnitario * item.quantidade;
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
// MENSAGEM WHATSAPP
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

  let mensagem = `*Pedido - Sorvetes Danionelle*%0A%0A`;

  if (carrinho.length === 0) {
    mensagem += `_Carrinho vazio_%0A%0A`;
  } else {
    mensagem += `*Itens:*%0A`;
    let total = 0;

    carrinho.forEach((item) => {
      const precoUnitario = obterPrecoUnitario(item.nome, item.quantidade);
      const subtotal = precoUnitario * item.quantidade;
      total += subtotal;

      const tipoPreco = item.quantidade >= 5 ? "atacado" : "varejo";

      mensagem += `- ${item.quantidade}x ${item.nome} (${tipoPreco}) - ${formatarValor(
        subtotal
      )}%0A`;
    });

    mensagem += `%0A*Total:* ${formatarValor(total)}%0A%0A`;
  }

  mensagem += `*Nome:* ${nome || "Não informado"}%0A`;
  mensagem += `*Tipo de atendimento:* ${tipoAtendimento}%0A`;
  mensagem += `*Endereço / referência:* ${endereco}%0A`;
  mensagem += `*Pagamento:* ${pagamento}%0A`;

  if (observacoes) {
    mensagem += `%0A*Observações:*%0A${encodeURIComponent(observacoes)}%0A`;
  }

  return mensagem;
}

function enviarWhatsApp() {
  const mensagem = montarMensagemWhatsApp();
  const numeroWhatsApp = "551147464394"; // Número da loja (formato DDI+DDD+NUMERO, sem + ou espaços)
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  window.open(url, "_blank");
}

// ===========================
// RECIBO PARA IMPRESSÃO
// ===========================
function preencherDadosRecibo() {
  const nome = document.getElementById("nome")?.value?.trim() || "";
  const tipoAtendimento =
    document.getElementById("tipo-atendimento")?.value || "Não informado";
  const endereco =
    document.getElementById("endereco")?.value?.trim() || "Não informado";
  const pagamento =
    document.getElementById("pagamento")?.value || "Não informado";

  const reciboDataEl = document.getElementById("recibo-data");
  const reciboNomeEl = document.getElementById("recibo-nome");
  const reciboTipoAtendimentoEl = document.getElementById(
    "recibo-tipo-atendimento"
  );
  const reciboEnderecoEl = document.getElementById("recibo-endereco");
  const reciboPagamentoEl = document.getElementById("recibo-pagamento");
  const reciboItensListaEl = document.getElementById("recibo-itens-lista");
  const reciboTotalEl = document.getElementById("recibo-total");

  if (
    !reciboDataEl ||
    !reciboNomeEl ||
    !reciboTipoAtendimentoEl ||
    !reciboEnderecoEl ||
    !reciboPagamentoEl ||
    !reciboItensListaEl ||
    !reciboTotalEl
  ) {
    return;
  }

  const agora = new Date();
  const dataFormatada = agora.toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
  });
  reciboDataEl.textContent = `Data/Hora: ${dataFormatada}`;

  reciboNomeEl.textContent = nome || "Não informado";
  reciboTipoAtendimentoEl.textContent = tipoAtendimento;
  reciboEnderecoEl.textContent = endereco;
  reciboPagamentoEl.textContent = pagamento;

  reciboItensListaEl.innerHTML = "";

  let total = 0;

  carrinho.forEach((item) => {
    const precoUnitario = obterPrecoUnitario(item.nome, item.quantidade);
    const subtotal = precoUnitario * item.quantidade;
    total += subtotal;

    const tipoPreco = item.quantidade >= 5 ? "ATACADO" : "VAREJO";

    const linha = document.createElement("p");
    linha.textContent = `${item.quantidade}x ${item.nome} (${tipoPreco}) - ${formatarValor(
      subtotal
    )}`;
    reciboItensListaEl.appendChild(linha);
  });

  reciboTotalEl.textContent = formatarValor(total);
}

function imprimirRecibo() {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio. Adicione itens antes de imprimir o recibo.");
    return;
  }

  preencherDadosRecibo();
  window.print();
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

  const btnImprimir = document.getElementById("btn-imprimir");
  if (btnImprimir) {
    btnImprimir.addEventListener("click", (e) => {
      e.preventDefault();
      imprimirRecibo();
    });
  }
});
