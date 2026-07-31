/* =====================================================================
   PARÓQUIA NOSSA SENHORA DO ROSÁRIO — script.js
   Site público informativo (sem banco de dados externo nesta versão).

   Organização do arquivo:
     1. CONFIGURAÇÕES PRINCIPAIS DA PARÓQUIA (edite aqui)
     2. DADOS PÚBLICOS POR IGREJA (edite aqui: horários, avisos, eventos,
        fotos, WhatsApp, Google Maps de cada igreja/capela)
     3. DADOS DO PIX
     4. AVATARES DE PERFIL
     5. LOCALSTORAGE (nome do usuário, avatar e preferências pessoais)
     6. USUÁRIO
     7. ACESSIBILIDADE
     8. PWA
     9. UTILITÁRIOS DE DATA E IMAGEM
     10. RENDERIZAÇÃO
     11. GALERIA / CARROSSEL DE FOTOS
     12. ANIMAÇÕES DE TOQUE (incluindo efeito ripple)
     13. EVENTOS DE INTERFACE
     14. INICIALIZAÇÃO

   SOBRE A ÁREA DE COORDENADOR:
   Esta versão do site é 100% pública e estática — não existe banco de
   dados online, então uma área de "login do coordenador" no navegador
   não teria efeito real (mudanças feitas por uma pessoa não apareceriam
   para as demais). Por isso essa área foi removida da interface.
   Para atualizar horários, avisos, eventos, igrejas, PIX etc., edite
   diretamente as constantes da seção 2 abaixo e publique o site
   novamente. O código permanece organizado para que, no futuro, essas
   mesmas informações possam vir de um backend/banco de dados online,
   com uma área administrativa de verdade (autenticação segura, HTTPS,
   sessões etc.), sem precisar reconstruir a interface visual.
   ===================================================================== */


/* =====================================================================
   1. CONFIGURAÇÕES PRINCIPAIS DA PARÓQUIA
   ALTERE OS VALORES ABAIXO PARA PERSONALIZAR O SITE
   ===================================================================== */

// Nome principal da paróquia
const NOME_PAROQUIA = "Paróquia Nossa Senhora do Rosário";
// Nome curto (usado em espaços menores)
const NOME_CURTO_PAROQUIA = "Paróquia N. Sra. do Rosário";
// Nome exibido como título do aplicativo/site (tela Sobre)
const NOME_APP = "Paróquia N. Sra. do Rosário";
// Breve descrição (opcional, usada na tela Sobre)
const DESCRICAO_PAROQUIA = "";
// Nome do desenvolvedor do site
const NOME_DESENVOLVEDOR = "Cleiton Lima";
// Versão do site/aplicativo
const VERSAO_APP = "1.0.8";
// Telefone e endereço gerais da paróquia (exibidos na tela Sobre)
const TELEFONE_PAROQUIA = "(87) 3831-2814";
const ENDERECO_PAROQUIA = "Rua Principal, 100 — Centro";

// FRASE OU VERSÍCULO EXIBIDO NA ÁREA SUPERIOR (rodapé do aplicativo)
// Troque o texto abaixo por um versículo, uma saudação ou outra frase.
// Exemplos: "É necessário que Ele cresça e que eu diminua." ou
// "Deus abençoe o seu dia!"
const FRASE_RODAPE = NOME_PAROQUIA;

// Rede social oficial da paróquia (única para todas as igrejas/capelas)
const REDE_SOCIAL_OFICIAL = {
  rotulo: "@paroquiaadorosario",
  url: "https://www.instagram.com/paroquiaadorosario?igsh=NDV1Y2lqdnJwaDAw",
  // IMAGEM DO CARD "REDE SOCIAL OFICIAL DA PARÓQUIA" (aparece na aba
  // Igrejas). Opcional — deixe "" para continuar mostrando o ícone 📱.
  // Tamanho recomendado: 1200 x 700 px (mesmo padrão da imagem das
  // igrejas). Exemplo: "assets/Logos/instagram-capa.jpg"
  imagem: "assets/Logos/Instagram.webp"
};

// ========================================
// IMAGEM PRINCIPAL DA PARÓQUIA
// Usada no primeiro acesso, na tela de boas-vindas e no topo da tela
// inicial. Esta imagem é inserida diretamente no HTML (index.html) —
// para trocá-la, veja os comentários lá. Aqui ela só é usada como
// referência para o comportamento (ex.: fallback de imagem quebrada).
// Tamanho recomendado: 900 x 900 px (quadrada, para não cortar mal
// dentro do círculo). Formato: JPG, JPEG ou webp.
// ========================================
const IMAGEM_PAROQUIA = "assets/Logos/Brasão Rosário.webp";

// ========================================
// LOGO OFICIAL DA PARÓQUIA
// Também inserida diretamente no HTML (primeiro acesso, boas-vindas e
// rodapé) — veja os comentários no index.html.
// Tamanho recomendado: 500 x 500 px.
// ========================================
const LOGO_PAROQUIA = "assets/Logos/Brasão Rosário.webp";


/* =====================================================================
   2. DADOS PÚBLICOS POR IGREJA
   ============================================================
   COMO ADICIONAR UMA NOVA IGREJA
   1. Copie o bloco de uma igreja existente (de "nomeDaIgreja: {" até
      o "}," que fecha o bloco);
   2. Altere a chave (o nome antes de ":", ex.: "novaIgreja");
   3. Altere "nome", "cor", "endereco", "contato" e "descricao";
   4. Altere "logo", "imagem" e a lista "fotos" (veja a pasta assets/);
   5. Altere (ou apague) "whatsapp" e "googleMaps";
   6. Adicione os horários dentro de "horarios: [ ... ]";
   7. Adicione os avisos dentro de "avisos: [ ... ]";
   8. Adicione os eventos dentro de "eventos: [ ... ]".
   ============================================================
   Imagens: pastas dentro de assets/, uma por igreja (ex.:
   assets/Imagens_Rosario/, assets/Imagens_SaoCristovao/...).
   - Imagem principal da igreja: tamanho recomendado 1200 x 700 px,
     formato JPG, JPEG ou PNG.
   - Fotos da galeria (lista "fotos"): tamanho recomendado 1200 x 800 px.
   O sistema aceita fotos verticais e horizontais sem deformar nenhuma
   delas (o espaço restante usa uma cor de fundo compatível).
   ===================================================================== */
