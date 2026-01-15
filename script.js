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

// Cache do último pedido gerado (para imprimir/reenviar com o MESMO ID)
let cachePedidoAtual = null;

// Modo atendente
const STORAGE_KEY_ATENDENTE = "danionelle_modo_atendente_v1";

// PIN do atendente (para ativação manual)
const PIN_ATENDENTE = "2468";

// Prefixo do ID para impressão
const PREFIXO_ID_IMPRESSAO = "DN1:";

// URL base do site (ajuste se necessário)
const URL_BASE_SITE = "https://gilneyvidal.github.io/cardapio-danionelle-2026/";

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
          <div>${item.nome}</div>
          <div><strong>${formatarValor(item.precoVarejo)}</strong></div>
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

  cachePedidoAtual = null;
  renderCarrinho();
};

window.mudarQtde = (nome, delta) => {
  const item = carrinho.find(i => i.nome === nome);
  if (!item) return;

  item.quantidade += delta;
  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(i => i.nome !== nome);
  }

  cachePedidoAtual = null;
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
      <div>${item.quantidade}x ${item.nome}</div>
      <div>
        <button onclick="mudarQtde('${item.nome.replace(/'/g, "\\'")}', -1)">-</button>
        <span style="padding: 0 8px;">${item.quantidade}</span>
        <button onclick="mudarQtde('${item.nome.replace(/'/g, "\\'")}', 1)">+</button>
      </div>
      <div>${formatarValor(sub)}</div>
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
  cachePedidoAtual = null;
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
  cachePedidoAtual = null;
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

/* =========================
   MODO ATENDENTE (UI)
   ========================= */

function isModoAtendente() {
  try {
    return localStorage.getItem(STORAGE_KEY_ATENDENTE) === "1";
  } catch (e) {
    return false;
  }
}

function setModoAtendente(ativo) {
  try {
    localStorage.setItem(STORAGE_KEY_ATENDENTE, ativo ? "1" : "0");
  } catch (e) {}

  document.body.classList.toggle("modo-atendente", !!ativo);
}

function abrirModoAtendente() {
  const pin = prompt("Digite o PIN do atendente:");
  if (pin === null) return;

  if (String(pin).trim() !== PIN_ATENDENTE) {
    alert("PIN inválido.");
    return;
  }

  setModoAtendente(true);
  alert("Modo atendente ativado. Os botões de impressão já estão disponíveis.");
}

function sairModoAtendente() {
  setModoAtendente(false);
  alert("Modo atendente desativado.");
  
  // Limpa URL se tiver parâmetro print
  if (window.location.search.includes("print=")) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

/* =========================
   ID ÚNICO + ID PARA IMPRESSÃO (DN1:)
   ========================= */

function pad2(n) {
  return String(n).padStart(2, "0");
}

function gerarIdCurtoPedido() {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(-2);
  const mm = pad2(d.getMonth() + 1);
  const dd = pad2(d.getDate());
  const hh = pad2(d.getHours());
  const mi = pad2(d.getMinutes());
  const ss = pad2(d.getSeconds());
  const rand = Math.random().toString(36).toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4);
  return `DN-${yy}${mm}${dd}-${hh}${mi}${ss}-${rand}`;
}

function base64UrlEncodeUtf8(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  bytes.forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlDecodeUtf8(b64url) {
  let b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4 !== 0) b64 += "=";
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function gerarIdImpressao(pedidoObj) {
  const json = JSON.stringify(pedidoObj);
  return `${PREFIXO_ID_IMPRESSAO}${base64UrlEncodeUtf8(json)}`;
}

function decodificarIdImpressao(idTexto) {
  const raw = (idTexto || "").trim();
  if (!raw.startsWith(PREFIXO_ID_IMPRESSAO)) return null;

  const payload = raw.slice(PREFIXO_ID_IMPRESSAO.length).trim();
  if (!payload) return null;

  try {
    const json = base64UrlDecodeUtf8(payload);
    const obj = JSON.parse(json);
    return obj;
  } catch (e) {
    return null;
  }
}

function coletarPedidoAtual() {
  const agora = new Date();

  const nome = document.getElementById("nome").value || "Não informado";
  const tipoAt = document.getElementById("tipo-atendimento").value;
  const end = document.getElementById("endereco").value || "Não informado";
  const obs = document.getElementById("observacoes").value || "";

  const itens = carrinho.map(item => {
    const pUnit = precoUnitario(item.nome, item.quantidade);
    const sub = pUnit * item.quantidade;
    const tipoPreco = item.quantidade >= 5 ? "Atacado" : "Varejo";
    return { nome: item.nome, quantidade: item.quantidade, tipoPreco, precoUnit: pUnit, subtotal: sub };
  });

  const total = calcularTotalPedido();

  return {
    versao: 1,
    createdAtISO: agora.toISOString(),
    createdAtLocal: agora.toLocaleString("pt-BR"),
    cliente: { nome, tipoAtendimento: tipoAt, endereco: end },
    itens,
    pagamentos: pagamentos.map(p => ({ metodo: p.metodo, valor: p.valor })),
    observacoes: obs,
    total
  };
}

function fingerprintPedido(pedido) {
  const mini = {
    cliente: pedido.cliente,
    itens: pedido.itens.map(i => [i.nome, i.quantidade]),
    pagamentos: pedido.pagamentos,
    observacoes: pedido.observacoes,
    total: pedido.total
  };
  return base64UrlEncodeUtf8(JSON.stringify(mini));
}

function obterOuGerarPedidoComIds() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio. Adicione itens antes de gerar/enviar/imprimir.");
    return null;
  }

  const pedidoBase = coletarPedidoAtual();
  const fp = fingerprintPedido(pedidoBase);

  if (cachePedidoAtual && cachePedidoAtual.fingerprint === fp) {
    return cachePedidoAtual;
  }

  const idCurto = gerarIdCurtoPedido();
  const pedidoCompleto = { ...pedidoBase, idCurto };
  const idImpressao = gerarIdImpressao(pedidoCompleto);

  pedidoCompleto.idImpressao = idImpressao;

  cachePedidoAtual = { fingerprint: fp, idCurto, idImpressao, pedido: pedidoCompleto };
  return cachePedidoAtual;
}

