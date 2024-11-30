const pokedex = {
  title: "Pokédex",
  link: "/projects/pokedex",
  desc: "Pokédex créé en Svelte",
  gitSrc: "https://github.com/EnzoDiGiovanni/Pokedex-2.0",
  date: "2024",
  imgSrc: "/images/pokedex.webp",
  technos: [
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
const arcade = {
  title: "Arcade Games",
  link: "/projects/arcade",
  desc: "Site de jeux connus, réalisé avec JavaScript",
  gitSrc: "https://github.com/EnzoDiGiovanni/ArcadeGames",
  date: "2024",
  imgSrc: "/images/arcadegame.webp",
  technos: [
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
const myBookList = {
  title: "My Book List",
  link: "/projects/myBookList",
  desc: "Application mobile pour les amateurs de livres !",
  gitSrc: "https://github.com/EnzoDiGiovanni/MyBookList",
  date: "2024",
  imgSrc: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
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
const projects = {
  pokedex,
  arcade,
  myBookList
};
export {
  projects as p
};
