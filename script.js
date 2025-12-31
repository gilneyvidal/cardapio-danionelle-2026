const menuData = [
  {
    categoria: "Picolés DanMilk",
    itens: [
      { nome: "Abacate", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Amendoim", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Banana", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Beijinho", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Blue Ice", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Chocolate", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Chocolate Branco", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Coco Branco", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Coco Queimado", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Doce de Leite", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Flocos", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Leite Condensado", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Maçã Verde", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Menta c/ Flocos", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Milho Verde", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Mini Saia", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Morango", precoVarejo: 3.50, precoAtacado: 3.00 },
      { nome: "Queijo", precoVarejo: 3.50, precoAtacado: 3.00 }
    ]
  },
  {
    categoria: "Picolés Frutelle",
    itens: [
      { nome: "Abacaxi", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Abacaxi ao Vinho", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Açaí", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Caju", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Cupuaçu", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Goiaba", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Groselha", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Kiwi", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Limão", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Manga", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Maracujá", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Melancia", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Morango", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Tangerina", precoVarejo: 3.00, precoAtacado: 2.60 },
      { nome: "Uva", precoVarejo: 3.00, precoAtacado: 2.60 }
    ]
  },
  {
    categoria: "Picolés Especiais",
    itens: [
      { nome: "Chococo", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Romeu e Julieta", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Torta de Limão", precoVarejo: 4.50, precoAtacado: 4.00 }
    ]
  },
  {
    categoria: "Picolés Eski",
    itens: [
      { nome: "EskiChantilly", precoVarejo: 5.00, precoAtacado: 4.50 },
      { nome: "EskiChocolate", precoVarejo: 5.00, precoAtacado: 4.50 },
      { nome: "EskiCoco", precoVarejo: 5.00, precoAtacado: 4.50 },
      { nome: "EskiLacta", precoVarejo: 5.00, precoAtacado: 4.50 },
      { nome: "EskiMaracujá (Branco)", precoVarejo: 5.00, precoAtacado: 4.50 },
      { nome: "EskiMaracujá (Preto)", precoVarejo: 5.00, precoAtacado: 4.50 },
      { nome: "EskiMorango", precoVarejo: 5.00, precoAtacado: 4.50 }
    ]
  },
  {
    categoria: "Copos 250 ml",
    itens: [
      { nome: "Açaí (220g c/ Granola)", precoVarejo: 8.00, precoAtacado: 7.00 },
      { nome: "Abacaxi", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Abacaxi ao Vinho", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Beijinho", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Blue Ice", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Brigadeiro", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Chantilly c/ Amarena", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Chocolate", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Coco Branco", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Creme", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Flocos", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Lacta", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Leite Condensado", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Leitinho Trufado", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Limão", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Maracujá", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Menta c/ Flocos", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Milho Verde", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Morango", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Napolitano", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Passas ao Rum", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Pistache", precoVarejo: 4.50, precoAtacado: 4.00 },
      { nome: "Sensação", precoVarejo: 4.50, precoAtacado: 4.00 }
    ]
  },
  {
    categoria: "Potes 1,5 L",
    itens: [
      { nome: "Açaí", precoVarejo: 35.00, precoAtacado: 30.00 },
      { nome: "Açaí c/ Kinder", precoVarejo: 38.00, precoAtacado: 33.00 },
      { nome: "Abacaxi ao Vinho", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Abóbora c/ Coco", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Bombom", precoVarejo: 32.00, precoAtacado: 28.00 },
      { nome: "Brigadeiro", precoVarejo: 32.00, precoAtacado: 28.00 },
      { nome: "Cereja", precoVarejo: 32.00, precoAtacado: 28.00 },
      { nome: "Chantilly c/ Amarena", precoVarejo: 32.00, precoAtacado: 28.00 },
      { nome: "Chiclets", precoVarejo: 32.00, precoAtacado: 28.00 },
      { nome: "Chocolate", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Chocotine", precoVarejo: 32.00, precoAtacado: 28.00 },
      { nome: "Coco Branco", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Creme", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Cupuaçu", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Flocos", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Floresta Negra", precoVarejo: 34.00, precoAtacado: 30.00 },
      { nome: "Kinder Bueno", precoVarejo: 38.00, precoAtacado: 33.00 },
      { nome: "Lacta", precoVarejo: 32.00, precoAtacado: 28.00 },
      { nome: "Leitinho", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Leitinho Trufado", precoVarejo: 32.00, precoAtacado: 28.00 },
      { nome: "Maracujá", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Morango", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Napolitano", precoVarejo: 30.00, precoAtacado: 26.00 },
      { nome: "Raffaello", precoVarejo: 38.00, precoAtacado: 33.00 },
      { nome: "Sensação", precoVarejo: 32.00, precoAtacado: 28.00 },
      { nome: "Unicórnio", precoVarejo: 38.00, precoAtacado: 33.00 }
    ]
  }
];

let carrinho = [];
let pagamentos = [];

function formatarValor(v) {
  return `R$ ${v.toFixed(2).replace(".", ",")}`;
}

function buscarProduto(nome) {
  for (const cat of menuData) {
    const prod = cat.itens.find(i => i.nome === nome);
    if (prod) return prod;
  }
  return null;
}

function precoUnitario(nome, qtde) {
  const prod = buscarProduto(nome);
  if (!prod) return 0;
  return qtde >= 5 ? prod.precoAtacado : prod.precoVarejo;
}

function calcularTotalPedido() {
  let total = 0;
  carrinho.forEach(item => {
    const pUnit = precoUnitario(item.nome, item.quantidade);
    total += pUnit * item.quantidade;
  });
  return total;
}

function calcularTotalPagamentos() {
  return pagamentos.reduce((soma, p) => soma + p.valor, 0);
}

function renderMenu() {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";
  menuData.forEach(cat => {
    const sec = document.createElement("div");
    sec.className = "menu-section";
    let html = `<h3>${cat.categoria}</h3>`;
    cat.itens.forEach(item => {
      html += `
        <div class="item">
          <span>${item.nome}</span>
          <b>${formatarValor(item.precoVarejo)}</b>
          <button class="btn-add" onclick="addCarrinho('${item.nome.replace(/'/g, "\\'")}')">+</button>
        </div>
      `;
    });
    sec.innerHTML = html;
    container.appendChild(sec);
  });
}

window.addCarrinho = (nome) => {
  const exist = carrinho.find(i => i.nome === nome);
  if (exist) exist.quantidade++;
  else carrinho.push({ nome, quantidade: 1 });
  renderCarrinho();
};

window.mudarQtde = (nome, delta) => {
  const item = carrinho.find(i => i.nome === nome);
  if (!item) return;
  item.quantidade += delta;
  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(i => i.nome !== nome);
  }
  renderCarrinho();
};

function renderCarrinho() {
  const container = document.getElementById("carrinho-container");
  container.innerHTML = "";
  carrinho.forEach(item => {
    const pUnit = precoUnitario(item.nome, item.quantidade);
    const sub = pUnit * item.quantidade;
    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <span>${item.quantidade}x ${item.nome}</span>
      <div>
        <button onclick="mudarQtde('${item.nome.replace(/'/g, "\\'")}', -1)">-</button>
        <span>${item.quantidade}</span>
        <button onclick="mudarQtde('${item.nome.replace(/'/g, "\\'")}', 1)">+</button>
      </div>
      <span>${formatarValor(sub)}</span>
    `;
    container.appendChild(row);
  });
  const total = calcularTotalPedido();
  document.getElementById("total").innerText = formatarValor(total);
  renderPagamentos();
}

function renderPagamentos() {
  const lista = document.getElementById("lista-pagamentos");
  if (!lista) return;
  lista.innerHTML = "";
  pagamentos.forEach((p, idx) => {
    const div = document.createElement("div");
    div.className = "pagamento-item";
    div.innerHTML = `
      <span>${p.metodo}: ${formatarValor(p.valor)}</span>
      <span class="btn-del" onclick="removerPagto(${idx})">X</span>
    `;
    lista.appendChild(div);
  });
  const totalPedido = calcularTotalPedido();
  if (totalPedido > 0) {
    const totalPago = calcularTotalPagamentos();
    const restante = totalPedido - totalPago;
    const resumo = document.createElement("div");
    resumo.className = "pagamento-resumo";
    resumo.textContent =
      `Total: ${formatarValor(totalPedido)} | ` +
      `Pago: ${formatarValor(totalPago)} | ` +
      `Restante: ${formatarValor(Math.max(restante, 0))}`;
    lista.appendChild(resumo);
  }
}

window.removerPagto = (idx) => {
  pagamentos.splice(idx, 1);
  renderPagamentos();
};

function adicionarPagamento() {
  const metodoSelect = document.getElementById("metodo-pagamento");
  const valorInput = document.getElementById("valor-pagamento");
  const metodo = metodoSelect.value;
  const valor = parseFloat((valorInput.value || "").replace(",", "."));
  const totalPedido = calcularTotalPedido();
  if (totalPedido <= 0) {
    alert("Adicione itens ao carrinho antes de registrar pagamentos.");
    return;
  }
  const totalPagoAtual = calcularTotalPagamentos();
  const restanteAtual = totalPedido - totalPagoAtual;
  if (restanteAtual <= 0.01) {
    alert("O pedido já está totalmente pago. Não é possível lançar mais pagamentos.");
    valorInput.value = "";
    return;
  }
  if (!valor || valor <= 0) {
    alert("Informe um valor de pagamento válido.");
    return;
  }
  if (valor - restanteAtual > 0.01) {
    alert(`O valor informado é maior que o restante (${formatarValor(restanteAtual)}).`);
    return;
  }
  pagamentos.push({ metodo, valor });
  renderPagamentos();
  const totalPagoDepois = calcularTotalPagamentos();
  const restante = totalPedido - totalPagoDepois;
  if (restante > 0.01) {
    valorInput.value = restante.toFixed(2).replace(".", ",");
    if (pagamentos.length === 1 && metodo !== "Dinheiro") {
      metodoSelect.value = "Dinheiro";
    }
  } else {
    valorInput.value = "";
  }
}

function montarMensagemWhatsApp() {
  const nome = document.getElementById("nome").value || "Não informado";
  const tipoAt = document.getElementById("tipo-atendimento").value;
  const end = document.getElementById("endereco").value || "Não informado";
  const obs = document.getElementById("observacoes").value || "";
  let msg = `*Pedido - Sorvetes Danionelle*%0A%0A`;
  msg += `*Cliente:* ${nome}%0A`;
  msg += `*Atendimento:* ${tipoAt}%0A`;
  msg += `*Endereço:* ${end}%0A%0A`;
  const totalPedido = calcularTotalPedido();
  if (carrinho.length === 0) {
    msg += `_Carrinho vazio_%0A`;
  } else {
    msg += `*Itens:*%0A`;
    carrinho.forEach(item => {
      const pUnit = precoUnitario(item.nome, item.quantidade);
      const sub = pUnit * item.quantidade;
      const tipoPreco = item.quantidade >= 5 ? "Atacado" : "Varejo";
      msg += `- ${item.quantidade}x ${item.nome} (${tipoPreco}) - ${formatarValor(sub)}%0A`;
    });
    msg += `%0A*Total:* ${formatarValor(totalPedido)}%0A`;
  }
  if (pagamentos.length > 0) {
    msg += `%0A*Pagamento:*%0A`;
    pagamentos.forEach(p => {
      msg += `- ${p.metodo}: ${formatarValor(p.valor)}%0A`;
    });
    const totalPago = calcularTotalPagamentos();
    const restante = totalPedido - totalPago;
    msg += `%0A*Pago:* ${formatarValor(totalPago)}%0A`;
    msg += `*Restante:* ${formatarValor(Math.max(restante, 0))}%0A`;
  }
  if (obs) {
    msg += `%0A*Obs:* ${encodeURIComponent(obs)}%0A`;
  }
  return msg;
}

function enviarWhatsApp() {
  const mensagem = montarMensagemWhatsApp();
  const numero = "551147464394";
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, "_blank");
}

function imprimirRecibo() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio. Adicione itens antes de imprimir.");
    return;
  }
  const agora = new Date();
  document.getElementById("recibo-data").innerText = agora.toLocaleString("pt-BR");
  document.getElementById("recibo-id").innerText = "PEDIDO #" + agora.getTime().toString().slice(-5);
  document.getElementById("recibo-nome").innerText = document.getElementById("nome").value || "Consumidor";
  document.getElementById("recibo-tipo-atendimento").innerText = document.getElementById("tipo-atendimento").value;
  document.getElementById("recibo-endereco").innerText = document.getElementById("endereco").value || "N/A";

  const itensDiv = document.getElementById("recibo-itens-lista");
  itensDiv.innerHTML = "";
  let total = 0;
  carrinho.forEach(item => {
    const pUnit = precoUnitario(item.nome, item.quantidade);
    const sub = pUnit * item.quantidade;
    total += sub;
    const tipoPreco = item.quantidade >= 5 ? "ATACADO" : "VAREJO";
    const p = document.createElement("p");
    p.textContent = `${item.quantidade}x ${item.nome} (${tipoPreco}) - ${formatarValor(sub)}`;
    itensDiv.appendChild(p);
  });

  const pagtosDiv = document.getElementById("recibo-pagamentos-lista");
  if (pagtosDiv) {
    pagtosDiv.innerHTML = "";
    pagamentos.forEach(p => {
      const linha = document.createElement("p");
      linha.textContent = `${p.metodo}: ${formatarValor(p.valor)}`;
      pagtosDiv.appendChild(linha);
    });
    const totalPago = calcularTotalPagamentos();
    const restante = total - totalPago;
    const resumoPag = document.createElement("p");
    resumoPag.textContent =
      `Pago: ${formatarValor(totalPago)} | Restante: ${formatarValor(Math.max(restante, 0))}`;
    pagtosDiv.appendChild(resumoPag);
  }
  document.getElementById("recibo-total").innerText = formatarValor(total);
  window.print();
}

function novoPedido() {
  if (!confirm("Iniciar um novo pedido? Isso vai limpar carrinho, pagamentos e dados do cliente.")) {
    return;
  }
  carrinho = [];
  pagamentos = [];
  renderCarrinho();
  renderPagamentos();
  document.getElementById("nome").value = "";
  document.getElementById("tipo-atendimento").value = "Retirada no local";
  document.getElementById("endereco").value = "";
  document.getElementById("observacoes").value = "";
  const valorPagto = document.getElementById("valor-pagamento");
  if (valorPagto) valorPagto.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderCarrinho();
  renderPagamentos();
  const btnAddPagto = document.getElementById("btn-add-pagamento");
  if (btnAddPagto) btnAddPagto.addEventListener("click", adicionarPagamento);
  const btnEnviar = document.getElementById("btn-enviar");
  if (btnEnviar) btnEnviar.addEventListener("click", enviarWhatsApp);
  const btnImprimir = document.getElementById("btn-imprimir");
  if (btnImprimir) btnImprimir.addEventListener("click", imprimirRecibo);
  const btnNovoPedido = document.getElementById("btn-novo-pedido");
  if (btnNovoPedido) btnNovoPedido.addEventListener("click", novoPedido);
});
