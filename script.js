const albuns = [
  {
    id: "born-to-die",
    titulo: "Born to Die",
    ano: 2012,
    capa: "LDR/LanaDelRey - Born To Die.JPG",
    sobre:
      "O segundo álbum de estúdio e estreia em uma grande gravadora. Mistura pop barroco, indie pop e trip hop, definindo a estética vintage americana.",
    curiosidades: ["O clipe de 'Video Games' foi editado pela própria Lana."],
    musicas: [
      "Born to Die",
      "Off to the Races",
      "Blue Jeans",
      "Video Games",
      "Diet Mountain Dew",
      "National Anthem",
      "Dark Paradise",
      "Radio",
      "Carmen",
      "Million Dollar Man",
      "Summertime Sadness",
      "This is What Makes Us Girls",
    ],
    links: { spotify: "#", apple: "#" },
    },
    {
    id: "ultraviolence",
    titulo: "Ultraviolence",
    ano: 2014,
    capa: "LDR/LanaDelRey - Ultraviolence.JPG",
    sobre:
      "Com uma sonoridade muito mais sombria, voltada para o rock psicodélico e desert rock. Produzido em grande parte por Dan Auerbach.",
    curiosidades: [
      "Foi o primeiro álbum da Lana a atingir o número 1 na Billboard 200.",
    ],
    musicas: [
      "Cruel World",
      "Ultraviolence",
      "Shades of Cool",
      "Brooklyn Baby",
      "West Coast",
    ],
    links: { spotify: "#", apple: "#" },
  },
  {
    id: "honeymoon",
    titulo: "Honeymoon",
    ano: 2015,
    capa: "LDR/LanaDelRey - Honeymoon.jpg",
    sobre:
      "Um retorno ao pop barroco do início de sua carreira, mas com arranjos ainda mais cinematográficos, lentos e luxuosos, focado em cordas e jazz.",
    curiosidades: [
      "Lana chegou a criar uma linha telefônica real para os fãs ligarem durante o lançamento do álbum.",
    ],
    musicas: [
      "Honeymoon",
      "Music to Watch Boys To",
      "Terrence Loves You",
      "High by the Beach",
      "Art Deco",
    ],
    links: { spotify: "#", apple: "#" },
  },
  {
    id: "lust-for-life",
    titulo: "Lust for Life",
    ano: 2017,
    capa: "LDR/LanaDelRey - Lust for Life.jpg",
    sobre:
      "Um álbum com influências de hip-hop e folk, que traz uma Lana mais otimista, sorrindo na capa pela primeira vez, e com várias colaborações.",
    curiosidades: [
      "É o primeiro álbum dela a contar com colaborações oficiais, como The Weeknd, Stevie Nicks e Sean Ono Lennon.",
    ],
    musicas: ["Love", "Lust for Life", "13 Beaches", "Cherry", "Summer Bummer"],
    links: { spotify: "#", apple: "#" },
  },
  {
    id: "nfr",
    titulo: "Norman Fucking Rockwell!",
    ano: 2019,
    capa: "LDR/LanaDelRey - Norman.JPG", // Usando o nome exato do seu arquivo
    sobre:
      "Aclamado pela crítica como a obra-prima de Lana. Com produção de Jack Antonoff, o álbum traz reflexões sobre o sonho americano em decadência.",
    curiosidades: ["Foi indicado a Álbum do Ano no Grammy de 2020."],
    musicas: [
      "Norman fucking Rockwell",
      "Mariners Apartment Complex",
      "Venice Bitch",
      "Doin' Time",
      "The greatest",
    ],
    links: { spotify: "#", apple: "#" },
  },
  {
    id: "chemtrails",
    titulo: "Chemtrails Over the Country Club",
    ano: 2021,
    capa: "LDR/LanaDelRey - Chemtrails Over The Country Club.jpg",
    sobre:
      "Uma obra intimista focada no folk e na música americana, explorando temas de amizade, fuga da fama e a beleza do meio-oeste americano.",
    curiosidades: [
      "Todas as mulheres na capa do álbum são amigas íntimas de Lana na vida real.",
    ],
    musicas: [
      "White Dress",
      "Chemtrails Over the Country Club",
      "Tulsa Jesus Freak",
      "Let Me Love You Like A Woman",
    ],
    links: { spotify: "#", apple: "#" },
  },
  {
    id: "blue-banisters",
    titulo: "Blue Banisters",
    ano: 2021,
    capa: "LDR/LanaDelRey - Blue Banisters.jpg",
    sobre:
      "Lançado no mesmo ano que Chemtrails, é um projeto muito cru e biográfico, onde Lana compõe como se estivesse escrevendo em seu próprio diário.",
    curiosidades: [
      "Três músicas do álbum foram lançadas como singles simultaneamente no mesmo dia.",
    ],
    musicas: [
      "Text Book",
      "Blue Banisters",
      "Arcadia",
      "Black Bathing Suit",
      "Dealer",
    ],
    links: { spotify: "#", apple: "#" },
  },
  {
    id: "ocean-blvd",
    titulo: "Did you know that there's a tunnel under Ocean Blvd",
    ano: 2023,
    capa: "LDR/LanaDelRey - DYKTTTUOB.JPG", // Usando o nome exato do seu arquivo
    sobre:
      "Profundamente espiritual e reflexivo, onde Lana aborda sua família, mortalidade e seu legado, trazendo corais gospel e interlúdios conversacionais.",
    curiosidades: [
      "O título faz referência ao Jergins Tunnel, um túnel real em Long Beach que foi fechado ao público nos anos 60.",
    ],
    musicas: [
      "The Grants",
      "Did you know that there's a tunnel under Ocean Blvd",
      "A&W",
      "Candy Necklace",
      "Paris, Texas",
    ],
    links: { spotify: "#", apple: "#" },
  },
  {
    id: "unreleased",
    titulo: "Unreleased",
    ano: 0,
    capa: "LDR/LanaDelRey - Unreleased.jpg",
    sobre: "Todas as musicas que foram descartadas.",
    curiosidades: [
      "Não sabemos o motivo exato dessas incriveis faixas terem sido descartadas, mas algumas aqui como Queen of Desaster fizeram grande sucesso",
    ],
    musicas: [
        "Quenn of Desaster",
        "Bealtiful Payer",
    ],
    links: { spotify: "#", apple: "#" },
  },
];