const IGREJAS = {

  rosario: {
    nome: "Paróquia Nossa Senhora do Rosário",
    cor: "#a80d22",
    endereco: "138, Praça Agamenon Magalhães, 102 - Nossa Sra. da Penha, Serra Talhada - PE, 56903-530",
    contato: "",
    descricao: "Igreja matriz da paróquia.",
    logo: "",
    imagem: "assets/Imagens_Rosario/Rosário (1).webp",
    // ADICIONE NOVAS FOTOS DA IGREJA NESTA LISTA
    fotos: [
      "assets/Imagens_Rosario/Rosário (1).webp",
      "assets/Imagens_Rosario/Rosário (2).webp",
      "assets/Imagens_Rosario/Rosário (3).webp",
      "assets/Imagens_Rosario/Rosário (4).webp",
      "assets/Imagens_Rosario/Rosário (5).webp",
      "assets/Imagens_Rosario/Rosário (6).webp",
      "assets/Imagens_Rosario/Rosário (7).webp",
      "assets/Imagens_Rosario/Rosário (8).webp",
      "assets/Imagens_Rosario/Rosário (9).webp",
      "assets/Imagens_Rosario/Rosário (10).webp"
    ],
    // Número do WhatsApp com código do país e DDD (somente números).
    // Exemplo: 5587999999999 — deixe em branco ("") para ocultar o botão.
    whatsapp: "",
    // Link do Google Maps apontando para a igreja (deixe em branco para
    // ocultar o botão). Basta abrir o local no Google Maps e copiar o
    // link de compartilhamento.
    googleMaps: "https://maps.app.goo.gl/Exp2J25ehiRKnRocA",

    // ADICIONE OU EDITE OS HORÁRIOS DESTA IGREJA AQUI
    // "data" é opcional (AAAA-MM-DD); quando informada, o dia da semana
    // é calculado automaticamente e a data completa aparece na listagem.
    horarios: [
      { id: "h1", nome: "Celebração Eucaristica", tipo: "Missa", data: proximaDataParaDia(0), horario: "06:30", recorrencia: "Semanal", descricao: "Celebração Eucaristica na Matriz de Nossa Senhora do Rosário." },
      { id: "h2", nome: "Adoração ao Santissimo Sacramento", tipo: "Adoração", data: proximaDataParaDia(4), horario: "18:00", recorrencia: "Semanal", descricao: "Adoração ao Santíssimo Sacramento na Matriz." },
      { id: "h3", nome: "Celebração Eucaristica", tipo: "Missa", data: proximaDataParaDia(4), horario: "19:00", recorrencia: "Semanal", descricao: "Celebração Eucarística da Matriz, encerrando com a Bênção do Santíssimo Sacramento." }
    ],
    // ADICIONE OU EDITE OS AVISOS DESTA IGREJA AQUI
    // Prioridade: "Normal", "Importante" ou "Urgente".
    avisos: [
    /*{ id: "a1", titulo: "Formação para Catequistas", texto: "Encontro de formação neste sábado, às 19h30, no salão paroquial.", prioridade: "Importante", data: proximosDias(3) },
      { id: "a2", titulo: "Confissões canceladas nesta sexta", texto: "Não haverá confissões nesta sexta-feira devido a compromisso do pároco.", prioridade: "Urgente", data: proximosDias(1) }
    */
    ],
    // ADICIONE OU EDITE OS EVENTOS DESTA IGREJA AQUI
    eventos: [
    /*{ id: "e1", nome: "Festa do Padroeiro", data: proximosDias(20), horario: "10:00", local: "Praça da Igreja Matriz", descricao: "Celebração e festa comunitária em honra ao padroeiro." }
    */
    ]
  },

  conceicao: {
    nome: "Capela de Nossa Senhora da Conceição",
    cor: "#096d9b",
    endereco: "R. Antônio de Melo Lima, 416 - Nossa Sra. da Conceicao, Serra Talhada - PE, 56903-240",
    contato: "(87) 3831-2814",
    descricao: "Capela comunitária do bairro da Conceição.",
    logo: "",
    imagem: "assets/Imagens_Conceicao/Conceição (6).webp",
    fotos: [
      "assets/Imagens_Conceicao/Conceição (6).webp",
      "assets/Imagens_Conceicao/Conceição (4).webp",
      "assets/Imagens_Conceicao/Conceição (1).webp",
      "assets/Imagens_Conceicao/Conceição (2).webp",
      "assets/Imagens_Conceicao/Conceição (5).webp"
    ],
    whatsapp: "5587999733693",
    googleMaps: "https://maps.app.goo.gl/nbuQaZyYRrKayqa4A",
    horarios: [
      { id: "h4", nome: "Celebração Eucaristica", tipo: "Missa", data: proximaDataParaDia(0), horario: "19:00", recorrencia: "Semanal", descricao: "Celebração Eucaristica na Capela de Nossa Senhora da Conceição." },
      { id: "h5", nome: "Confições Individuais", tipo: "Confições", data: proximaDataParaDia(6), horario: "09:00 às 11:00", recorrencia: "Semanal", descricao: "Confições individuais na secretaria paroquial." }
    ],
    avisos: [],
    eventos: []
  },

  saoCristovao: {
    nome: "Capela de São Cristóvão",
    cor: "#15912a",
    endereco: "São Cristovao, Serra Talhada - PE, 56903-160",
    contato: "",
    descricao: "Capela comunitária do bairro São Cristóvão.",
    logo: "",
    imagem: "assets/Imagens_SaoCristovao/São Cristóvão (1).webp",
    fotos: [
      "assets/Imagens_SaoCristovao/São Cristóvão (5).webp",
      "assets/Imagens_SaoCristovao/São Cristóvão (1).webp",
      "assets/Imagens_SaoCristovao/São Cristóvão (2).webp",
      "assets/Imagens_SaoCristovao/São Cristóvão (3).webp",
      "assets/Imagens_SaoCristovao/São Cristóvão (4).webp"
    ],
    whatsapp: "",
    googleMaps: "https://maps.app.goo.gl/6VhxPcnGeSV1GU8W7",
    horarios: [
      { id: "h3", nome: "Celebração Eucaristica", tipo: "Missa", data: proximaDataParaDia(6), horario: "19:00", recorrencia: "Semanal", descricao: "Celebração Eucaristica na Capela de São Cristóvão." }
    ],
    avisos: [],
    eventos: [
      /*{ id: "e2", nome: "Retiro de Jovens", data: proximosDias(35), horario: "08:00", local: "Casa de Retiros", descricao: "Retiro espiritual para jovens da comunidade." }
      */
    ]
  },

  cruzDaMoca: {
    nome: "Capela Nossa Senhora do Carmo (Cruz da Moça)",
    cor: "#774c29",
    endereco: "R. Isidoro Conrado - São Cristovao, Serra Talhada - PE, 56903-090",
    contato: "",
    descricao: "Capela comunitária da Cruz da Moça.",
    logo: "",
    imagem: "assets/Imagens_CruzDaMoca/Cruz da Moça.webp",
    fotos: [
      "assets/Imagens_CruzDaMoca/Cruz da Moça.webp"
    ],
    whatsapp: "",
    googleMaps: "https://maps.app.goo.gl/zBmvRMC3W1p9vEPo7",
    horarios: [],
    avisos: [],
    eventos: []
  }

};

