// CONFIGURAÇÕES GERAIS E BANCO DE DADOS

const NUMERO_WHATSAPP = "5511948325664"; // O número de WhatsApp que vai receber os pedidos (com DDD e sem espaços ou traços)

const produtos = [
  {
    id: 1,
    marca: "AIR FORCE",
    nome: "Air Force",
    preco: 285.00,
    descricao: "Amortecimento responsivo e visual urbano para acompanhar a cidade.", imagens: ["./imagens/air force cinza destaque.jpeg"],
    cores: [["Branco", "#ffffff"]],
    tamanhos: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
    categoria: "Casual",
    avaliacao: 4.8,
    destaque: true
  },

  {
    id: 2, marca: "NIKE DUNK",
    nome: "Nike Dunk",
    preco: 285.00, precoAnterior: null,
    desconto: null,
    descricao: "Leve, versátil e pensado para o ritmo dos seus dias.",
    imagens: ["./imagens/nike dunk branco e marron destaque.jpeg"],
    cores: [["Branco e Marrom", "linear-gradient(to right, #ffffff, #805638)"]],
    tamanhos: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    categoria: "Casual",
    avaliacao: 4.6,
    destaque: true
  },

  {
    id: 3, marca: "NIKE DUNK",
    nome: "Nike Dunk",
    preco: 285.00,
    descricao: "Um clássico atualizado com materiais robustos e conforto de longa duração.",
    imagens: ["./imagens/nike dunk verde destaque.jpeg"],
    cores: [["Verde", "#5d5f52"]],
    tamanhos: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
    categoria: "Casual",
    avaliacao: 4.7,
    destaque: true
  },


  {
    id: 4, marca: "GUCCI",
    nome: " Gucci ",
    preco: 380.00,
    descricao: "Estrutura leve, tração segura e energia para acelerar suas metas.",
    imagens: ["./imagens/Gucci destaque.jpeg"],
    cores: [["Marrom com Branco", "linear-gradient(to right, #805638, #ffffff)"]],
    tamanhos: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    estoque: 9,
    categoria: "Corrida",
    avaliacao: 4.6,
    destaque: true
  },

  // todos os tenis da loja só para vendas
  {
    id: 5, marca: "NIKE ANBUSH",
    nome: "Nike Anbush",
    preco: 350.00,
    descricao: "O Nike x Ambush é a combinação perfeita entre streetwear de alto nível e design ousado. Criado em parceria com a marca japonesa Ambush, o modelo traz um visual moderno e diferenciado, com destaque para o Swoosh alongado que ultrapassa o calcanhar, garantindo identidade única.",
    imagens: ["./imagens/Nike anbush pretoo.jpeg", "./imagens/Nike anbush branco e preto.jpeg", "./imagens/Nike anbush Branco.jpeg", "./imagens/Nike anbush Panda.jpeg", "./imagens/Nike anbush Preto e Branco.jpeg"],
    cores: [["Preto", "#171717"], ["Branco e Preto", "linear-gradient(to right, #ffffff, #171717)"],
    ["Branco", "#ffffff"], ["Panda", "linear-gradient(to right, #171717, #ffffff)"], ["Preto e Branco", "linear-gradient(to right, #171717, #ffffff)"]],
    tamanhos: [38, 39, 40, 41, 42, 43],
    categoria: "Casual",
  },

  {
    id: 6, marca: "NIKE ANBUSH",
    nome: "Nike Anbush",
    preco: 360.00,
    descricao: "O Nike x Ambush é a combinação perfeita entre streetwear de alto nível e design ousado.Criado em parceria com a marca japonesa Ambush, o modelo traz um visual moderno e diferenciado, com destaque para o Swoosh alongado que ultrapassa o calcanhar, garantindo identidade única.",
    imagens: ["./imagens/Nike anbush Nozes.jpeg", "./imagens/Nike anbush Preto Cinza.jpeg"],
    cores: [["Nozes Preto", "linear-gradient(to right, #cc8b36, #171717)"], ["Preto Cinza", "linear-gradient(to right, #171717, #c0c0c0)"]],
    tamanhos: [38, 39, 40, 41, 42, 43],
    categoria: "Casual",
  },

  {
    id: 7, marca: "NIKE ANBUSH",
    nome: "Nike Anbush",
    preco: 350.00,
    descricao: "O Nike x Ambush é a combinação perfeita entre streetwear de alto nível e design ousado. Criado em parceria com a marca japonesa Ambush, o modelo traz um visual moderno e diferenciado, com destaque para o Swoosh alongado que ultrapassa o calcanhar, garantindo identidade única.",
    imagens: ["./imagens/Nike anbush Creme Preto.jpeg", "./imagens/Nike anbush Branco e Vermelho.jpeg", "./imagens/Nike anbush Bege e Vermelho.jpeg", "./imagens/Nike anbush Azul BB.jpeg", "./imagens/Nike anbush Cinza e Preto.jpeg", "./imagens/Nike anbush Branco e Azul claro.jpeg", "./imagens/Nike anbush Cinza e Branco.jpeg"],
    cores: [["Creme Preto", "linear-gradient(to right, #e4cda5, #171717)"], ["Branco e Vermelho", "linear-gradient(to right, #ffffff, #ff0000)"], ["Bege e Vermelho", "linear-gradient(to right, #d2b48c, #ff0000)"], ["Azul BB", "#8cb1d6"], ["Cinza e Preto", "linear-gradient(to right, #c0c0c0, #171717)"], ["Branco e Azul Claro", "linear-gradient(to right, #ffffff, #add8e6)"], ["Cinza e Branco", "linear-gradient(to right, #c0c0c0, #ffffff)"]],
    tamanhos: [38, 37, 38, 39, 40, 41, 42, 43],
    categoria: "Casual",
  },

  {
    id: 8, marca: "NIKE ANBUSH",
    nome: "Nike Anbush",
    preco: 360.00,
    descricao: "O Nike x Ambush é a combinação perfeita entre streetwear de alto nível e design ousado. Criado em parceria com a marca japonesa Ambush, o modelo traz um visual moderno e diferenciado, com destaque para o Swoosh alongado que ultrapassa o calcanhar, garantindo identidade única.",
    imagens: ["./imagens/Nike anbush Azul.jpeg"],
    cores: [["Azul", "#0000ff"]],
    tamanhos: [38, 37, 38, 39, 40, 41, 42, 43],
    categoria: "Casual",
  },

  {
    id: 9, marca: "NIKE ANBUSH",
    nome: "Nike Anbush Cromo",
    preco: 350.00,
    descricao: "O Nike x Ambush é a combinação perfeita entre streetwear de alto nível e design ousado. Criado em parceria com a marca japonesa Ambush, o modelo traz um visual moderno e diferenciado, com destaque para o Swoosh alongado que ultrapassa o calcanhar, garantindo identidade única.",
    imagens: ["./imagens/Nike anbush Branco com Cinza.jpeg"],
    cores: [["Cromo Branco e Preto", "linear-gradient(to right, #171717, #ffffff)"]],
    tamanhos: [38, 37, 38, 39, 40, 41, 42, 43],
    categoria: "Casual",
  },


  {
    id: 10, marca: "NIKE ANBUSH",
    nome: "Nike Anbush AA",
    preco: 360.00,
    descricao: "O Nike x Ambush é a combinação perfeita entre streetwear de alto nível e design ousado. Criado em parceria com a marca japonesa Ambush, o modelo traz um visual moderno e diferenciado, com destaque para o Swoosh alongado que ultrapassa o calcanhar, garantindo identidade única.",
    imagens: ["./imagens/Nike anbush AA Azul e Amarelo.jpeg"],
    cores: [["Azul e Amarelo", "linear-gradient(to right, #0000ff, #ffff00)"]],
    tamanhos: [38, 37, 38, 39, 40, 41, 42, 43],
    categoria: "Casual",
  },

];







