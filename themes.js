/* =====================================================================
   PARÓQUIA NOSSA SENHORA DO ROSÁRIO — themes.js
   Este arquivo contém APENAS as informações dos temas (nome, categoria,
   frase, ícone e a classe CSS correspondente). Nenhuma lógica do
   sistema fica aqui — toda a lógica (aplicar tema, salvar no
   localStorage, montar os cards, o acordeão etc.) está em script.js.
   As CORES de cada tema ficam em themes.css — aqui só a "ficha" de
   cada um.
   ===================================================================== */

// ============================================================
// CATEGORIAS DE TEMAS
// A ordem desta lista é a ordem em que as categorias aparecem na
// tela de Configurações. "colapsavel:false" (só o Tema Padrão) fica
// sempre visível; as demais funcionam como acordeão (toque para
// abrir/fechar).
// ============================================================
const CATEGORIAS_TEMAS = [
  { id: "padrao",     nome: "Tema Principal",    icone: "❤️", colapsavel: false },
  { id: "marianos",   nome: "Temas Marianos",    icone: "🌹", colapsavel: true  },
  { id: "santos",     nome: "Temas dos Santos",  icone: "🙏", colapsavel: true  },
  { id: "liturgicos", nome: "Temas Litúrgicos",  icone: "✨", colapsavel: true  }
];

// ============================================================
// COMO ADICIONAR UM NOVO TEMA
//
// 1. Copie um bloco de tema existente (de "{" até "},").
//
// 2. Altere:
//      id        → um identificador curto e único (sem espaços)
//      categoria → "padrao", "marianos", "santos" ou "liturgicos"
//      nome      → nome exibido no card
//      icone     → um emoji pequeno e discreto (opcional; use "" se
//                  não quiser ícone — a categoria "padrao" não usa)
//      frase     → frase/oração curta exibida quando o tema está ativo
//      classe    → nome da classe CSS (ex.: "tema-carlo")
//
// 3. Crie o CSS correspondente em themes.css, com as mesmas variáveis
//    de cor dos outros temas (veja os comentários lá).
//
// Pronto — o tema já aparece automaticamente na tela de Configurações,
// dentro da categoria escolhida.
// ============================================================
const TEMAS = [

  // ---- Tema Padrão ----
{
    id: "cristo",
    categoria: "padrao",
    nome: "Jesus Cristo",
    icone: "❤️",
    frase: "Permanecei no Meu Amor.",
    classe: "tema-cristo"
},

  // ---- Temas Marianos ----
{
    id: "rosario",
    categoria: "marianos",
    nome: "Nossa Senhora do Rosário",
    icone: "🌹",
    frase: "Rezem o terço todos os dias pela conversão dos pecadores.",
    classe: "tema-rosario"
},

{
    id: "conceicao",
    categoria: "marianos",
    nome: "Nossa Senhora da Conceição",
    icone: "🩵",
    frase: "Ó Maria concebida sem pecado, rogai por nós.",
    classe: "tema-conceicao"
},

  {
    id: "carmo",
    categoria: "marianos",
    nome: "Nossa Senhora do Carmo",
    icone: "🤎",
    frase: "Sob a proteção de Maria do Carmo, caminhemos na fé.",
    classe: "tema-carmo"
  },
  {
    id: "gracas",
    categoria: "marianos",
    nome: "Nossa Senhora das Graças",
    icone: "💙",
    frase: "Derramai sobre nós as graças de vosso Filho.",
    classe: "tema-gracas"
  },

  {
    id: "fatima",
    categoria: "marianos",
    nome: "Nossa Senhora de Fátima",
    icone: "🌟",
    frase: "Rezem o terço todos os dias.",
    classe: "tema-fatima"
  },

  // ---- Temas dos Santos ----
  {
    id: "carlo",
    categoria: "santos",
    nome: "São Carlo Acutis",
    icone: "💻",
    frase: "A Eucaristia é a minha estrada para o Céu.",
    classe: "tema-carlo"
  },
  {
    id: "francisco",
    categoria: "santos",
    nome: "São Francisco de Assis",
    icone: "🕊️",
    frase: "Senhor, fazei de mim um instrumento de vossa paz.",
    classe: "tema-francisco"
  },
  {
    id: "jose",
    categoria: "santos",
    nome: "São José",
    icone: "🌿",
    frase: "José, filho de Davi, não temas.",
    classe: "tema-jose"
  },

  {
    id: "terezinha",
    categoria: "santos",
    nome: "Santa Terezinha",
    icone: "🌹",
    frase: "Quero passar meu céu fazendo o bem na terra.",
    classe: "tema-terezinha"
  },

  {
    id: "luzia",
    categoria: "santos",
    nome: "Santa Luzia",
    icone: "👁️",
    frase: "A luz de Cristo ilumina meus olhos e meu coração.",
    classe: "tema-luzia"
  },

  // ---- Temas Litúrgicos ----
  {
    id: "advento",
    categoria: "liturgicos",
    nome: "Advento",
    icone: "🕯️",
    frase: "Vem, Senhor Jesus!",
    classe: "tema-advento"
  },
  {
    id: "natal",
    categoria: "liturgicos",
    nome: "Natal",
    icone: "⭐",
    frase: "Glória a Deus nas alturas!",
    classe: "tema-natal"
  },
  {
    id: "tempocomum",
    categoria: "liturgicos",
    nome: "Tempo Comum",
    icone: "🌿",
    frase: "Permanecei em mim, e eu em vós.",
    classe: "tema-tempocomum"
  },
  {
    id: "quaresma",
    categoria: "liturgicos",
    nome: "Quaresma",
    icone: "🙏",
    frase: "Convertei-vos e crede no Evangelho.",
    classe: "tema-quaresma"
  },
  {
    id: "pascoa",
    categoria: "liturgicos",
    nome: "Páscoa",
    icone: "✝️",
    frase: "Cristo ressuscitou, aleluia!",
    classe: "tema-pascoa"
  },
  {
    id: "pentecostes",
    categoria: "liturgicos",
    nome: "Pentecostes",
    icone: "🕊️",
    frase: "Vinde, Espírito Santo!",
    classe: "tema-pentecostes"
  }

];