const apiKey = "6a0d5285240d4cd7859195757240608";
let markers = [];

var map = L.map("map").setView([-26.2522, -53.6295], 10);

map.whenReady(() => {
  setTimeout(() => {
    map.setView([-26.2522, -53.6295], 14, { animate: true, duration: 10000 });
  }, 500);
});

const baseMaps = {
  Mapa: L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CartoDB</a>',
    }
  ),
  Satélite: L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVlZHJvbHp6IiwiYSI6ImNsemo2ZjhjaDA3aDYycW83bjR2ZjYwYzkifQ.lVemW07xZQ2KiAKKC-WKnQ",
    {
      attribution:
        'Map data &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',
      maxZoom: 20,
    }
  ),
};

baseMaps["Mapa"].addTo(map);

L.control.layers(baseMaps).addTo(map);

var locais = {
  turismo: [
    {
      nome: "Cachoeira do Toldo",
      coords: [-26.303816178327892, -53.61787563798076],
      descricao: "Localizada na região de Barracão, a Cachoeira do Toldo é uma das principais atrações naturais da cidade. Conhecida pela sua paisagem deslumbrante e águas cristalinas, é um destino perfeito para quem busca contato com a natureza, caminhadas e momentos de lazer ao ar livre. A cachoeira é um refúgio tranquilo, ideal para um passeio em família ou para os amantes da fotografia.",
      imagem: "img2/cachoeira.png"
    },
    { nome: "Marco Grande", 
      coords: [-26.248028076695537, -53.6451661492275],
      descricao: "Localizada na região de Barracão, a Cachoeira do Toldo é uma das principais atrações naturais da cidade. Conhecida pela sua paisagem deslumbrante e águas cristalinas, é um destino perfeito para quem busca contato com a natureza, caminhadas e momentos de lazer ao ar livre. A cachoeira é um refúgio tranquilo, ideal para um passeio em família ou para os amantes da fotografia.",
      imagem: "img2/marco.png"
    },
    {
      nome: "Cânion do Assentamento",
      coords: [-26.27464630700751, -53.374599719291595],
      descricao: "Situado no município de Barracão, o Cânion do Assentamento é uma impressionante formação geológica que atrai turistas por sua beleza e tranquilidade. A imensidão das rochas, os paredões altos e as paisagens únicas fazem deste local um excelente destino para quem deseja apreciar a natureza em seu estado mais puro. O cânion é perfeito para caminhadas e para quem gosta de explorar cenários naturais de tirar o fôlego.",
      imagem: "img2/canion.png"
    },
    {
      nome: "Marco das Três Fronteiras",
      coords: [-26.250791014332208, -53.63894341795658],
      descricao: "O Marco das Três Fronteiras é um ponto emblemático localizado na tríplice fronteira entre Brasil, Argentina e Paraguai. Em um só lugar, é possível observar os três países ao mesmo tempo, tornando-se um local de grande importância histórica e simbólica para a região. O local também é conhecido por suas vistas panorâmicas e pela possibilidade de vivenciar diferentes culturas simultaneamente.",
      imagem: "img2/3fronteiras.png"
    },
    {
      nome: "Cemitério da Separaçao",
      coords: [-26.284689822138446, -53.572761038847986],
      descricao: "O Cemitério da Separação é um marco histórico na cidade de Dionísio Cerqueira, relacionado aos conflitos territoriais entre Brasil e Argentina no passado. Este cemitério foi construído para abrigar os restos mortais de pessoas que perderam a vida em disputas na região. Hoje, o local serve como uma lembrança do passado e é um ponto de reflexão sobre as fronteiras e os conflitos que marcaram a história local.",
      imagem: "img2/cemiterio.png"
    },
    {
      nome: "Gruta de Santa Emília",
      coords: [-26.23329709182649, -53.451992800000006],
      descricao: " A Gruta de Santa Emília é um local de culto e devoção, situado em Barracão. A gruta é dedicada a Santa Emília e recebe muitos fiéis que visitam o local em busca de paz e espiritualidade. Além de ser um importante ponto religioso, a gruta está localizada em meio à natureza, proporcionando um ambiente tranquilo e sereno para os visitantes.",
      imagem: "img2/gruta.png"
    },
    {
      nome: "Parque Turístico Ambiental de Integração",
      coords: [-26.25456877125085, -53.643820028325045],
      descricao: "O Parque Turístico Ambiental de Integração em Barracão é uma grande área de lazer e preservação ambiental. O parque oferece trilhas ecológicas, áreas para piqueniques e espaços para a prática de atividades ao ar livre. Além disso, o parque tem uma forte ligação com a preservação da biodiversidade da região e proporciona aos visitantes um ambiente único para relaxar e aprender sobre a fauna e flora locais.",
      imagem: "img2/lago.png"
    },
    {
      nome: "Museu Internacional",
      coords: [-26.249269026052513, -53.63742767754705],
      descricao: "O Museu Internacional, localizado em Barracão, no Paraná, Brasil, é um importante ponto cultural e histórico da região da Tríplice Fronteira, onde se encontram os países do Brasil, Argentina e Paraguai. Este museu tem como objetivo promover o intercâmbio cultural e histórico entre essas três nações, além de destacar a importância geopolítica e social da região.",
      imagem: "img2/museu.png"
    },
    {
      nome: "Plaza municipal Bernardo de Irigoyen",
      coords: [-26.25554617743072, -53.64692734865733],
      descricao: " A Plaza Municipal Bernardo de Irigoyen é um centro de convivência e lazer da cidade de Bernardo de Irigoyen, na Argentina. A praça é um lugar onde os moradores e turistas se reúnem para passeios tranquilos, apresentações culturais e eventos públicos. Com jardins bem cuidados e um ambiente acolhedor, a praça é um excelente ponto de encontro na cidade.",
      imagem: "img2/cachoeira.png"
    },
  ],
  lojas: [
    {
      nome: "Lojas Parizotto",
      coords: [-26.255061603899776, -53.6350580779547],
    },
    {
      nome: "Loja Alto Giro",
      coords: [-26.2545997478848, -53.636082681730135],
    },
    { nome: "Loja Sartori", 
      coords: [-26.253031348110877, -53.636672767722]
     },
    { nome: "Benatti Cener", 
      coords: [-26.25263683931305, -53.63742378625654]
     },
    { nome: "Kibarato", 
      coords: [-26.254984628025188, -53.63983777442603]
    },
    { nome: "Lojas 7",
      coords: [-26.254778123441522, -53.63633980603279]
    },
    {
      nome: "Sudoest Import",
      coords: [-26.25683628991446, -53.62771975808138],
    },
  ],
  hospitais: [
    { nome: "UBS Copasa", coords: [-26.25515875024168, -53.622206415142415] },
    {
      nome: "Hospital de Agudos",
      coords: [-26.248971864507507, -53.651395015579986],
    },
    {
      nome: "Instituto Santé",
      coords: [-26.259267812399347, -53.637483882682055],
    },
  ],
  resturantes: [
    {
      nome: "Restaurante Buffalo",
      coords: [-26.25833785705469, -53.61310847385781],
    },
    {
      nome: "Restaurante Sabor e Arte",
      coords: [-26.261249751178084, -53.63395598978416],
    },
    { nome: "Novo Sabor", coords: [-26.255327027009567, -53.63057099642349] },
    {
      nome: "Casa Deodoro's",
      coords: [-26.251612118643312, -53.63982644379749],
    },
    {
      nome: "Restaurante Espaço Campeiro",
      coords: [-26.235652958159683, -53.6369308570127],
    },
    {
      nome: "Restaurante Referência",
      coords: [-26.253194950561568, -53.63393799097594],
    },
    {
      nome: "Restaurante Grenal",
      coords: [-26.254922161600934, -53.635080762935196],
    },
  ],
  hoteis: [
    { nome: "Hotel Franco", 
      coords: [-26.25503967051853, -53.633348786257955]
     },
    { nome: "Hotel LF", 
      coords: [-26.252842683859164, -53.63431845561487] 
    },
    {
      nome: "Hotel Iguaçu",
      coords: [-26.254971015303628, -53.640315095441395],
    },
    {
      nome: "Hotel Irigoyen",
      coords: [-26.253094424010868, -53.646005523509565],
    },
    {
      nome: "La Casona Hospedaje",
      coords: [-26.260211579209916, -53.647332439471654],
    },
    { nome: "Hotel Shalom", coords: [-26.245128191290853, -53.63430725787111] },
    { nome: "Oasis Hotel", coords: [-26.25065067619109, -53.63662451886791] },
    {
      nome: "Abinadabe Hotel",
      coords: [-26.258007091383952, -53.6182607666082],
    },
  ],
};