/* =========================
   WhatsApp
   ========================= */

function montarMensagemWhatsApp(pedidoObj) {
  const linhas = [];

  linhas.push("*Pedido - Sorvetes Danionelle*");
  linhas.push("");

  linhas.push(`*ID do Pedido:* ${pedidoObj.idCurto}`);
  linhas.push("");

  // Link clicável para impressão
  const linkImpressao = `${URL_BASE_SITE}?print=${encodeURIComponent(pedidoObj.idImpressao)}`;
  linhas.push(`*Link para Impressão (clique para abrir):*`);
  linhas.push(linkImpressao);
  linhas.push("");

  linhas.push(`*Cliente:* ${pedidoObj.cliente.nome}`);
  linhas.push(`*Atendimento:* ${pedidoObj.cliente.tipoAtendimento}`);
  linhas.push(`*Endereço:* ${pedidoObj.cliente.endereco}`);
  linhas.push("");

  if (!pedidoObj.itens || pedidoObj.itens.length === 0) {
    linhas.push("_Carrinho vazio_");
  } else {
    linhas.push("*Itens:*");
    pedidoObj.itens.forEach(i => {
      linhas.push(`- ${i.quantidade}x ${i.nome} (${i.tipoPreco}) - ${formatarValor(i.subtotal)}`);
    });
    linhas.push("");
    linhas.push(`*Total:* ${formatarValor(pedidoObj.total)}`);
  }

  if (pedidoObj.pagamentos && pedidoObj.pagamentos.length > 0) {
    linhas.push("");
    linhas.push("*Pagamento:*");
    pedidoObj.pagamentos.forEach(p => linhas.push(`- ${p.metodo}: ${formatarValor(p.valor)}`));
    const totalPago = pedidoObj.pagamentos.reduce((s, p) => s + p.valor, 0);
    const restante = pedidoObj.total - totalPago;
    linhas.push("");
    linhas.push(`*Pago:* ${formatarValor(totalPago)}`);
    linhas.push(`*Restante:* ${formatarValor(Math.max(restante, 0))}`);
  }

  if (pedidoObj.observacoes) {
    linhas.push("");
    linhas.push(`*Obs:* ${pedidoObj.observacoes}`);
  }

  return encodeURIComponent(linhas.join("\n"));
}

function enviarWhatsApp() {
  const pacote = obterOuGerarPedidoComIds();
  if (!pacote) return;

  const numero = "551147464394";
  const mensagem = montarMensagemWhatsApp(pacote.pedido);
  const url = `https://wa.me/${numero}?text=${mensagem}`;

  window.open(url, "_blank");
}

/* =========================
   Impressão (recibo)
   ========================= */

function isEntrega(tipoAtendimento) {
  const t = String(tipoAtendimento || "").toLowerCase();
  return t.includes("entrega");
}