// Fotos que passam no carrossel automático do banner principal (a primeira aparece primeiro)
// Pra trocar as fotos, é só editar esta lista: pode ser link de imagem da internet ou "./imagens/nome-do-arquivo.jpeg"
const imagensCarrosselHero = [
  "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1280",
  "./imagens/Nike anbush pretoo.jpeg",
  "./imagens/nike dunk verde destaque.jpeg",
  "./imagens/air force cinza destaque.jpeg",
];

let indiceSlideHeroAtual = 0;

// Cria uma div de slide pra cada imagem da lista acima
function montarCarrosselHero() {
  const trilho = document.getElementById("carrosselHero");
  trilho.innerHTML = imagensCarrosselHero
    .map(imagem => `<div class="slide-hero" style="background-image:url('${imagem}')"></div>`)
    .join("");

  // Cria uma bolinha pra cada foto (clicar nela pula direto pra aquele slide)
  const pontos = document.getElementById("pontosCarrosselHero");
  pontos.innerHTML = imagensCarrosselHero
    .map((_, indice) => `<button class="ponto-carrossel ${indice === 0 ? "active" : ""}" data-ponto-carrossel="${indice}" aria-label="Ir para a foto ${indice + 1}"></button>`)
    .join("");
}

// Move o trilho pra esquerda pra mostrar a próxima foto (e volta pra primeira no final)
function avancarSlideHero() {
  irParaSlideHero((indiceSlideHeroAtual + 1) % imagensCarrosselHero.length);
}

