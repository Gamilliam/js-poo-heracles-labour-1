// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter.js");

const Heracles = new Fighter("🧔 Heracles", 20, 6);
const Lion = new Fighter("🦁 Nemean Lion", 11, 13);
const Pebble = new Fighter("Petit caillou, The True French Pebble", 1, 1);

console.log(
  "Héraclès s’échauffe un peu, resserre ses muscles, écrase quelques rochers à mains nues. Il est prêt à se battre !\n Héraclès entre dans la grotte, le Lion est là, ses yeux rouges pointés sur son ennemi. Le combat est imminent :"
);

let round = 0;
while (Heracles.isAlive() && Lion.isAlive()) {
  round++;
  console.log("\n🕛 Round:", round);
  Heracles.fight(Lion);
  if (!Lion.isAlive()) {
    break;
  }
  Lion.fight(Heracles);
}

if (Lion.life === 0) {
  console.warn("💀 ", Lion.name, "is dead");
    console.warn("🏆 ", Heracles.name, "wins with", Heracles.life + " point(s) of life");
    console.log(Heracles.name + " walks away from the battle when he steps on a pebble on the road...");
    Pebble.fight(Heracles);
    if(Heracles.life===0){
        console.log(Pebble.name, "wins. Nature is the greatest warrior of all.");
    } else {
    console.warn("🏆 ", Heracles.name, "is the great winner with", Heracles.life + " point(s) of life");
    }
} else {
  console.warn("💀 ", Heracles.name, "is dead");
  console.warn("🏆 ", Lion.name, "with", Lion.life +"point(s) of life");
}