// Funções auxiliares usadas apenas para gerar datas de exemplo acima.
function proximosDias(qtd){
  const d = new Date();
  d.setDate(d.getDate() + qtd);
  return d.toISOString().slice(0,10);
}
function proximaDataParaDia(diaAlvo){
  const d = new Date();
  const diff = (diaAlvo - d.getDay() + 7) % 7;
  d.setDate(d.getDate() + diff);
  return d.toISOString().slice(0,10);
}


/* =====================================================================
   3. DADOS DO PIX
   EDITE OS DADOS DO PIX AQUI
   ===================================================================== */
const DADOS_PIX = {
  // ALTERE A CHAVE PIX AQUI
  chave: "000.000.000-00",
  // ALTERE O TIPO DA CHAVE PIX AQUI
  tipo: "CPF/CNPJ",
  destinatario: NOME_PAROQUIA,
  // QR CODE DO PIX
  // Para trocar o QR Code, substitua o arquivo:
  // assets/Oferta/Pixteste.png (ajuste o caminho abaixo se o nome mudar)
  qrcode: "assets/Oferta/Pixteste.webp",
  informacoes: "Sua oferta ajuda a manter as obras sociais e a estrutura da paróquia."
};


/* =====================================================================
   4. AVATARES DE PERFIL
   Imagens de santos que a pessoa pode escolher como avatar no primeiro
   acesso (ou depois, em Configurações). Guarde as imagens em
   assets/Avatares/ — tamanho recomendado: 400 x 400 px (quadrada).
   Para adicionar um novo avatar, copie uma linha e ajuste id/nome/imagem.
   ===================================================================== */
const AVATARES = [
  { id: "jesus-cristo", nome: "Jesus Cristo", imagem: "assets/Avatares/Jesus.webp" },
  { id: "rosario", nome: "Nossa Senhora do Rosário", imagem: "assets/Avatares/Nossa Senhora do Rosário.webp" },
  { id: "conceicao", nome: "Nossa Senhora da Conceição", imagem: "assets/Avatares/Nossa Senhora da Conceição.webp" },
  { id: "carmo", nome: "Nossa Senhora do Carmo", imagem: "assets/Avatares/Nossa Senhora do Carmo.webp" },
  { id: "fatima", nome: "Nossa Senhora de Fátima", imagem: "assets/Avatares/Nossa Senhora de Fátima.webp" },
  { id: "gracas", nome: "Nossa Senhora das Graças", imagem: "assets/Avatares/Nossa Senhora das Graças.webp" },
  { id: "aparecida", nome: "Nossa Senhora Aparecida", imagem: "assets/Avatares/Nossa Senhora Aparecida.webp" },
  { id: "sao-cristovao", nome: "São Cristóvão", imagem: "assets/Avatares/São Cristóvão.webp" },
  { id: "sao-jose", nome: "São José", imagem: "assets/Avatares/São José.webp" },
  { id: "santa-luzia", nome: "Santa Luzia", imagem: "assets/Avatares/Santa Luzia.webp" },
  { id: "santa-terezinha", nome: "Santa Terezinha", imagem: "assets/Avatares/Santa Terezinha.webp" },
  { id: "santo-antonio", nome: "Santo Antônio", imagem: "assets/Avatares/Santo Antônio.webp" },
  { id: "acutis", nome: "São Carlo Acutis", imagem: "assets/Avatares/São Carlo Acutis.webp" },
  { id: "fracisco-assis", nome: "São Francisco de Assis", imagem: "assets/Avatares/São Francisco de Assis.webp" }
];
function obterAvatar(id){ return AVATARES.find(a => a.id === id) || null; }


/* =====================================================================
   5. LOCALSTORAGE
   Nesta versão pública e estática, o localStorage guarda apenas
   informações pessoais do próprio visitante no seu navegador: nome,
   avatar escolhido e preferências de aparência/acessibilidade. Nenhum
   dado da paróquia (horários, avisos, eventos, igrejas, PIX) é salvo
   aqui — esses dados vêm sempre das constantes das seções acima.
   ===================================================================== */
const CHAVES = {
  usuario: "paroquia_usuario",
  preferencias: "paroquia_preferencias"
};

function salvarLS(chave, valor){
  try{
    localStorage.setItem(chave, JSON.stringify(valor));
  }catch(e){
    console.error("Não foi possível salvar localmente:", e);
  }
}
function lerLS(chave, padrao){
  try{
    const bruto = localStorage.getItem(chave);
    return bruto ? JSON.parse(bruto) : padrao;
  }catch(e){
    return padrao;
  }
}


/* =====================================================================
   6. USUÁRIO
   ===================================================================== */
function obterUsuario(){
  return lerLS(CHAVES.usuario, null);
}
function salvarUsuario(nomeCompleto, apelido, avatarId){
  const atual = obterUsuario() || {};
  salvarLS(CHAVES.usuario, {
    nomeCompleto: nomeCompleto !== undefined ? nomeCompleto : atual.nomeCompleto,
    apelido: apelido !== undefined ? apelido : atual.apelido,
    avatar: avatarId !== undefined ? avatarId : atual.avatar
  });
}


/* =====================================================================
   7. ACESSIBILIDADE
   O ajuste de tamanho de fonte foi removido (não estava funcionando de
   forma consistente e podia quebrar o layout em celulares). Os modos
   mantidos são: tema claro/escuro, alto contraste, daltonismo e
   redução de animações — todos aplicados via atributos no <html>, que
   o CSS usa para trocar as variáveis de cor (ver style.css).
   ===================================================================== */
function obterPreferencias(){
  return lerLS(CHAVES.preferencias, {
    tema: "claro",
    altoContraste: false,
    daltonismo: "nenhum",
    reduzirAnimacoes: false
  });
}
function salvarPreferencias(prefs){
  salvarLS(CHAVES.preferencias, prefs);
  aplicarPreferencias(prefs);
}
function aplicarPreferencias(prefs){
  const raiz = document.documentElement;
  raiz.setAttribute("data-tema", prefs.tema);
  raiz.setAttribute("data-alto-contraste", String(prefs.altoContraste));
  raiz.setAttribute("data-daltonismo", prefs.daltonismo);
  raiz.setAttribute("data-reduzir-animacoes", String(prefs.reduzirAnimacoes));
}


/* =====================================================================
   8. PWA
   ===================================================================== */
function registrarPWA(){
  if("serviceWorker" in navigator){
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {
        // Falha silenciosa: o site continua funcionando normalmente sem PWA.
      });
    });
  }
}


/* =====================================================================
   9. UTILITÁRIOS DE DATA, IGREJA E IMAGEM
   ===================================================================== */
