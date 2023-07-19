// First Labour : Heracles vs Nemean Lion
// use your Figher class here

import {Fighter} from "./class/Fighter";

const Pebble = new Fighter("\u{1FAA8}  Petit caillou, The True French Pebble", 1, 1);
const Heracles = new Fighter("\u{1F938} Heracles", 20, 6);
const Lion = new Fighter("\u{1F981} Nemean Lion", 11, 13);

console.log(
  Heracles.name, "warms up, tightens his muscles, crushes A LOT of rocks with his bare hands. He's ready to fight today!\n", Heracles.name, "enters the cave, the", Lion.name, "is there, annoyed by his unexpected guest who did not knock before entering his lair. He keeps his red eyes fixed on his new enemy.\nA fight is imminent:"
);

let round:number = 0;
while (Heracles.isAlive() && Lion.isAlive()) {
  round++;
  console.log("\n\u{1FAA7}  Round:", round, "\u{1FAA7}");
  Heracles.fight(Lion);
  if (!Lion.isAlive()) {
    break;
  }
  Lion.fight(Heracles);
}

if (Lion.life === 0) {
  console.warn("\n💀 ", Lion.name, "is dead \u{1FAA6}");
  console.warn("\u{21DB}🏆", Heracles.name, "wins with", Heracles.life + " point(s) of life");
  console.warn("\n\u{26A0}", Heracles.name + " walks away from the battle when he steps on a pebble on the road...");
  Pebble.fight(Heracles);
  if (Heracles.life === 0) {
    console.log("\n\u{21DB}🏆", Pebble.name, "wins. Nature is the greatest warrior of all. It's family is finally avenged!");
  } else {
    console.warn("\n\u{21DB}🏆", Heracles.name, "survives!\nHe is the great winner with", Heracles.life + " point(s) of life left");
  }
} else {
  console.warn("\n💀 ", Heracles.name, "is dead \u{1FAA6}");
  console.warn("\u{21DB}🏆", Lion.name, "with", Lion.life + " point(s) of life left");
}

