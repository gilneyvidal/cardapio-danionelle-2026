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
let modoImpressao = false; // Estado para saber se é loja ou impressão

// --- UTILITÁRIOS ---

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

// --- RENDERIZAÇÃO DA LOJA (Cliente) ---

function renderMenu() {
  const container = document.getElementById("menu-container");
  if(!container) return; 
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
  if(!container) return;
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
    alert("O pedido já está totalmente pago.");
    valorInput.value = "";
    return;
  }
  if (!valor || valor <= 0) {
    alert("Informe um valor válido.");
    return;
  }
  if (valor - restanteAtual > 0.01) {
    alert(`O valor informado é maior que o restante (${formatarValor(restanteAtual)}).`);
    return;
  }

  pagamentos.push({ metodo, valor });
  renderPagamentos();
  
  // Sugerir o restante no input
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

// --- LÓGICA DE ID ÚNICO E LINK MÁGICO ---

function gerarIdUnico() {
  // Gera algo como: #1015-42 (HoraMinuto-Random)
  const agora = new Date();
  const hora = agora.getHours().toString().padStart(2,'0');
  const min = agora.getMinutes().toString().padStart(2,'0');
  const random = Math.floor(Math.random() * 90 + 10); // 10 a 99
  return `#${hora}${min}-${random}`;
}

function codificarPedido(dados) {
  // Converte objeto JSON em string Base64 segura para URL
  const jsonStr = JSON.stringify(dados);
  return btoa(encodeURIComponent(jsonStr));
}

function decodificarPedido(hash) {
  try {
    const jsonStr = decodeURIComponent(atob(hash));
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error("Erro ao decodificar pedido", e);
    return null;
  }
}

function montarTextoMensagem(dadosPedido) {
  // OBS: Aqui usamos \n para pular linha. O encodeURIComponent fará a mágica depois.
  const { id, cliente, tipo, endereco, carrinho, pagamentos, total, obs } = dadosPedido;

  // Cria o link mágico
  const baseUrl = window.location.href.split('?')[0];
  const payload = codificarPedido(dadosPedido);
  const linkMagico = `${baseUrl}?dado_pedido=${payload}`;

  let msg = `*Pedido ${id} - Sorvetes Danionelle*\n`;
  msg += `--------------------------------\n`;
  msg += `*Cliente:* ${cliente}\n`;
  msg += `*Tipo:* ${tipo}\n`;
  if(endereco) msg += `*Endereço:* ${endereco}\n`;
  msg += `--------------------------------\n`;
  
  carrinho.forEach(item => {
    const pUnit = precoUnitario(item.nome, item.quantidade);
    const sub = pUnit * item.quantidade;
    const tipoPr = item.quantidade >= 5 ? "Atacado" : "Varejo";
    msg += `${item.quantidade}x ${item.nome} (${tipoPr}) = ${formatarValor(sub)}\n`;
  });
  
  msg += `--------------------------------\n`;
  msg += `*TOTAL: ${formatarValor(total)}*\n`;
  
  if (pagamentos.length > 0) {
    msg += `*Pagamentos:*\n`;
    pagamentos.forEach(p => msg += ` - ${p.metodo}: ${formatarValor(p.valor)}\n`);
  }
  
  if (obs) msg += `*Obs:* ${obs}\n`;
  
  msg += `\n📄 *Link para Imprimir Cupom:*\n${linkMagico}`;
  
  return msg;
}

function enviarWhatsApp() {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio!");
    return;
  }

  // Coleta dados
  const dados = {
    id: gerarIdUnico(),
    dataHora: new Date().toLocaleString("pt-BR"),
    cliente: document.getElementById("nome").value || "Não informado",
    tipo: document.getElementById("tipo-atendimento").value,
    endereco: document.getElementById("endereco").value || "",
    obs: document.getElementById("observacoes").value || "",
    carrinho: carrinho, 
    pagamentos: pagamentos,
    total: calcularTotalPedido()
  };

  const textoMensagem = montarTextoMensagem(dados);
  
  // AQUI ESTÁ A CORREÇÃO:
  // Usamos encodeURIComponent em TUDO. Isso protege o # do ID e os caracteres do link.
  const mensagemCodificada = encodeURIComponent(textoMensagem);
  
  const numero = "551147464394"; 
  const url = `https://wa.me/${numero}?text=${mensagemCodificada}`;
  window.open(url, "_blank");
}