function calcularDiaSemana(dataISO){
  if(!dataISO) return "";
  const d = new Date(dataISO + "T00:00:00");
  const nome = d.toLocaleDateString("pt-BR", { weekday: "long" });
  return nome.charAt(0).toUpperCase() + nome.slice(1);
}
function formatarDataBR(dataISO){
  if(!dataISO) return "";
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}
// Linha de data completa usada em horários e eventos, ex.:
// "📅 22/07/2026 · 📆 Domingo · 🕒 19h"
function linhaDataCompleta(dataISO, horario){
  if(!dataISO) return "";
  const hora = horario ? ` · 🕒 ${horario}` : "";
  return `📅 ${formatarDataBR(dataISO)} · 📆 ${calcularDiaSemana(dataISO)}${hora}`;
}

// Lista todas as igrejas como um array (mais fácil de percorrer para
// renderizar), incluindo o "id" (a chave usada em IGREJAS) em cada item.
function listarIgrejasArray(){
  return Object.keys(IGREJAS).map(id => ({ id, ...IGREJAS[id] }));
}
function obterIgreja(id){
  return IGREJAS[id] ? { id, ...IGREJAS[id] } : null;
}
function nomeIgreja(id){ const i = obterIgreja(id); return i ? i.nome : "Igreja não informada"; }
function corIgreja(id){ const i = obterIgreja(id); return i ? i.cor : "#999999"; }

// Reúne horários/avisos/eventos de todas as igrejas em uma única lista,
// já com "igrejaId" marcado em cada item (facilita filtrar por igreja).
function listarHorarios(){
  return listarIgrejasArray()
    .flatMap(i => (i.horarios || []).map(h => ({ ...h, igrejaId: i.id })))
    .sort((a,b) => (a.data || "").localeCompare(b.data || ""));
}
function listarAvisos(){
  return listarIgrejasArray()
    .flatMap(i => (i.avisos || []).map(a => ({ ...a, igrejaId: i.id })))
    .sort((a,b) => new Date(a.data) - new Date(b.data));
}
function listarEventos(){
  return listarIgrejasArray()
    .flatMap(i => (i.eventos || []).map(e => ({ ...e, igrejaId: i.id })))
    .sort((a,b) => new Date(a.data) - new Date(b.data));
}

// Link "wa.me" a partir do número cadastrado na igreja (com código do
// país e DDD, só números).
function linkWhatsApp(numero){
  return `https://wa.me/${numero.replace(/\D/g, "")}`;
}

// lidarFalhaImagem() já está definida em index.html (dentro de <head>),
// para garantir que funcione mesmo antes deste arquivo carregar. Aqui
// só geramos o atributo onerror para imagens montadas via JavaScript
// (fotos de igrejas na galeria, avatares, QR Code).
function comFallbackImagem(imgHtml, simboloReserva){
  return imgHtml.replace("<img ", `<img onerror="lidarFalhaImagem(this,'${simboloReserva}')" `);
}


/* =====================================================================
   10. RENDERIZAÇÃO
   ===================================================================== */
const ITENS_MENU = [
  { id: "inicio", rotulo: "Início", icone: "🏠" },
  { id: "oferta", rotulo: "Oferta", icone: "🙏" },
  { id: "horarios", rotulo: "Horários", icone: "⏰" },
  { id: "avisos", rotulo: "Avisos", icone: "📣" },
  { id: "eventos", rotulo: "Eventos", icone: "📅" },
  { id: "igrejas", rotulo: "Igrejas", icone: "⛪" },
  { id: "configuracoes", rotulo: "Ajustes", icone: "⚙️" },
];

let viewAtual = "inicio";
let filtroIgrejaHorarios = "todas";
let filtroIgrejaAvisos = "todas";
let filtroIgrejaEventos = "todas";

function irParaView(view){
  viewAtual = view;
  document.querySelectorAll(".view").forEach(sec => {
    sec.hidden = sec.dataset.view !== view;
  });
  renderizarNavegacao();
  if(view === "inicio") renderizarInicio();
  if(view === "oferta") renderizarOferta();
  if(view === "horarios") renderizarHorarios();
  if(view === "avisos") renderizarAvisos();
  if(view === "eventos") renderizarEventos();
  if(view === "igrejas") renderizarIgrejas();
  if(view === "configuracoes") renderizarConfiguracoes();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

/* ---- Escalonamento da entrada dos cards ----
   Cada card de uma lista (Horários, Avisos, Eventos, Igrejas, avisos em
   destaque) recebe um atraso um pouco maior que o anterior, na ordem em
   que aparecem no HTML (ou seja, de cima para baixo). Combinado com a
   animação "surgirEsquerda" do CSS, o efeito é: os cards vão surgindo
   um de cada vez, deslizando da esquerda para a direita, em vez de
   aparecerem todos ao mesmo tempo. */
function escalonarEntradaCards(seletor, passoSegundos = 0.12, atrasoMaximoItens = 10){
  document.querySelectorAll(seletor).forEach((el, indice) => {
    el.style.setProperty("--atraso-entrada", (Math.min(indice, atrasoMaximoItens) * passoSegundos) + "s");
  });
}

function renderizarNavegacao(){
  const html = ITENS_MENU.map(item => `
    <button class="nav-item ${viewAtual === item.id ? "ativo" : ""}" data-ir-para="${item.id}">
      <span class="nav-icone" aria-hidden="true">${item.icone}</span>
      <span>${item.rotulo}</span>
    </button>
  `).join("");
  document.getElementById("nav-mobile").innerHTML = html;
  document.getElementById("nav-desktop").innerHTML = html;
}

// Avatar exibido no cabeçalho, ao lado da saudação (escolhido pelo
// usuário no primeiro acesso ou em Configurações).
function htmlAvatarUsuario(avatarId){
  const avatar = obterAvatar(avatarId);
  if(!avatar) return `<span class="imagem-fallback">🙏</span>`;
  return comFallbackImagem(`<img src="${avatar.imagem}" alt="Avatar: ${avatar.nome}">`, "🙏");
}

function renderizarCabecalho(){
  const usuario = obterUsuario();
  document.getElementById("avatar-cabecalho").innerHTML = htmlAvatarUsuario(usuario && usuario.avatar);
  const saud = document.getElementById("saudacao-usuario");
  saud.textContent = usuario ? `Olá, ${usuario.apelido}! 🙏` : "";
}

function renderizarRodape(){
  document.getElementById("rodape-nome-paroquia").textContent = FRASE_RODAPE;
}

function renderizarInicio(){
  const hoje = new Date();
  document.getElementById("data-atual").textContent =
    hoje.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });

  // Avisos em destaque (importante/urgente)
  const destaques = listarAvisos().filter(a => a.prioridade !== "Normal").slice(0,2);
  document.getElementById("avisos-destaque").innerHTML = destaques.map(a => `
    <div class="aviso-destaque-item ${a.prioridade === "Urgente" ? "urgente" : "importante"}">
      <strong>${a.titulo}</strong>${a.texto}
    </div>
  `).join("");
  escalonarEntradaCards("#avisos-destaque .aviso-destaque-item");

  // Próxima missa
  const missas = listarHorarios().filter(h => h.tipo === "Missa");
  const proximaMissaEl = document.querySelector("#card-proxima-missa .card-proxima-conteudo");
  if(missas.length){
    const m = missas[0];
    proximaMissaEl.innerHTML = `
      <div class="linha-1">${formatarDataBR(m.data)} · ${calcularDiaSemana(m.data)} · ${m.horario}</div>
      <div class="linha-2">${nomeIgreja(m.igrejaId)}</div>`;
  } else {
    proximaMissaEl.innerHTML = `<span class="card-vazio">Nenhuma missa cadastrada.</span>`;
  }

  // Próximo evento
  const eventos = listarEventos();
  const proxEventoEl = document.querySelector("#card-proximo-evento .card-proxima-conteudo");
  if(eventos.length){
    const e = eventos[0];
    proxEventoEl.innerHTML = `
      <div class="linha-1">${e.nome}</div>
      <div class="linha-2">${formatarDataBR(e.data)} · ${calcularDiaSemana(e.data)} · ${e.horario}</div>`;
  } else {
    proxEventoEl.innerHTML = `<span class="card-vazio">Nenhum evento cadastrado.</span>`;
  }
}