function showMarkers(tipo) {
  markers.forEach((marker) => map.removeLayer(marker));
  markers = [];

  locais[tipo].forEach((local) => {
    var marker = L.marker(local.coords).bindPopup(local.nome).addTo(map);
    marker.on("click", () => showModal(local));
    markers.push(marker);
  });

  document.querySelectorAll("nav .btn").forEach((btn) => {
    btn.classList.remove("btn-active");
  });
  document.getElementById(`${tipo}Btn`).classList.add("btn-active");
}

async function fetchWeather(city, boxId, chartId) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`
    );
    const data = await response.json();

    if (data && data.current) {
      const temp = data.current.temp_c;
      const humidity = data.current.humidity;
      const weatherDescription = data.current.condition.text;
      const iconUrl = data.current.condition.icon;

      const infoBox = document.getElementById(boxId);
      if (infoBox) {
        console.log("Atualizando informações climáticas...");
        infoBox.innerHTML = `
          <div class="weather-info">
            <h3>${city}</h3>
            <img src="https:${iconUrl}" alt="${weatherDescription}" />
            <p><strong>Clima:</strong> ${weatherDescription}</p>
            <p><strong>Temperatura:</strong> ${temp}°C</p>
            <p><strong>Umidade:</strong> ${humidity}%</p>
          </div>
        `;
      }
      if (chartId) {
        const ctx = document.getElementById(chartId).getContext("2d");
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Temperatura (°C)", "Umidade (%)"],
            datasets: [
              {
                label: `Condições Climáticas em ${city}`,
                data: [temp, humidity],
                backgroundColor: ["#4caf50", "#2196f3"],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: `Condições Climáticas em ${city}`,
              },
            },
          },
        });
      }
    }
  } catch (error) {
    console.error("Erro ao buscar dados do clima:", error);
  }
}

function showModal(local) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  modalTitle.textContent = local.nome;
  modalContent.innerHTML = `
  <br>
    <img src="${local.imagem}" alt="${local.nome}" style="width: 100%; height: auto;"/>
  <br>
    <p>${local.descricao}</p>
  `;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

document.getElementById("modal-close").addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
});

fetchWeather(
  "Barracão, Parana, Brasil",
  "barracao-info",
  "barracao-chart"
);
fetchWeather(
  "Dionísio Cerqueira, Santa Catarina, Brasil",
  "dionisio-info",
  "dionisio-chart"
);
fetchWeather(
  "Bernardo de Irigoyen, Missiones, AR",
  "bernardo-info",
  "bernardo-chart"
);

showMarkers("turismo");

AOS.init();