// Move o trilho direto pro slide escolhido e atualiza qual bolinha fica destacada
function irParaSlideHero(indice) {
  indiceSlideHeroAtual = indice;
  document.getElementById("carrosselHero").style.transform = `translateX(-${indiceSlideHeroAtual * 100}%)`;
  document.querySelectorAll(".ponto-carrossel").forEach((ponto, i) => ponto.classList.toggle("active", i === indiceSlideHeroAtual));
}

//Aqui é a minha lista de marcas que vai aparecer na tela inicial e na tela de marcas
const marcas = ["NIKE ANBUSH", "AIR FORCE", "GUCCI", "LOUIS VUITTON TRAINER", "COURT VISION BOROUGH", "NIKE DUNK", "AIR JORDAN"];

// Memória local do navegador para manter o que foi salvo
let carrinho = JSON.parse(localStorage.getItem("loja-carrinho") || "[]");
let favoritos = JSON.parse(localStorage.getItem("loja-favoritos") || "[]");

// Estados de controle para a página do produto específico
let produtoAtual = null;
let corSelecionada = "";
let tamanhoSelecionado = "";
let quantidadeSelecionada = 1;
let apenasPromocao = false;

// ==========================================
// FUNÇÕES ÚTEIS E DE COMPONENTES
// ==========================================

// Formata valores em Reais (R$)
const formatarMoeda = valor => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Exibe aquele alerta flutuante verde (Toast)
const mostrarAlerta = texto => {
  const elemento = document.getElementById("alertaFlutuante");
  elemento.textContent = texto;
  elemento.classList.add("show");
  setTimeout(() => elemento.classList.remove("show"), 2800);
};

// Salva dados no disco do usuário
const salvarDados = () => {
  localStorage.setItem("loja-carrinho", JSON.stringify(carrinho));
  localStorage.setItem("loja-favoritos", JSON.stringify(favoritos));
};