function novoPedido() {
  if (!confirm("Limpar tudo e iniciar novo pedido?")) return;
  carrinho = [];
  pagamentos = [];
  renderCarrinho();
  renderPagamentos();
  document.getElementById("nome").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("observacoes").value = "";
  document.getElementById("valor-pagamento").value = "";
}

// --- FUNÇÃO DE IMPRESSÃO (Modo Lojista) ---

function prepararImpressao(dados) {
  // Preenche o recibo oculto com os dados vindos do Link
  document.getElementById("recibo-id").innerText = dados.id;
  document.getElementById("recibo-data").innerText = dados.dataHora;
  document.getElementById("recibo-nome").innerText = dados.cliente;
  document.getElementById("recibo-tipo-atendimento").innerText = dados.tipo;
  document.getElementById("recibo-endereco").innerText = dados.endereco || "N/A";
  document.getElementById("recibo-obs").innerText = dados.obs || "-";
  
  // Itens
  const itensDiv = document.getElementById("recibo-itens-lista");
  itensDiv.innerHTML = "";
  dados.carrinho.forEach(item => {
    // Recalcula para exibição
    const pUnit = precoUnitario(item.nome, item.quantidade); 
    const sub = pUnit * item.quantidade;
    const tipoPr = item.quantidade >= 5 ? "ATACADO" : "VAREJO";
    
    const p = document.createElement("p");
    p.textContent = `${item.quantidade}x ${item.nome} (${tipoPr}) = ${formatarValor(sub)}`;
    itensDiv.appendChild(p);
  });

  // Pagamentos
  const pagtosDiv = document.getElementById("recibo-pagamentos-lista");
  pagtosDiv.innerHTML = "";
  let totalPago = 0;
  dados.pagamentos.forEach(pg => {
    totalPago += pg.valor;
    const p = document.createElement("p");
    p.textContent = `${pg.metodo}: ${formatarValor(pg.valor)}`;
    pagtosDiv.appendChild(p);
  });

  // Resumo Pagamento
  const restante = dados.total - totalPago;
  const resumo = document.createElement("p");
  resumo.style.fontWeight = "bold";
  resumo.style.marginTop = "5px";
  resumo.textContent = `Pago: ${formatarValor(totalPago)} | Resta: ${formatarValor(Math.max(0, restante))}`;
  pagtosDiv.appendChild(resumo);

  document.getElementById("recibo-total").innerText = formatarValor(dados.total);
}

// --- INICIALIZAÇÃO ---

document.addEventListener("DOMContentLoaded", () => {
  // Verifica se tem dados na URL (Modo Impressão)
  const params = new URLSearchParams(window.location.search);
  const dadosHash = params.get("dado_pedido");

  if (dadosHash) {
    // MODO IMPRESSÃO
    modoImpressao = true;
    const dadosPedido = decodificarPedido(dadosHash);
    
    if (dadosPedido) {
      // Esconde app do cliente
      document.getElementById("app-cliente").style.display = "none";
      // Mostra painel de impressão
      document.getElementById("painel-impressao").style.display = "flex";
      
      // Preenche o recibo
      prepararImpressao(dadosPedido);

      // Configura botão de imprimir
      document.getElementById("btn-imprimir-painel").onclick = () => window.print();
    } else {
      alert("Erro ao ler dados do pedido. O link pode estar quebrado.");
      window.location.href = window.location.pathname; // volta pro inicio limpo
    }

  } else {
    // MODO CLIENTE NORMAL
    renderMenu();
    renderCarrinho();
    renderPagamentos();

    const btnAddPagto = document.getElementById("btn-add-pagamento");
    if (btnAddPagto) btnAddPagto.addEventListener("click", adicionarPagamento);
    
    const btnEnviar = document.getElementById("btn-enviar");
    if (btnEnviar) btnEnviar.addEventListener("click", enviarWhatsApp);
    
    const btnNovo = document.getElementById("btn-novo-pedido");
    if (btnNovo) btnNovo.addEventListener("click", novoPedido);
  }
});
