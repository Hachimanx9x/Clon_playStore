import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Listpro from "./components/Lisimg";
import Carousel from "./components/Carousel/Carouse";
import More from "./components/More";
import Footer from "./components/Footer";

import img1 from "./assets/img/img1 (1).webp";
import img2 from "./assets/img/img1 (2).webp";
import img3 from "./assets/img/img1 (3).webp";
import img4 from "./assets/img/img1 (4).webp";
import img5 from "./assets/img/img1 (5).webp";
import logopswhite from "./assets/img/logopswhite.png";
import "./App.css";

function App() {
  const state = {
    menu: [
      { title: "Más reciente", url: "#", active: true },
      { title: "Colecciones", url: "#", active: false },
      { title: "Ofertas", url: "#", active: false },
      { title: "PS5", url: "#", active: false },
      { title: "Suscripciones", url: "#", active: false },
    ],
    promo: "Ofertas de Pascua",
    promos: [
      {
        title: "It Takes Two  PS4™ &amp; PS5",
        img: img1,
      },
      {
        title: "Digital Pre-Orders - PS5",
        img: img2,
      },
      {
        title: "Final Fantasy XIV Online - PS5 Free Trial",
        img: img3,
      },
      {
        title: "MLB® The Show 21™",
        img: img4,
      },
      {
        title: "Play at Home - Phase 3",
        img: img5,
      },
    ],
    content: [
      {
        title: "Nuevos juegos",
        link: "#",
        games: [
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202101/0723/Bvi82weYw5pjb1dENjtjuU2X.png?w=230",
            title: "MLB® The Show™ 21 Digital Deluxe Edition",
            price: "US$99.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202102/2600/pm80nTH6fKRT7fKMBfrp1MMi.png?w=230",
            title: "Atelier Mysterious Trilogy Deluxe Pack",
            price: "US$89.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202101/0723/Bvi82weYw5pjb1dENjtjuU2X.png?w=230",
            title: "MLB® The Show™ 21 Jackie Robinson Edition",
            price: "US$84.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202101/0722/KF4GiVmKeA75MZpzEn32ev3g.png?w=230",
            title: "MLB® The Show™ 21 PS5",
            price: "US$69.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202101/0722/KF4GiVmKeA75MZpzEn32ev3g.png?w=230",
            title: "MLB® The Show™ 21 PS4",
            price: "US$59.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202009/0404/IZEXjCSSvNkDE3AAb0iafW8k.png?w=230",
            title: "NieR Replicant ver.1.22474487139...",
            price: "US$59.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/img/rnd/202104/0810/w0HfAGhALpZegYVMMMAm2fdk.png?w=230",
            title: "Ultimate Machine Gun Bundle",
            price: "US$59.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202102/2311/wbFlN5z6XvcGXZzxC0KuvbRQ.png?w=230",
            title: "MotoGP™21",
            price: "US$49.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/img/rnd/202103/2509/rwjhsXEFypLPMbsla45qXzUB.png?w=230",
            title: "Oddworld: Soulstorm",
            price: "US$49.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/img/rnd/202103/2509/rwjhsXEFypLPMbsla45qXzUB.png?w=230",
            title: "Oddworld: Soulstorm",
            price: "US$49.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202010/2715/vaSr1x6ztbiHH0JPL1bUYAdA.png?w=230",
            title: "ALVO VR",
            price: "US$49.99",
          },
        ],
      },
      {
        title: "Proximamente",
        link: "#",
        games: [
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202101/0723/Bvi82weYw5pjb1dENjtjuU2X.png?w=230",
            title: "MLB® The Show™ 21 Digital Deluxe Edition",
            price: "US$99.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202102/2600/pm80nTH6fKRT7fKMBfrp1MMi.png?w=230",
            title: "Atelier Mysterious Trilogy Deluxe Pack",
            price: "US$89.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202101/0723/Bvi82weYw5pjb1dENjtjuU2X.png?w=230",
            title: "MLB® The Show™ 21 Jackie Robinson Edition",
            price: "US$84.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202101/0722/KF4GiVmKeA75MZpzEn32ev3g.png?w=230",
            title: "MLB® The Show™ 21 PS5",
            price: "US$69.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202101/0722/KF4GiVmKeA75MZpzEn32ev3g.png?w=230",
            title: "MLB® The Show™ 21 PS4",
            price: "US$59.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202009/0404/IZEXjCSSvNkDE3AAb0iafW8k.png?w=230",
            title: "NieR Replicant ver.1.22474487139...",
            price: "US$59.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/img/rnd/202104/0810/w0HfAGhALpZegYVMMMAm2fdk.png?w=230",
            title: "Ultimate Machine Gun Bundle",
            price: "US$59.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202102/2311/wbFlN5z6XvcGXZzxC0KuvbRQ.png?w=230",
            title: "MotoGP™21",
            price: "US$49.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/img/rnd/202103/2509/rwjhsXEFypLPMbsla45qXzUB.png?w=230",
            title: "Oddworld: Soulstorm",
            price: "US$49.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/img/rnd/202103/2509/rwjhsXEFypLPMbsla45qXzUB.png?w=230",
            title: "Oddworld: Soulstorm",
            price: "US$49.99",
          },
          {
            img:
              "https://image.api.playstation.com/vulcan/ap/rnd/202010/2715/vaSr1x6ztbiHH0JPL1bUYAdA.png?w=230",
            title: "ALVO VR",
            price: "US$49.99",
          },
        ],
      },
    ],
    more: [
      {
        title: "PS5",
        img:
          "https://image.api.playstation.com/pr/bam-art/111/966/99ef5685-32e6-48f4-b719-a029189fdcf2.jpg?w=440",
      },
      {
        title: "PS4",
        img:
          "https://image.api.playstation.com/pr/bam-art/109/862/6976abbd-f911-4d88-ba7d-d50fe9789029.png?w=440",
      },
      {
        title: "Descuento",
        img:
          "https://image.api.playstation.com/pr/bam-art/109/861/6b8991e4-1b7e-4ea6-99c3-823e5bfc0948.png?w=440",
      },
      {
        title: "Complementos",
        img:
          "https://image.api.playstation.com/pr/bam-art/110/566/52a510cd-e8c3-441b-8b7d-c7c86d217de8.png?w=440",
      },
      {
        title: "Gratuitos",
        img:
          "https://image.api.playstation.com/pr/bam-art/109/861/cd0c2778-3363-42ef-b68d-3bf64d79b056.png?w=440",
      },
      {
        title: "VR",
        img:
          "https://image.api.playstation.com/pr/bam-art/111/152/2a125dbb-091c-4a5b-a7e3-1cf483daf439.jpg?w=440",
      },
      {
        title: "PS Plus",
        img:
          "https://image.api.playstation.com/pr/bam-art/108/737/a296b1f1-3dee-448f-aeab-7e31dec98048.png?w=440",
      },
    ],
    footer: {
      img: logopswhite,
      region: "Colombia",
      legal: [
        { title: "Asistencia", url: "#" },
        { title: "Política de provacidad", url: "#" },
        { title: "Términos de uso del sitio web", url: "#" },
        { title: "Mapa del sitio", url: "#" },
        { title: "PlayStaion Studios", url: "#" },
        { title: "Legal", url: "#" },
        { title: "Acerca de SIE", url: "#" },
      ],
      support: [
        { title: "Términos de servicio de PSN", url: "#" },
        { title: "Políticas de cancelación de PS Store", url: "#" },
        { title: "Avisos de salud", url: "#" },
        { title: "Acerca de las clasificaciones", url: "#" },
      ],
      socialMedia: [
        { title: "Facebook", url: "#" },
        { title: "Twitter", url: "#" },
        { title: "YouTube", url: "#" },
        { title: "Instragram", url: "#" },
        { title: "Aplicación de android", url: "#" },
        { title: "Aplicación iOS", url: "#" },
      ],
      copyright:
        "© 2021 Sony Interactive Entertainment Inc. Todos los derechos reservados.",
    },
  };
  return (
    <div className="App">
      <Nav menu={state.menu} />
      <Banner promo={state.promo} />
      <Listpro imgs={state.promos} />
      <div className="o-app-corousel">
        {state.content.map((ele, idx) => (
          <Carousel
            key={idx}
            title={ele.title}
            link={ele.link}
            games={ele.games}
          />
        ))}
      </div>
      <More title="Ver más" imgs={state.more} />
      <Footer footer={state.footer} />
    </div>
  );
}

export default App;