// Função responsável por trocar as telas (Navegação sem recarregar a página)
function mudarRota(nome, idDetalhe) {
  // Esconde todas as telas e mostra a solicitada
  document.querySelectorAll(".tela-visivel").forEach(tela => tela.classList.remove("active"));
  document.getElementById("tela" + nome.charAt(0).toUpperCase() + nome.slice(1)).classList.add("active");

  // Atualiza botões do menu superior
  document.querySelectorAll(".link-navegacao").forEach(link => {
    link.classList.toggle("active", link.dataset.rota === nome);
  });

  // Fecha o menu de celular se estiver aberto
  document.getElementById("menuCelularId").classList.remove("open");

  // Chama as funções específicas de preenchimento dependendo da tela
  if (nome === "catalogo") renderizarCatalogo();
  if (nome === "marcas") renderizarPaginaMarcas();
  if (nome === "carrinho") renderizarCarrinho();
  if (nome === "produto") renderizarProduto(idDetalhe);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Retorna o HTML padrão de um cartãozinho de tênis
function criarCartaoProduto(produto) {
  const ehFavorito = favoritos.includes(produto.id) ? "is-fav" : "";
  const htmlCores = produto.cores.map(cor => `<i class="amostra-cor" style="background:${cor[1]}" title="${cor[0]}"></i>`).join("");
  const badgeDesconto = produto.desconto ? `<span class="desconto">${produto.desconto}</span>` : "";
  const precoAnt = produto.precoAnterior ? `<span class="preco-antigo mr-2">${formatarMoeda(produto.precoAnterior)}</span>` : "";

  return `
    <article class="cartao-produto">
      <button class="coracao ${ehFavorito}" data-favoritar="${produto.id}" aria-label="Favoritar ${produto.nome}">
        <i data-lucide="heart"></i>
      </button>
      <div class="envolve-imagem-produto">
        <div class="visual-produto" style="background-image:url('${produto.imagens[0]}')"></div>
      </div>
      <div class="info-produto">
        <p class="marca-produto">${produto.marca}</p>
        <h3 class="nome-produto">${produto.nome}</h3>
        <div class="flex justify-between items-center">
          <span class="text-sm text-[#8EB69B]">★ ${produto.avaliacao}</span>
          ${badgeDesconto}
        </div>
        <div class="mt-3">
          ${precoAnt}<span class="preco">${formatarMoeda(produto.preco)}</span>
        </div>
        <div class="flex gap-1 mt-3">${htmlCores}</div>
        <div class="grid grid-cols-2 gap-2 mt-4">
          <button class="botao botao-contorno !px-2" data-detalhe="${produto.id}">DETALHES</button>
          <button class="botao botao-primario !px-2" data-adicionar-rapido="${produto.id}">ADICIONAR</button>
        </div>
      </div>
    </article>`;
}

// ==========================================
// RENDERIZAÇÃO DAS TELAS (O QUE APARECE NA TELA)
// ==========================================

function renderizarHome() {
  const htmlMarcas = marcas.map((marca, index) => `
    <button class="cartao-marca" data-marca="${marca}">
      <span class="text-xl font-bold">${String(index + 1).padStart(2, "0")}</span>
      <span>
        <strong class="block">${marca}</strong>
        <small class="texto-suave">${produtos.filter(p => p.marca === marca).length} modelos</small>
        <span class="block text-xs mt-3 text-[#8EB69B]">VER TÊNIS →</span>
      </span>
    </button>`).join("");
  document.getElementById("marcasInicio").innerHTML = htmlMarcas;

  const destaques = produtos.filter(produto => produto.destaque).slice(0, 4);
  document.getElementById("gradeDestaques").innerHTML = destaques.map(criarCartaoProduto).join("");
  lucide.createIcons();
}

// Mostra 4 cartõezinhos cinza pulsando no lugar dos produtos em destaque, só na primeira vez que o site abre
function mostrarEsqueletoDestaques() {
  document.getElementById("gradeDestaques").innerHTML = Array(4).fill('<div class="cartao-esqueleto"></div>').join("");
}

function preencherFiltrosDropwdown() {
  document.getElementById("filtroMarca").innerHTML = `<option value="">Todas as marcas</option>` + marcas.map(marca => `<option>${marca}</option>`).join("");
  const tamanhosDisponiveis = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43];
  document.getElementById("filtroTamanho").innerHTML = `<option value="">Todos os tamanhos</option>` + tamanhosDisponiveis.map(tam => `<option value="${tam}">${tam}</option>`).join("");
}

function obterProdutosFiltrados() {
  const busca = document.getElementById("entradaBusca").value.toLowerCase();
  const marca = document.getElementById("filtroMarca").value;
  const tamanho = Number(document.getElementById("filtroTamanho").value);
  const categoria = document.getElementById("filtroCategoria").value;
  const ordenacao = document.getElementById("filtroOrdenacao").value;

  let resultado = produtos.filter(produto =>
    (!busca || (produto.nome + produto.marca + produto.categoria).toLowerCase().includes(busca)) &&
    (!marca || produto.marca === marca) &&
    (!tamanho || produto.tamanhos.includes(tamanho)) &&
    (!categoria || produto.categoria === categoria) &&
    (!apenasPromocao || produto.promocao)
  );

  if (ordenacao === "low") resultado.sort((a, b) => a.preco - b.preco);
  if (ordenacao === "high") resultado.sort((a, b) => b.preco - a.preco);
  if (ordenacao === "sold") resultado.sort((a, b) => b.vendas - a.vendas);
  if (ordenacao === "promo") resultado.sort((a, b) => Number(b.promocao) - Number(a.promocao));

  return resultado;
}