function renderizarOferta(){
  const areaQr = comFallbackImagem(
    `<img class="pix-qrcode" src="${DADOS_PIX.qrcode}" alt="QR Code PIX de ${DADOS_PIX.destinatario}">`,
    "QR Code"
  );
  document.getElementById("card-pix").innerHTML = `
    ${areaQr}
    <strong>${DADOS_PIX.destinatario}</strong>
    <div class="pix-chave-container">
      <div class="pix-chave-linha">
        <span class="pix-chave">${DADOS_PIX.chave}</span>
        <button class="botao botao-primario" id="btn-copiar-pix">Copiar chave PIX</button>
      </div>
      <div class="pix-tipo-chave">Tipo de chave PIX: ${DADOS_PIX.tipo}</div>
    </div>
    <p class="pix-descricao">${DADOS_PIX.informacoes || ""}</p>
  `;
  document.getElementById("passos-pix").innerHTML = `
    <h3>Como fazer sua oferta pelo PIX</h3>
    <ol class="lista-passos">
      <li>Abra o aplicativo do seu banco;</li>
      <li>Escolha a opção PIX;</li>
      <li>Escaneie o QR Code ou copie a chave;</li>
      <li>Confira os dados da paróquia;</li>
      <li>Informe o valor e confirme a transferência.</li>
    </ol>`;
  document.getElementById("btn-copiar-pix").addEventListener("click", () => {
    navigator.clipboard?.writeText(DADOS_PIX.chave)
      .then(() => mostrarToast("Chave PIX copiada!", "sucesso"))
      .catch(() => mostrarToast("Não foi possível copiar automaticamente.", "erro"));
  });
}

function renderizarFiltrosIgreja(containerId, filtroAtual, aoClicar){
  const opcoes = [{ id: "todas", nome: "Todas" }, ...listarIgrejasArray()];
  document.getElementById(containerId).innerHTML = opcoes.map(o => `
    <button class="filtro-chip ${filtroAtual === o.id ? "ativo" : ""}" data-filtro-igreja="${o.id}">${o.nome}</button>
  `).join("");
  document.getElementById(containerId).querySelectorAll("[data-filtro-igreja]").forEach(btn => {
    btn.addEventListener("click", () => aoClicar(btn.dataset.filtroIgreja));
  });
}

function renderizarHorarios(){
  renderizarFiltrosIgreja("filtros-horarios", filtroIgrejaHorarios, (id) => {
    filtroIgrejaHorarios = id; renderizarHorarios();
  });
  let itens = listarHorarios();
  if(filtroIgrejaHorarios !== "todas") itens = itens.filter(h => h.igrejaId === filtroIgrejaHorarios);

  document.getElementById("lista-horarios").innerHTML = itens.length ? itens.map(h => `
    <article class="item-card" style="border-left-color:${corIgreja(h.igrejaId)}">
      <span class="etiqueta-igreja">${nomeIgreja(h.igrejaId)}</span>
      <h3>${h.nome}</h3>
      <div class="meta">${h.tipo}</div>
      <div class="meta meta-data">${h.data ? linhaDataCompleta(h.data, h.horario) : `🕒 ${h.horario}`}${h.recorrencia ? " · " + h.recorrencia : ""}</div>
      ${h.descricao ? `<div class="descricao">${h.descricao}</div>` : ""}
    </article>
  `).join("") : `<p class="card-vazio">Nenhum horário encontrado para este filtro.</p>`;
  escalonarEntradaCards("#lista-horarios .item-card");
}

function renderizarAvisos(){
  renderizarFiltrosIgreja("filtros-avisos", filtroIgrejaAvisos, (id) => {
    filtroIgrejaAvisos = id; renderizarAvisos();
  });
  let itens = listarAvisos();
  if(filtroIgrejaAvisos !== "todas") itens = itens.filter(a => a.igrejaId === filtroIgrejaAvisos);

  document.getElementById("lista-avisos").innerHTML = itens.length ? itens.map(a => `
    <article class="item-card" style="border-left-color:${corIgreja(a.igrejaId)}">
      <span class="etiqueta-igreja">${nomeIgreja(a.igrejaId)}</span>
      <span class="aviso-prioridade aviso-${a.prioridade.toLowerCase()}">${a.prioridade}</span>
      <h3>${a.titulo}</h3>
      <div class="meta">📅 ${formatarDataBR(a.data)}</div>
      <div class="descricao">${a.texto}</div>
    </article>
  `).join("") : `<p class="card-vazio">Nenhum aviso no momento.</p>`;
  escalonarEntradaCards("#lista-avisos .item-card");
}

function renderizarEventos(){
  renderizarFiltrosIgreja("filtros-eventos", filtroIgrejaEventos, (id) => {
    filtroIgrejaEventos = id; renderizarEventos();
  });
  let itens = listarEventos();
  if(filtroIgrejaEventos !== "todas") itens = itens.filter(e => e.igrejaId === filtroIgrejaEventos);

  document.getElementById("lista-eventos").innerHTML = itens.length ? itens.map(e => `
    <article class="item-card" style="border-left-color:${corIgreja(e.igrejaId)}">
      <span class="etiqueta-igreja">${nomeIgreja(e.igrejaId)}</span>
      <h3>${e.nome}</h3>
      <div class="meta meta-data">${linhaDataCompleta(e.data, e.horario)}</div>
      ${e.local ? `<div class="meta">📍 ${e.local}</div>` : ""}
      ${e.descricao ? `<div class="descricao">${e.descricao}</div>` : ""}
    </article>
  `).join("") : `<p class="card-vazio">Nenhum evento cadastrado.</p>`;
  escalonarEntradaCards("#lista-eventos .item-card");
}