function preencherRecibo(pedidoObj) {
  document.getElementById("recibo-data").innerText = pedidoObj.createdAtLocal || new Date().toLocaleString("pt-BR");
  document.getElementById("recibo-id").innerText = `PEDIDO #${pedidoObj.idCurto || "-----"}`;

  document.getElementById("recibo-nome").innerText = pedidoObj.cliente?.nome || "Consumidor";
  document.getElementById("recibo-tipo-atendimento").innerText = pedidoObj.cliente?.tipoAtendimento || "N/A";

  const linhaEndereco = document.getElementById("recibo-endereco-linha");
  const spanEndereco = document.getElementById("recibo-endereco");
  const tipo = pedidoObj.cliente?.tipoAtendimento || "";

  if (isEntrega(tipo)) {
    linhaEndereco.style.display = "";
    spanEndereco.innerText = pedidoObj.cliente?.endereco || "Não informado";
  } else {
    linhaEndereco.style.display = "none";
    spanEndereco.innerText = "";
  }

  const itensDiv = document.getElementById("recibo-itens-lista");
  itensDiv.innerHTML = "";

  let total = 0;
  (pedidoObj.itens || []).forEach(i => {
    total += Number(i.subtotal || 0);
    const p = document.createElement("p");
    p.textContent = `${i.quantidade}x ${i.nome} (${String(i.tipoPreco || "").toUpperCase()}) - ${formatarValor(Number(i.subtotal || 0))}`;
    itensDiv.appendChild(p);
  });

  const pagtosDiv = document.getElementById("recibo-pagamentos-lista");
  pagtosDiv.innerHTML = "";

  if (pedidoObj.pagamentos && pedidoObj.pagamentos.length > 0) {
    pedidoObj.pagamentos.forEach(pag => {
      const linha = document.createElement("p");
      linha.textContent = `${pag.metodo}: ${formatarValor(Number(pag.valor || 0))}`;
      pagtosDiv.appendChild(linha);
    });

    const totalPago = pedidoObj.pagamentos.reduce((s, p) => s + Number(p.valor || 0), 0);
    const restante = (pedidoObj.total ?? total) - totalPago;

    const resumo = document.createElement("p");
    resumo.textContent = `Pago: ${formatarValor(totalPago)} | Restante: ${formatarValor(Math.max(restante, 0))}`;
    pagtosDiv.appendChild(resumo);
  } else {
    const linha = document.createElement("p");
    linha.textContent = "Não informado";
    pagtosDiv.appendChild(linha);
  }

  const obsBox = document.getElementById("recibo-obs-box");
  const obsSpan = document.getElementById("recibo-obs");
  const obs = String(pedidoObj.observacoes || "").trim();
  if (obs) {
    obsBox.style.display = "";
    obsSpan.innerText = obs;
  } else {
    obsBox.style.display = "none";
    obsSpan.innerText = "";
  }

  document.getElementById("recibo-total").innerText = formatarValor(Number(pedidoObj.total ?? total ?? 0));
}

function imprimirReciboAtual() {
  if (!isModoAtendente()) {
    alert("Impressão disponível somente no modo atendente.");
    return;
  }

  const pacote = obterOuGerarPedidoComIds();
  if (!pacote) return;

  preencherRecibo(pacote.pedido);
  window.print();
}

function carregarPedidoViaURL() {
  const params = new URLSearchParams(window.location.search);
  const printParam = params.get("print");

  if (!printParam) return;

  const pedidoObj = decodificarIdImpressao(printParam);
  if (!pedidoObj) {
    alert("Link de impressão inválido ou corrompido.");
    return;
  }

  // Ativa modo atendente automaticamente (sem pedir PIN)
  setModoAtendente(true);

  // Preenche o carrinho e dados do cliente
  carrinho = pedidoObj.itens.map(i => ({ nome: i.nome, quantidade: i.quantidade }));
  pagamentos = pedidoObj.pagamentos.map(p => ({ metodo: p.metodo, valor: p.valor }));

  document.getElementById("nome").value = pedidoObj.cliente?.nome || "";
  document.getElementById("tipo-atendimento").value = pedidoObj.cliente?.tipoAtendimento || "Retirada no local";
  document.getElementById("endereco").value = pedidoObj.cliente?.endereco || "";
  document.getElementById("observacoes").value = pedidoObj.observacoes || "";

  // Atualiza cache
  cachePedidoAtual = {
    fingerprint: fingerprintPedido(pedidoObj),
    idCurto: pedidoObj.idCurto,
    idImpressao: pedidoObj.idImpressao,
    pedido: pedidoObj
  };

  renderCarrinho();
  renderPagamentos();

  // Preenche o recibo
  preencherRecibo(pedidoObj);

  alert("Pedido carregado! Clique em 'Imprimir Recibo' para imprimir.");
}

/* =========================
   Novo pedido
   ========================= */

function novoPedido() {
  if (!confirm("Iniciar um novo pedido? Isso vai limpar carrinho, pagamentos e dados do cliente.")) {
    return;
  }

  carrinho = [];
  pagamentos = [];
  cachePedidoAtual = null;

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

  // Verifica se há parâmetro ?print= na URL
  carregarPedidoViaURL();

  // Aplica modo atendente salvo (se não veio via URL)
  if (!window.location.search.includes("print=")) {
    setModoAtendente(isModoAtendente());
  }

  const btnAddPagto = document.getElementById("btn-add-pagamento");
  if (btnAddPagto) btnAddPagto.addEventListener("click", adicionarPagamento);

  const btnEnviar = document.getElementById("btn-enviar");
  if (btnEnviar) btnEnviar.addEventListener("click", enviarWhatsApp);

  const btnImprimir = document.getElementById("btn-imprimir");
  if (btnImprimir) btnImprimir.addEventListener("click", imprimirReciboAtual);

  const btnNovoPedido = document.getElementById("btn-novo-pedido");
  if (btnNovoPedido) btnNovoPedido.addEventListener("click", novoPedido);

  const btnAbrirAtendente = document.getElementById("btn-abrir-atendente");
  if (btnAbrirAtendente) btnAbrirAtendente.addEventListener("click", abrirModoAtendente);

  const btnSairAtendente = document.getElementById("btn-sair-atendente");
  if (btnSairAtendente) btnSairAtendente.addEventListener("click", sairModoAtendente);
});