function renderizarCatalogo() {
  const resultado = obterProdutosFiltrados();
  document.getElementById("gradeCatalogo").innerHTML = resultado.map(criarCartaoProduto).join("");
  document.getElementById("contadorResultados").textContent = `${resultado.length} modelos encontrados`;
  document.getElementById("catalogoVazio").classList.toggle("hidden", resultado.length > 0);
  lucide.createIcons(); // Recria os ícones inseridos dinamicamente
}

function renderizarPaginaMarcas() {
  document.getElementById("gradeMarcas").innerHTML = marcas.map((marca, index) => `
    <article class="cartao-marca min-h-[220px]">
      <span class="fonte-destaque text-5xl">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <p class="marca-produto">${produtos.filter(p => p.marca === marca).length} modelos disponíveis</p>
        <h2 class="fonte-destaque text-3xl mt-2">${marca}</h2>
        <button class="botao botao-contorno mt-5" data-marca="${marca}">VER TÊNIS</button>
      </div>
    </article>`).join("");
}

function renderizarProduto(id) {
  // Limpa estado atual e acha o produto
  produtoAtual = produtos.find(p => p.id === Number(id)) || produtos[0];
  corSelecionada = "";
  tamanhoSelecionado = "";
  quantidadeSelecionada = 1;
  const prod = produtoAtual;

  const galerias = prod.imagens.map((img, index) => `<button class="miniatura ${index === 0 ? "active" : ""}" data-imagem="${img}" style="background-image:url('${img}')"></button>`).join("");
  const escolhasCor = prod.cores.map((cor, index) => `<button class="botao-escolha escolha-cor" data-cor="${cor[0]}" data-img="${prod.imagens[index] || prod.imagens[0]}" style="border-left:8px solid ${cor[1]}">${cor[0]}</button>`).join("");
  const escolhasTamanho = prod.tamanhos.map(tam => `<button class="botao-escolha escolha-tamanho" data-tamanho="${tam}">${tam}</button>`).join("");
  const precoAntHtml = prod.precoAnterior ? `<span class="preco-antigo">${formatarMoeda(prod.precoAnterior)}</span>` : "";
  const descontoHtml = prod.desconto ? `<span class="desconto">${prod.desconto}</span>` : "";

  document.getElementById("detalheProduto").innerHTML = `
    <div class="grid lg:grid-cols-2 gap-9">
      <div>
        <div id="imagemPrincipalId" class="imagem-principal-produto" style="background-image:url('${prod.imagens[0]}')"></div>
        <div class="flex gap-3 mt-3">${galerias}</div>
      </div>
      <div>
        <p class="marca-produto">${prod.marca}</p>
        <h1 class="fonte-destaque text-4xl md:text-6xl leading-none mt-3">${prod.nome}</h1>
        <div class="flex flex-wrap gap-3 items-center mt-5">
          <strong class="text-2xl">${formatarMoeda(prod.preco)}</strong>
          ${precoAntHtml} ${descontoHtml}
        </div>
        <p class="texto-suave leading-relaxed mt-6">${prod.descricao}</p>
        <p class="text-sm mt-4">★ ${prod.avaliacao} · <span class="text-[#8EB69B]">${prod.estoque} unidades em estoque</span></p>
        
        <div class="mt-7">
          <h2 class="font-bold">Cor</h2>
          <div class="flex flex-wrap gap-2 mt-3">${escolhasCor}</div>
        </div>
        <div class="mt-6">
          <h2 class="font-bold">Tamanho</h2>
          <div class="flex flex-wrap gap-2 mt-3">${escolhasTamanho}</div>
        </div>
        <div class="mt-6">
          <h2 class="font-bold">Quantidade</h2>
          <div class="flex gap-2 mt-3">
            <button class="botao-escolha" id="diminuirQuantidade" aria-label="Diminuir quantidade">−</button>
            <span id="valorQuantidade" class="botao-escolha pointer-events-none">1</span>
            <button class="botao-escolha" id="aumentarQuantidade" aria-label="Aumentar quantidade">+</button>
          </div>
        </div>
        <p id="erroProduto" class="text-sm text-[#8EB69B] mt-5 hidden" role="alert"></p>
        <button id="botaoAdicionarCarrinho" class="botao botao-primario w-full mt-7">ADICIONAR AO CARRINHO</button>
      </div>
    </div>`;
}