// Área de imagem padronizada no topo do card da igreja: usa object-fit
// "cover" para preencher bem o espaço sem deformar; quando isso não é
// possível sem cortar demais (fotos muito verticais), o fundo colorido
// da própria igreja preenche o restante.
function htmlImagemTopoIgreja(i){
  const origem = i.imagem || i.logo;
  if(!origem) return `<div class="igreja-imagem-topo" style="background:${i.cor}22"><span class="imagem-fallback">⛪</span></div>`;
  return `<div class="igreja-imagem-topo" style="background:${i.cor}22">${comFallbackImagem(`<img src="${origem}" alt="Imagem de ${i.nome}">`, "⛪")}</div>`;
}

function renderizarIgrejas(){
  document.getElementById("lista-igrejas").innerHTML = listarIgrejasArray().map(i => `
    <article class="item-card igreja-card" style="border-left-color:${i.cor}" data-detalhe-igreja="${i.id}" role="button" tabindex="0">
      ${htmlImagemTopoIgreja(i)}
      <div class="igreja-card-info">
        <h3>${i.nome}</h3>
        ${i.endereco ? `<div class="meta">📍 ${i.endereco}</div>` : ""}
        ${i.contato ? `<div class="meta">📞 ${i.contato}</div>` : ""}
        ${i.descricao ? `<div class="descricao">${i.descricao}</div>` : ""}
      </div>
    </article>
  `).join("") + `
    <a class="item-card igreja-card" style="text-decoration:none;color:inherit;border-left-color:var(--cor-dourado)"
       href="${REDE_SOCIAL_OFICIAL.url}" target="_blank" rel="noopener">
      ${REDE_SOCIAL_OFICIAL.imagem
        ? `<div class="igreja-imagem-topo" style="background:var(--cor-fundo-suave)">${comFallbackImagem(`<img src="${REDE_SOCIAL_OFICIAL.imagem}" alt="Rede social oficial da paróquia">`, "📱")}</div>`
        : `<div class="igreja-imagem-topo" style="background:var(--cor-fundo-suave)"><span class="imagem-fallback">📱</span></div>`}
      <div class="igreja-card-info">
        <h3>Rede social oficial da paróquia</h3>
        <div class="meta">${REDE_SOCIAL_OFICIAL.rotulo}</div>
      </div>
    </a>`;
  escalonarEntradaCards("#lista-igrejas .item-card");

  document.querySelectorAll("[data-detalhe-igreja]").forEach(card => {
    const abrir = () => abrirDetalheIgreja(obterIgreja(card.dataset.detalheIgreja));
    card.addEventListener("click", abrir);
    card.addEventListener("keydown", (ev) => { if(ev.key === "Enter" || ev.key === " "){ ev.preventDefault(); abrir(); } });
  });
}

// Seletor de avatar reutilizado no primeiro acesso e em Configurações.
function renderizarSeletorAvatar(containerId, avatarSelecionadoId){
  document.getElementById(containerId).innerHTML = AVATARES.map(a => `
    <button type="button" class="avatar-opcao ${a.id === avatarSelecionadoId ? "selecionado" : ""}" data-escolher-avatar="${a.id}" aria-label="${a.nome}" title="${a.nome}">
      ${comFallbackImagem(`<img src="${a.imagem}" alt="${a.nome}">`, "🙏")}
    </button>
  `).join("");
}

function renderizarConfiguracoes(){
  const usuario = obterUsuario() || { nomeCompleto: "", apelido: "", avatar: AVATARES[0].id };
  document.getElementById("config-nome-completo").value = usuario.nomeCompleto || "";
  document.getElementById("config-apelido").value = usuario.apelido || "";
  renderizarSeletorAvatar("config-avatar-opcoes", usuario.avatar);
  document.getElementById("config-avatar-opcoes").querySelectorAll("[data-escolher-avatar]").forEach(btn => {
    btn.addEventListener("click", () => {
      salvarUsuario(undefined, undefined, btn.dataset.escolherAvatar);
      renderizarConfiguracoes();
      renderizarCabecalho();
      mostrarToast("Avatar atualizado.", "sucesso");
    });
  });

  const prefs = obterPreferencias();
  const temas = [
    { id: "claro", rotulo: "Claro" },
    { id: "escuro", rotulo: "Escuro" },
  ];
  const daltonismos = [
    { id: "nenhum", rotulo: "Padrão" },
    { id: "protanopia", rotulo: "Protanopia" },
    { id: "deuteranopia", rotulo: "Deuteranopia" },
    { id: "tritanopia", rotulo: "Tritanopia" },
  ];
  document.getElementById("opcoes-tema").innerHTML =
    temas.map(t => `<button class="botao botao-pequeno ${prefs.tema === t.id ? "botao-primario" : "botao-secundario"}" data-tema-opcao="${t.id}">${t.rotulo}</button>`).join("") +
    `<button class="botao botao-pequeno ${prefs.altoContraste ? "botao-primario" : "botao-secundario"}" id="btn-alto-contraste">Alto contraste</button>` +
    daltonismos.map(d => `<button class="botao botao-pequeno ${prefs.daltonismo === d.id ? "botao-primario" : "botao-secundario"}" data-daltonismo-opcao="${d.id}">${d.rotulo}</button>`).join("");

  document.getElementById("config-reduzir-animacoes").checked = prefs.reduzirAnimacoes;

  document.getElementById("sobre-app").innerHTML = `
    <div class="sobre-logo">${comFallbackImagem(`<img src="${LOGO_PAROQUIA}" alt="Logo de ${NOME_PAROQUIA}">`, "✝")}</div>
    <p><strong>${NOME_APP}</strong></p>
    <p>${NOME_PAROQUIA}</p>
    ${ENDERECO_PAROQUIA ? `<p>${ENDERECO_PAROQUIA}</p>` : ""}
    ${TELEFONE_PAROQUIA ? `<p>${TELEFONE_PAROQUIA}</p>` : ""}
    <p>Versão ${VERSAO_APP} · ${new Date().getFullYear()}</p>
    <p>Desenvolvido por ${NOME_DESENVOLVEDOR}</p>
  `;

  document.getElementById("opcoes-tema").querySelectorAll("[data-tema-opcao]").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = obterPreferencias(); p.tema = btn.dataset.temaOpcao;
      salvarPreferencias(p); renderizarConfiguracoes();
    });
  });
  document.getElementById("btn-alto-contraste").addEventListener("click", () => {
    const p = obterPreferencias(); p.altoContraste = !p.altoContraste;
    salvarPreferencias(p); renderizarConfiguracoes();
  });
  document.getElementById("opcoes-tema").querySelectorAll("[data-daltonismo-opcao]").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = obterPreferencias(); p.daltonismo = btn.dataset.daltonismoOpcao;
      salvarPreferencias(p); renderizarConfiguracoes();
    });
  });
}


/* =====================================================================
   11. GALERIA / CARROSSEL DE FOTOS
   Aberta ao clicar em uma igreja/capela. Suporta setas, indicadores,
   teclado (← →), arrastar/deslizar (touch e mouse) e uma transição
   suave de fade ao trocar de foto. Também mostra os botões de WhatsApp
   e Google Maps da igreja, quando cadastrados.
   ===================================================================== */
