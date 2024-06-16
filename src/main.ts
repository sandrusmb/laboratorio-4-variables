import "./style.css";

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const classic = "🎼 Clásica";

const nameStyle = "background-color:green; font-size:18px; font-weight:bold";

interface Band {
  name: string;
  singer?: string;
  composer?: string;
  year: number;
  active: boolean;
  genre: string;
}

const bandOne: Band = {
  name: "The Beatles",
  year: 1960,
  active: true,
  genre: `${popRock}`,
};

const bandTwo: Band = {
  name: "Queen",
  year: 1970,
  active: false,
  genre: `${rock}`,
};

const bandThree: Band = {
  name: "AC DC",
  year: 1973,
  active: true,
  genre: `${hardRock}`,
};

const bandFour: Band = {
  name: "Ludwig van Beethoven",
  year: 1770,
  active: false,
  genre: `${classic}`,
};

const bandFive: Band = {
  name: "The Rolling Stones",
  year: 1962,
  active: true,
  genre: `${rock}`,
};

console.log(`%c${bandOne.name}`, nameStyle);
console.log(
  `Se fundó en ${bandOne.year}, actualmente la banda está ${
    bandOne.active ? "en activo" : "inactiva"
  } y el género musical es ${bandOne.genre}`
);

console.log(`%c${bandTwo.name}`, nameStyle);
console.log(
  `Se fundó en ${bandTwo.year}, actualmente la banda está ${
    bandTwo.active ? "en activo" : "inactiva"
  } y el género musical es ${bandTwo.genre}`
);

console.log(`%c${bandThree.name}`, nameStyle);
console.log(
  `Se fundó en ${bandThree.year}, actualmente la banda está ${
    bandThree.active ? "en activo" : "inactiva"
  } y el género musical es ${bandThree.genre}`
);

console.log(`%c${bandFour.name}`, nameStyle);
console.log(
  `Se fundó en ${bandFour.year}, actualmente la banda está ${
    bandFour.active ? "en activo" : "inactiva"
  } y el género musical es ${bandFour.genre}`
);

console.log(`%c${bandFive.name}`, nameStyle);
console.log(
  `Se fundó en ${bandFive.year}, actualmente la banda está ${
    bandFive.active ? "en activo" : "inactiva"
  } y el género musical es ${bandFive.genre}`
);