function adicionarAoCarrinho(produto, cor, tamanho, quantidade = 1) {
  const itemExistente = carrinho.find(item => item.id === produto.id && item.cor === cor && item.tamanho === tamanho);
  if (itemExistente) {
    itemExistente.quantidade += quantidade;
  } else {
    carrinho.push({ id: produto.id, cor: cor, tamanho: tamanho, quantidade: quantidade });
  }
  salvarDados();
  atualizarContadores();
  mostrarAlerta("Tênis adicionado ao carrinho.");
}

function renderizarCarrinho() {
  const conteiner = document.getElementById("conteudoCarrinho");

  if (!carrinho.length) {
    conteiner.innerHTML = `
      <div class="estado-vazio">
        <i data-lucide="shopping-bag" class="mx-auto mb-4"></i>
        <p>Seu carrinho está esperando o próximo par.</p>
        <button data-rota="catalogo" class="botao botao-primario mt-6">VER TÊNIS</button>
      </div>`;
    lucide.createIcons();
    return;
  }

  let somaTotal = 0;
  const htmlItens = carrinho.map((item, index) => {
    const prod = produtos.find(p => p.id === item.id);
    const subtotal = prod.preco * item.quantidade;
    somaTotal += subtotal;

    return `
      <article class="bg-[#0B2B26] border border-[#daf1de24] p-4 flex flex-col sm:flex-row gap-4">
        <div class="w-full sm:w-28 h-28 bg-cover bg-center" style="background-image:url('${prod.imagens[0]}')"></div>
        <div class="flex-1">
          <p class="marca-produto">${prod.marca}</p>
          <h2 class="font-bold text-lg">${prod.nome}</h2>
          <p class="texto-suave text-sm mt-1">${item.cor} · Tamanho ${item.tamanho}</p>
          <p class="font-bold mt-3">${formatarMoeda(prod.preco)}</p>
          <div class="flex items-center gap-2 mt-4">
            <button class="botao-escolha !py-1" data-carrinho-menos="${index}">−</button>
            <span class="px-2">${item.quantidade}</span>
            <button class="botao-escolha !py-1" data-carrinho-mais="${index}">+</button>
            <button class="ml-auto text-sm text-[#8EB69B] underline" data-remover="${index}">REMOVER</button>
          </div>
        </div>
        <strong class="sm:self-end">${formatarMoeda(subtotal)}</strong>
      </article>`;
  }).join("");

  conteiner.innerHTML = `
    <div class="grid lg:grid-cols-[1fr_360px] gap-7">
      <div class="space-y-4">${htmlItens}</div>
      <aside class="bg-[#163832] border border-[#daf1de24] p-6 h-fit">
        <h2 class="fonte-destaque text-3xl">Resumo do pedido</h2>
        <div class="flex justify-between mt-7 pt-5 border-t border-[#daf1de24]">
          <span class="font-bold">TOTAL DO PEDIDO</span>
          <strong class="text-xl">${formatarMoeda(somaTotal)}</strong>
        </div>
        <button id="finalizarWhatsapp" class="botao botao-primario w-full mt-7">FINALIZAR PEDIDO PELO WHATSAPP</button>
      </aside>
    </div>`;
}

function atualizarContadores() {
  document.getElementById("contadorCarrinho").textContent = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  document.getElementById("contadorFavoritos").textContent = favoritos.length;
}

function limparFiltrosCatalogo() {
  document.getElementById("entradaBusca").value = "";
  document.getElementById("filtroMarca").value = "";
  document.getElementById("filtroTamanho").value = "";
  document.getElementById("filtroCategoria").value = "";
  document.getElementById("filtroOrdenacao").value = "recent";
  apenasPromocao = false;
  renderizarCatalogo();
}

