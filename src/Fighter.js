/* Fighter class definition */

const MAX_LIFE = 100;
class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  };

  fight(defender) {
    const attack = this.strength;
    let attackValue = Math.floor(Math.random() * attack);
    if (attackValue <= 0) {
      attackValue = 1;
    }

    let attackFinal = attackValue - defender.dexterity;
    if (attackFinal <= 0) {
      attackFinal = 1;
    }

    console.log(
      this.name,
      "🗡️ ",
      defender.name,
      "(",
      defender.life, "💙)"
    );

    defender.life = defender.life - attackFinal;
    if (defender.life <= 0) {
      defender.life = 0;
    }

    return defender.life;
  };

  isAlive() {
    if (this.life) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Fighter;