let galeriaFotos = [];
let galeriaIndice = 0;

function abrirDetalheIgreja(i){
  if(!i) return;
  galeriaFotos = (i.fotos && i.fotos.length) ? i.fotos : (i.imagem ? [i.imagem] : []);
  galeriaIndice = 0;

  const botoesContato = `
    ${i.whatsapp ? `<a class="botao botao-whatsapp" href="${linkWhatsApp(i.whatsapp)}" target="_blank" rel="noopener">💬 Falar pelo WhatsApp</a>` : ""}
    ${i.googleMaps ? `<a class="botao botao-secundario" href="${i.googleMaps}" target="_blank" rel="noopener">📍 Ver localização no Google Maps</a>` : ""}
  `;

  abrirModal(`
    <div class="detalhe-igreja" style="border-top:6px solid ${i.cor}">
      ${galeriaFotos.length ? `
        <div class="galeria" id="galeria-igreja">
          <div class="galeria-viewport" id="galeria-viewport" tabindex="0" aria-label="Galeria de fotos de ${i.nome}">
            <img id="galeria-imagem-atual" src="${galeriaFotos[0]}" alt="Foto de ${i.nome}" onerror="lidarFalhaImagem(this,'⛪')">
          </div>
          ${galeriaFotos.length > 1 ? `
            <button type="button" class="galeria-seta galeria-seta-esquerda" id="galeria-anterior" aria-label="Foto anterior">←</button>
            <button type="button" class="galeria-seta galeria-seta-direita" id="galeria-proxima" aria-label="Próxima foto">→</button>
            <div class="galeria-indicadores" id="galeria-indicadores"></div>
          ` : ""}
        </div>` : `<div class="detalhe-igreja-imagem"><span class="imagem-fallback">⛪</span></div>`}
      <h2>${i.nome}</h2>
      ${i.endereco ? `<p class="meta">📍 ${i.endereco}</p>` : ""}
      ${i.contato ? `<p class="meta">📞 ${i.contato}</p>` : ""}
      ${i.descricao ? `<p class="descricao">${i.descricao}</p>` : ""}
      ${(i.whatsapp || i.googleMaps) ? `<div class="detalhe-igreja-acoes">${botoesContato}</div>` : ""}
    </div>`);

  if(galeriaFotos.length > 1) ligarGaleria();
}

function renderizarIndicadoresGaleria(){
  const cont = document.getElementById("galeria-indicadores");
  if(!cont) return;
  cont.innerHTML = galeriaFotos.map((_, idx) =>
    `<span class="galeria-ponto ${idx === galeriaIndice ? "ativo" : ""}" data-ir-para-foto="${idx}" role="button" aria-label="Ir para foto ${idx+1}"></span>`
  ).join("");
  cont.querySelectorAll("[data-ir-para-foto]").forEach(ponto => {
    ponto.addEventListener("click", () => { irParaFotoGaleria(Number(ponto.dataset.irParaFoto)); });
  });
}

function irParaFotoGaleria(indice){
  galeriaIndice = (indice + galeriaFotos.length) % galeriaFotos.length;
  const img = document.getElementById("galeria-imagem-atual");
  if(img){
    img.style.display = "";
    const irmaoFallback = img.nextElementSibling;
    if(irmaoFallback && irmaoFallback.classList.contains("imagem-fallback")) irmaoFallback.remove();
    img.src = galeriaFotos[galeriaIndice];
  }
  renderizarIndicadoresGaleria();
}

function ligarGaleria(){
  renderizarIndicadoresGaleria();
  document.getElementById("galeria-anterior").addEventListener("click", () => irParaFotoGaleria(galeriaIndice - 1));
  document.getElementById("galeria-proxima").addEventListener("click", () => irParaFotoGaleria(galeriaIndice + 1));

  const viewport = document.getElementById("galeria-viewport");
  // Teclado (setas esquerda/direita)
  viewport.addEventListener("keydown", (ev) => {
    if(ev.key === "ArrowLeft") irParaFotoGaleria(galeriaIndice - 1);
    if(ev.key === "ArrowRight") irParaFotoGaleria(galeriaIndice + 1);
  });

  // Arrastar/deslizar — funciona com toque (celular) e com mouse.
  let inicioX = null;
  const iniciar = (x) => { inicioX = x; };
  const finalizar = (x) => {
    if(inicioX === null) return;
    const distancia = x - inicioX;
    if(Math.abs(distancia) > 40){
      distancia > 0 ? irParaFotoGaleria(galeriaIndice - 1) : irParaFotoGaleria(galeriaIndice + 1);
    }
    inicioX = null;
  };
  viewport.addEventListener("touchstart", (ev) => iniciar(ev.touches[0].clientX), { passive: true });
  viewport.addEventListener("touchend", (ev) => finalizar(ev.changedTouches[0].clientX));
  viewport.addEventListener("mousedown", (ev) => { ev.preventDefault(); iniciar(ev.clientX); });
  window.addEventListener("mouseup", (ev) => { if(inicioX !== null) finalizar(ev.clientX); });
}

/* ---- Modal genérico e toast ---- */
function abrirModal(html){
  document.getElementById("modal-conteudo").innerHTML = html;
  document.getElementById("modal-overlay").hidden = false;
}
function fecharModal(){
  document.getElementById("modal-overlay").hidden = true;
  document.getElementById("modal-conteudo").innerHTML = "";
}
function mostrarToast(mensagem, tipo){
  const el = document.createElement("div");
  el.className = "toast" + (tipo ? " " + tipo : "");
  el.textContent = mensagem;
  document.getElementById("toast-container").appendChild(el);
  setTimeout(() => el.remove(), 3200);
}


/* =====================================================================
   12. ANIMAÇÕES DE TOQUE (inclui efeito ripple)
   Funciona com mouse, toque e caneta (eventos "pointer"), já que em
   celulares o efeito de :hover não existe.
   ===================================================================== */
const SELETOR_TOQUE = ".botao, .item-card, .atalho, .nav-item, .filtro-chip, .galeria-seta, .galeria-ponto, .igreja-card, .avatar-opcao";
// Dentro do seletor acima, os cards de lista (Horários, Avisos, Eventos,
// Igrejas) usam um efeito diferente: crescem um pouco ao serem tocados,
// em vez de encolher como botões e outros elementos.
const SELETOR_TOQUE_CRESCE = ".lista-cards .item-card";