function dispararCheckoutWhatsapp() {
  if (!carrinho.length) {
    mostrarAlerta("Adicione ao menos um produto para finalizar.");
    return;
  }
  let totalCalculado = 0;
  const textoItens = carrinho.map(item => {
    const prod = produtos.find(p => p.id === item.id);
    totalCalculado += prod.preco * item.quantidade;
    return `• ${prod.marca} ${prod.nome}\n  Cor: ${item.cor} | Tam: ${item.tamanho} | Qtd: ${item.quantidade}\n  Sub: ${formatarMoeda(prod.preco * item.quantidade)}`;
  }).join("\n\n");

  const mensagemPronta = `Olá! Quero finalizar este pedido na DG IMPORTSS 01:\n\n${textoItens}\n\n*Total:* ${formatarMoeda(totalCalculado)}`;
  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagemPronta)}`, "_blank");
}

// ==========================================
// CENTRAL DE EVENTOS DE CLIQUE
// ==========================================
document.addEventListener("click", evento => {
  // 1. Controle de Rotas / Telas
  const botaoRota = evento.target.closest("[data-rota]");
  if (botaoRota) { mudarRota(botaoRota.dataset.rota); return; }

  // 1.1 Bolinhas do carrossel do banner
  const botaoPonto = evento.target.closest("[data-ponto-carrossel]");
  if (botaoPonto) { irParaSlideHero(Number(botaoPonto.dataset.pontoCarrossel)); return; }

  // 2. Filtro de Marcas
  const botaoMarca = evento.target.closest("[data-marca]");
  if (botaoMarca) {
    mudarRota("catalogo");
    document.getElementById("filtroMarca").value = botaoMarca.dataset.marca;
    renderizarCatalogo();
    return;
  }

  // 3. Detalhe do Produto
  const botaoDetalhe = evento.target.closest("[data-detalhe]");
  if (botaoDetalhe) { mudarRota("produto", botaoDetalhe.dataset.detalhe); return; }

  // 4. Adicionar ao Carrinho (Botão Rápido da Lista)
  const botaoRapido = evento.target.closest("[data-adicionar-rapido]");
  if (botaoRapido) {
    const prod = produtos.find(p => p.id === Number(botaoRapido.dataset.adicionarRapido));
    adicionarAoCarrinho(prod, prod.cores[0][0], prod.tamanhos[0]);
    return;
  }

  // 5. Sistema de Favoritar (Coração)
  const botaoFavoritar = evento.target.closest("[data-favoritar]");
  if (botaoFavoritar) {
    const idProd = Number(botaoFavoritar.dataset.favoritar);
    if (favoritos.includes(idProd)) {
      favoritos = favoritos.filter(f => f !== idProd);
    } else {
      favoritos.push(idProd);
    }
    salvarDados();
    atualizarContadores();
    renderizarCatalogo();
    renderizarHome();

    // A grade acabou de ser recriada, então o pulso é aplicado nos corações novos desse mesmo produto
    document.querySelectorAll(`[data-favoritar="${idProd}"]`).forEach(coracao => {
      coracao.classList.add("pulsando");
      setTimeout(() => coracao.classList.remove("pulsando"), 400);
    });
    return;
  }

  // 6. Troca de Miniaturas na tela de Produto
  const botaoMiniatura = evento.target.closest("[data-imagem]");
  if (botaoMiniatura) {
    document.getElementById("imagemPrincipalId").style.backgroundImage = `url('${botaoMiniatura.dataset.imagem}')`;
    document.querySelectorAll(".miniatura").forEach(m => m.classList.toggle("active", m === botaoMiniatura));
    return;
  }

  // 7. Escolher Cor ou Tamanho (Tela Produto)
  const cliqueCor = evento.target.closest(".escolha-cor");
  if (cliqueCor) {
    corSelecionada = cliqueCor.dataset.cor;
    document.querySelectorAll(".escolha-cor").forEach(node => node.classList.toggle("selected", node === cliqueCor));

    // Altera a imagem principal para a foto atrelada a esta cor
    document.getElementById("imagemPrincipalId").style.backgroundImage = `url('${cliqueCor.dataset.img}')`;
    return;
  }

  const cliqueTamanho = evento.target.closest(".escolha-tamanho");
  if (cliqueTamanho) {
    tamanhoSelecionado = Number(cliqueTamanho.dataset.tamanho);
    document.querySelectorAll(".escolha-tamanho").forEach(node => node.classList.toggle("selected", node === cliqueTamanho));
    return;
  }

  // 8. Botões simples (IDs fixos)
  const objClicado = evento.target.id;
  if (objClicado === "diminuirQuantidade") {
    quantidadeSelecionada = Math.max(1, quantidadeSelecionada - 1);
    document.getElementById("valorQuantidade").textContent = quantidadeSelecionada;
  }
  if (objClicado === "aumentarQuantidade") {
    quantidadeSelecionada++;
    document.getElementById("valorQuantidade").textContent = quantidadeSelecionada;
  }

  if (objClicado === "botaoAdicionarCarrinho") {
    const erro = document.getElementById("erroProduto");
    if (!corSelecionada || !tamanhoSelecionado) {
      erro.textContent = "Selecione uma cor e um tamanho antes de adicionar ao carrinho.";
      erro.classList.remove("hidden");
      return;
    }
    adicionarAoCarrinho(produtoAtual, corSelecionada, tamanhoSelecionado, quantidadeSelecionada);
    erro.classList.add("hidden");
  }

  // 9. Modificar carrinho (Mais, Menos, Remover)
  const cartMais = evento.target.closest("[data-carrinho-mais]");
  if (cartMais) {
    carrinho[Number(cartMais.dataset.carrinhoMais)].quantidade++;
    salvarDados(); atualizarContadores(); renderizarCarrinho();
  }

  const cartMenos = evento.target.closest("[data-carrinho-menos]");
  if (cartMenos) {
    const i = Number(cartMenos.dataset.carrinhoMenos);
    if (carrinho[i].quantidade > 1) carrinho[i].quantidade--;
    else carrinho.splice(i, 1);
    salvarDados(); atualizarContadores(); renderizarCarrinho();
  }

  const cartRemover = evento.target.closest("[data-remover]");
  if (cartRemover) {
    carrinho.splice(Number(cartRemover.dataset.remover), 1);
    salvarDados(); atualizarContadores(); renderizarCarrinho();
  }

  // 10. Funções Gerais (Finalizar Pedido, Contatos, Limpar Filtros)
  if (objClicado === "finalizarWhatsapp") dispararCheckoutWhatsapp();
  if (objClicado === "whatsappContato" || objClicado === "whatsappRodape") window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=Olá! Gostaria de tirar uma dúvida sobre a DG IMPORTSS 01`, "_blank");
  if (objClicado === "instagramRodape") window.open("https://www.instagram.com/dg.importss_01?stkn=MTFtZ2c2ZTN3aGF1aw%3D%3D&utm_source=qr", "_blank");
  if (objClicado === "limparFiltros" || objClicado === "limparVazio") limparFiltrosCatalogo();
  if (objClicado === "filtroPromocao") {
    apenasPromocao = !apenasPromocao;
    evento.target.classList.toggle("botao-primario", apenasPromocao);
    evento.target.classList.toggle("botao-contorno", !apenasPromocao);
    renderizarCatalogo();
  }
});

