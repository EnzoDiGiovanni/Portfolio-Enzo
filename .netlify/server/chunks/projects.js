const pokedex = {
  title: "Pokédex",
  link: "/projects/pokedex",
  desc: "Pokédex créé en Svelte",
  gitSrc: "https://github.com/EnzoDiGiovanni/Pokedex-2.0",
  date: "2024",
  imgSrc: "/images/pokedex.webp",
  technos: [
    "HTML",
    "CSS",
    "Svelte"
  ],
  tags: [
    "Front-end",
    "Projet personnel",
    "API",
    "Développement web"
  ],
  about: "Créer un Pokedex était le meilleur moyen pour moi d'apprendre à utiliser Svelte et les calls API. "
};
const APIREST = {
  title: "API REST",
  link: "/projects/APIREST",
  desc: "Ma première API REST créée en GO / Postman ",
  gitSrc: "https://github.com/EnzoDiGiovanni/Rest-API-Golang",
  date: "2024",
  imgSrc: "/images/restapi.png",
  technos: [
    "Golang"
  ],
  tags: [
    "Développement Back-End",
    "Projet personnel",
    "API REST",
    "Postman"
  ],
  about: "J'ai créé cette première API REST en Go pour deux raisons : apprendre ce langage que je découvre et m'initier à la création d'API REST, afin de poser les bases pour développer des projets Back-End plus ambitieux."
};
const myBookList = {
  title: "My Book List",
  link: "/projects/myBookList",
  desc: "Application mobile pour les amateurs de livres !",
  gitSrc: "https://github.com/EnzoDiGiovanni/MyBookList",
  date: "2024",
  imgSrc: "/images/booklist.png",
  technos: [
    "Flutter"
  ],
  tags: [
    "Développement mobile",
    "Projet personnel",
    "GoogleBooks API"
  ],
  about: "À la demande d’un proche, un ami et moi avons commencé à développer une application qui permet de gérer les livres à lire et ceux déjà lus. L’application propose également une fonctionnalité pour ajouter des livres à une wishList afin de les acheter plus tard, ainsi qu’une section de recherche connectée à l’API de Google pour enrichir la wishList."
};
const arcade = {
  title: "Arcade Games",
  link: "/projects/arcade",
  desc: "Site de jeux connus, réalisé avec JavaScript",
  gitSrc: "https://github.com/EnzoDiGiovanni/ArcadeGames",
  date: "2024",
  imgSrc: "/images/arcadegame.webp",
  technos: [
    "HTML",
    "CSS",
    "JavaScript"
  ],
  tags: [
    "Front-end",
    "Projet personnel",
    "Développement web",
    "Jeux"
  ],
  about: "Étant fan des vieux jeux d'arcade et des jeux ayant marqué les gens, j'ai créé ce site pour entraîner mon JavaScript et pour me faire plaisir "
};
const projects = {
  pokedex,
  APIREST,
  myBookList,
  arcade
};
export {
  projects as p
};