function ligarAnimacaoDeToque(){
  const ativar = (ev) => {
    const alvo = ev.target.closest(SELETOR_TOQUE);
    if(!alvo) return;
    alvo.classList.add(alvo.closest(SELETOR_TOQUE_CRESCE) ? "efeito-crescer" : "efeito-clique");
    criarRipple(alvo, ev);
  };
  const desativar = (ev) => {
    const alvo = ev.target.closest(SELETOR_TOQUE);
    if(alvo) alvo.classList.remove("efeito-clique", "efeito-crescer");
    // Também limpa qualquer elemento que tenha ficado "preso" pressionado
    document.querySelectorAll(".efeito-clique, .efeito-crescer").forEach(el => {
      if(el !== alvo) el.classList.remove("efeito-clique", "efeito-crescer");
    });
  };
  document.body.addEventListener("pointerdown", ativar);
  document.body.addEventListener("pointerup", desativar);
  document.body.addEventListener("pointercancel", desativar);
  document.body.addEventListener("pointerleave", desativar, true);
}

// Pequeno efeito "ripple" (onda) a partir do ponto tocado/clicado —
// puramente visual e discreto, se remove sozinho depois da animação.
function criarRipple(alvo, ev){
  const prefs = obterPreferencias();
  if(prefs.reduzirAnimacoes || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const estiloAlvo = getComputedStyle(alvo);
  if(estiloAlvo.position === "static") alvo.style.position = "relative";
  alvo.style.overflow = alvo.style.overflow || "hidden";

  const retangulo = alvo.getBoundingClientRect();
  const x = (ev.clientX ?? retangulo.left + retangulo.width/2) - retangulo.left;
  const y = (ev.clientY ?? retangulo.top + retangulo.height/2) - retangulo.top;
  const tamanho = Math.max(retangulo.width, retangulo.height) * 1.4;

  const onda = document.createElement("span");
  onda.className = "ripple";
  onda.style.width = onda.style.height = tamanho + "px";
  onda.style.left = (x - tamanho/2) + "px";
  onda.style.top = (y - tamanho/2) + "px";
  alvo.appendChild(onda);
  onda.addEventListener("animationend", () => onda.remove());
  setTimeout(() => onda.remove(), 700);
}


/* =====================================================================
   13. EVENTOS DE INTERFACE
   ===================================================================== */
function ligarEventosGlobais(){
  document.body.addEventListener("click", (ev) => {
    const alvo = ev.target.closest("[data-ir-para]");
    if(alvo) irParaView(alvo.dataset.irPara);
  });

  document.getElementById("modal-fechar").addEventListener("click", fecharModal);
  document.getElementById("modal-overlay").addEventListener("click", (ev) => {
    if(ev.target.id === "modal-overlay") fecharModal();
  });
  document.addEventListener("keydown", (ev) => {
    if(ev.key === "Escape" && !document.getElementById("modal-overlay").hidden) fecharModal();
  });

  // Boas-vindas (primeiro acesso) — inclui escolha do avatar
  let avatarEscolhidoPrimeiroAcesso = AVATARES[0].id;
  renderizarSeletorAvatar("avatar-opcoes-boasvindas", avatarEscolhidoPrimeiroAcesso);
  document.getElementById("avatar-opcoes-boasvindas").addEventListener("click", (ev) => {
    const btn = ev.target.closest("[data-escolher-avatar]");
    if(!btn) return;
    avatarEscolhidoPrimeiroAcesso = btn.dataset.escolherAvatar;
    renderizarSeletorAvatar("avatar-opcoes-boasvindas", avatarEscolhidoPrimeiroAcesso);
  });
  document.getElementById("form-boas-vindas").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const nomeCompleto = document.getElementById("input-nome-completo").value.trim();
    const apelido = document.getElementById("input-apelido").value.trim();
    salvarUsuario(nomeCompleto, apelido, avatarEscolhidoPrimeiroAcesso);
    mostrarTelaAppComTransicao("tela-boas-vindas");
  });

  // Boas-vindas de volta (usuário já cadastrado)
  document.getElementById("btn-acessar-app").addEventListener("click", () => {
    mostrarTelaAppComTransicao("tela-retorno");
  });

  // Perfil (configurações)
  document.getElementById("form-perfil").addEventListener("submit", (ev) => {
    ev.preventDefault();
    salvarUsuario(
      document.getElementById("config-nome-completo").value.trim(),
      document.getElementById("config-apelido").value.trim()
    );
    renderizarCabecalho();
    mostrarToast("Perfil atualizado.", "sucesso");
  });

  document.getElementById("config-reduzir-animacoes").addEventListener("change", (ev) => {
    const p = obterPreferencias(); p.reduzirAnimacoes = ev.target.checked;
    salvarPreferencias(p);
  });

  // Dados locais (nome, avatar e preferências deste navegador). Ao
  // limpar, o site volta para a tela de primeiro acesso, permitindo
  // escolher tudo de novo (nome, apelido e avatar).
  document.getElementById("btn-limpar-dados").addEventListener("click", () => {
    localStorage.removeItem(CHAVES.usuario);
    localStorage.removeItem(CHAVES.preferencias);
    location.reload();
  });
}


/* =====================================================================
   14. INICIALIZAÇÃO
   ===================================================================== */
function mostrarTelaApp(){
  document.getElementById("tela-boas-vindas").hidden = true;
  document.getElementById("tela-retorno").hidden = true;
  document.getElementById("app").hidden = false;
  renderizarCabecalho();
  renderizarRodape();
  irParaView("inicio");
}

// Anima a saída suave de uma tela cheia (boas-vindas/retorno) antes de
// mostrar a tela principal — usada pelos botões "Entrar" e
// "Acessar aplicativo" para evitar uma troca instantânea e seca.
function mostrarTelaAppComTransicao(idTelaAtual){
  const prefs = obterPreferencias();
  const tela = document.getElementById(idTelaAtual);
  if(prefs.reduzirAnimacoes || window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    mostrarTelaApp();
    return;
  }
  tela.classList.add("tela-saindo");
  setTimeout(() => {
    tela.classList.remove("tela-saindo");
    mostrarTelaApp();
  }, 260);
}

// Tela de boas-vindas exibida sempre que o site é aberto e já existe um
// nome salvo (não solicita nome/avatar novamente — apenas dá boas-vindas
// de volta e leva ao clique para a tela inicial). A imagem principal e
// a logo desta tela já estão fixas no HTML (ver index.html).
function mostrarTelaRetorno(){
  const usuario = obterUsuario();
  document.getElementById("saudacao-retorno").textContent = `Olá, ${usuario.apelido}! 🙏`;
  document.getElementById("nome-paroquia-retorno").textContent = NOME_PAROQUIA;
  document.getElementById("tela-boas-vindas").hidden = true;
  document.getElementById("tela-retorno").hidden = false;
}

function inicializar(){
  aplicarPreferencias(obterPreferencias());
  ligarEventosGlobais();
  ligarAnimacaoDeToque();
  registrarPWA();

  const usuario = obterUsuario();
  if(usuario){
    mostrarTelaRetorno();
  } else {
    document.querySelector("#tela-boas-vindas h1").textContent = NOME_PAROQUIA;
    document.getElementById("tela-boas-vindas").hidden = false;
  }
}

document.addEventListener("DOMContentLoaded", inicializar);