// ==========================================
// LISTENERS DIRETOS & INICIALIZAÇÃO
// ==========================================

// Faz a busca/filtros funcionarem enquanto o usuário digita ou seleciona as opções
["entradaBusca", "filtroMarca", "filtroTamanho", "filtroCategoria", "filtroOrdenacao"].forEach(id =>
  document.getElementById(id).addEventListener("input", renderizarCatalogo)
);

// Toggle Menu Mobile
document.getElementById("botaoMenu").addEventListener("click", () => {
  const menu = document.getElementById("menuCelularId");
  const isOpen = menu.classList.toggle("open");
  document.getElementById("botaoMenu").setAttribute("aria-expanded", String(isOpen));
});

// Botão de Busca Rápida (Lupa)
document.getElementById("botaoBuscar").addEventListener("click", () => {
  mudarRota("catalogo");
  setTimeout(() => document.getElementById("entradaBusca").focus(), 350);
});

// Botão Rápido de Favoritos
document.getElementById("botaoFavoritos").addEventListener("click", () => {
  mudarRota("catalogo");
  document.getElementById("entradaBusca").value = "";
  document.getElementById("filtroMarca").value = "";
  renderizarCatalogo();
  mostrarAlerta(favoritos.length ? "Você pode identificar seus produtos favoritos pelos corações preenchidos." : "Você ainda não favoritou produtos.");
});

// INICIALIZANDO O SITE
preencherFiltrosDropwdown();
mostrarEsqueletoDestaques();
setTimeout(renderizarHome, 350); // dá aquele efeito de "carregando" antes de mostrar os produtos
atualizarContadores();
lucide.createIcons();

montarCarrosselHero();
setInterval(avancarSlideHero, 5000); // troca de foto a cada 5 segundos