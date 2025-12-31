const menuData = [
  { categoria: "Picolés DanMilk", itens: [{ nome: "Abacate", precoVarejo: 3.5, precoAtacado: 3.0 }, { nome: "Chocolate", precoVarejo: 3.5, precoAtacado: 3.0 }, { nome: "Morango", precoVarejo: 3.5, precoAtacado: 3.0 }] },
  { categoria: "Picolés Frutelle", itens: [{ nome: "Abacaxi", precoVarejo: 3.0, precoAtacado: 2.6 }, { nome: "Limão", precoVarejo: 3.0, precoAtacado: 2.6 }] },
  { categoria: "Potes 1,5 L", itens: [{ nome: "Chocolate 1,5 L", precoVarejo: 30.0, precoAtacado: 26.0 }, { nome: "Morango 1,5 L", precoVarejo: 30.0, precoAtacado: 26.0 }] }
];

let carrinho = [];
let pagamentos = [];

function formatarValor(v) { return `R$ ${v.toFixed(2).replace(".", ",")}`; }

function renderMenu() {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";
  menuData.forEach(cat => {
    let html = `<div class="menu-section"><h3>${cat.categoria}</h3>`;
    cat.itens.forEach(item => {
      html += `<div class="item"><span>${item.nome}</span><b>${formatarValor(item.precoVarejo)}</b>
               <button class="btn-add" onclick="addCarrinho('${item.nome}')">+</button></div>`;
    });
    container.innerHTML += html + `</div>`;
  });
}

window.addCarrinho = (nome) => {
  let item = carrinho.find(i => i.nome === nome);
  if (item) item.quantidade++; else carrinho.push({ nome, quantidade: 1 });
  renderCarrinho();
};

function renderCarrinho() {
  const container = document.getElementById("carrinho-container");
  container.innerHTML = "";
  let total = 0;
  carrinho.forEach(item => {
    let preco = 0;
    menuData.forEach(c => { let p = c.itens.find(i => i.nome === item.nome); if(p) preco = item.quantidade >= 5 ? p.precoAtacado : p.precoVarejo; });
    let sub = preco * item.quantidade;
    total += sub;
    container.innerHTML += `<div class="cart-row"><span>${item.quantidade}x ${item.nome}</span>
      <button onclick="mudarQtde('${item.nome}', -1)">-</button><span>${item.quantidade}</span><button onclick="mudarQtde('${item.nome}', 1)">+</button>
      <span>${formatarValor(sub)}</span></div>`;
  });
  document.getElementById("total").innerText = formatarValor(total);
}

window.mudarQtde = (nome, d) => {
  let i = carrinho.find(x => x.nome === nome);
  if(i) i.quantidade += d;
  carrinho = carrinho.filter(x => x.quantidade > 0);
  renderCarrinho();
};

// LÓGICA DE PAGAMENTO MULTI
document.getElementById("btn-add-pagamento").onclick = () => {
  const metodo = document.getElementById("metodo-pagamento").value;
  const valor = parseFloat(document.getElementById("valor-pagamento").value);
  if (!valor || valor <= 0) return alert("Insira um valor válido");
  pagamentos.push({ metodo, valor });
  document.getElementById("valor-pagamento").value = "";
  renderPagamentos();
};

function renderPagamentos() {
  const lista = document.getElementById("lista-pagamentos");
  lista.innerHTML = "";
  pagamentos.forEach((p, idx) => {
    lista.innerHTML += `<div class="pagamento-item"><span>${p.metodo}: ${formatarValor(p.valor)}</span>
                        <span class="btn-del" onclick="removerPagto(${idx})">X</span></div>`;
  });
}

window.removerPagto = (idx) => { pagamentos.splice(idx, 1); renderPagamentos(); };

function imprimirRecibo() {
  const agora = new Date();
  document.getElementById("recibo-data").innerText = agora.toLocaleString();
  document.getElementById("recibo-id").innerText = "PEDIDO #" + agora.getTime().toString().slice(-5);
  document.getElementById("recibo-nome").innerText = document.getElementById("nome").value || "Consumidor";
  document.getElementById("recibo-tipo-atendimento").innerText = document.getElementById("tipo-atendimento").value;
  document.getElementById("recibo-endereco").innerText = document.getElementById("endereco").value || "N/A";

  const listaItens = document.getElementById("recibo-itens-lista");
  listaItens.innerHTML = "";
  let total = 0;
  carrinho.forEach(item => {
    let preco = 0;
    menuData.forEach(c => { let p = c.itens.find(i => i.nome === item.nome); if(p) preco = item.quantidade >= 5 ? p.precoAtacado : p.precoVarejo; });
    total += (preco * item.quantidade);
    listaItens.innerHTML += `<p>${item.quantidade}x ${item.nome.slice(0,15)} - ${formatarValor(preco * item.quantidade)}</p>`;
  });

  const listaPagto = document.getElementById("recibo-pagamentos-lista");
  listaPagto.innerHTML = "";
  pagamentos.forEach(p => { listaPagto.innerHTML += `<p>${p.metodo}: ${formatarValor(p.valor)}</p>`; });

  document.getElementById("recibo-total").innerText = formatarValor(total);
  window.print();
}

document.getElementById("btn-enviar").onclick = () => {
  let pagtoTexto = pagamentos.map(p => `${p.metodo}: ${formatarValor(p.valor)}`).join(", ");
  let msg = `*Pedido Danionelle*%0A*Cliente:* ${document.getElementById("nome").value}%0A*Pagamento:* ${pagtoTexto}`;
  window.open(`https://wa.me/551147464394?text=${msg}`, "_blank");
};

document.getElementById("btn-imprimir").onclick = imprimirRecibo;
renderMenu();
