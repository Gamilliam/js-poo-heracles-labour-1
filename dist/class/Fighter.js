"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const const_1 = require("../const");
class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = const_1.MAX_LIFE;
    }
    ;
    fight(defender) {
        const attack = this.strength;
        let attackValue = (Math.floor(Math.random() * attack)) - defender.dexterity;
        if (attackValue <= 0) {
            attackValue = 1;
        }
        console.log(this.name, "🗡️  attacks \u{1F6E1} ", defender.name, "(", defender.life, "💙)");
        defender.life = defender.life - attackValue;
        if (defender.life <= 0) {
            defender.life = 0;
        }
        return defender.life;
    }
    ;
    isAlive() {
        if (this.life) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Fighter = Fighter;
module.exports = { Fighter };