// O resto do código (referências, funções de renderizar, etc) continua intacto abaixo...

// 2. Referências aos elementos do HTML
const telaInicial = document.getElementById("tela-inicial");
const telaAlbum = document.getElementById("tela-album");
const divListaAlbuns = document.getElementById("lista-albuns");

// 3. Função para desenhar os álbuns na tela inicial
function renderizarAlbuns(lista) {
  divListaAlbuns.innerHTML = ""; // Limpa o ecrã antes de desenhar

  if (lista.length === 0) {
    divListaAlbuns.innerHTML = "<p>Nenhum álbum encontrado com esse nome.</p>";
    return;
  }

  // O "index" ajuda-nos a saber a posição do álbum (0, 1, 2, 3...)
  lista.forEach((album, index) => {
    const card = document.createElement("div");
    card.className = "card-album";
    card.innerHTML = `
            <img src="${album.capa}" alt="Capa do álbum ${album.titulo}">
            <h3>${album.titulo}</h3>
            <p>${album.ano}</p>
        `;

    // Adiciona um atraso na animação com base na posição do álbum (0.1s, 0.2s, 0.3s...)
    card.style.animationDelay = `${index * 0.15}s`;

    card.addEventListener("click", () => abrirTelaAlbum(album));

    divListaAlbuns.appendChild(card);
  });
}

// 4. Função para abrir a tela de detalhes e preencher as informações
function abrirTelaAlbum(album) {
  // Esconde a inicial, mostra a do álbum
  telaInicial.classList.add("oculto");
  telaAlbum.classList.remove("oculto");

  // Preenche os textos e imagens
  document.getElementById("album-capa").src = album.capa;
  document.getElementById("album-titulo").textContent = album.titulo;
  document.getElementById("album-info-basica").textContent =
    `Lançamento: ${album.ano}`;
  document.getElementById("album-sobre").textContent = album.sobre;

  // Preenche a lista de curiosidades
  const ulCuriosidades = document.getElementById("album-curiosidades");
  ulCuriosidades.innerHTML = ""; // Limpa antes de preencher
  album.curiosidades.forEach((curiosidade) => {
    const li = document.createElement("li");
    li.textContent = curiosidade;
    ulCuriosidades.appendChild(li);
  });

  // Preenche a lista de músicas
  const olMusicas = document.getElementById("album-musicas");
  olMusicas.innerHTML = ""; // Limpa antes de preencher
  album.musicas.forEach((musica) => {
    const li = document.createElement("li");
    li.textContent = musica;
    olMusicas.appendChild(li);
  });

  // Preenche os links das plataformas
  const divLinks = document.getElementById("album-links");
  divLinks.innerHTML = `
        <a href="${album.links.spotify}" target="_blank" class="link-plataforma">Spotify</a>
        <a href="${album.links.apple}" target="_blank" class="link-plataforma">Apple Music</a>
    `;
}

// 5. Configurando o botão Voltar
document.getElementById("btn-voltar").addEventListener("click", () => {
  // Esconde a tela do álbum, mostra a tela inicial
  telaAlbum.classList.add("oculto");
  telaInicial.classList.remove("oculto");

  // Opcional: rola a página pro topo
  window.scrollTo(0, 0);
});

// 6. Configurando a Busca
const btnBuscar = document.getElementById("btn-buscar");
const inputBusca = document.getElementById("input-busca");

// Função que faz o filtro
function fazerBusca() {
  const termo = inputBusca.value.toLowerCase();
  const albunsFiltrados = albuns.filter((album) =>
    album.titulo.toLowerCase().includes(termo),
  );
  renderizarAlbuns(albunsFiltrados);
}

// Quando clica no botão "Procurar"
btnBuscar.addEventListener("click", fazerBusca);

// E também pesquisa automaticamente conforme o usuário digita
inputBusca.addEventListener("input", fazerBusca);

// 7. Inicializa o site desenhando a lista completa de álbuns
renderizarAlbuns(albuns);
