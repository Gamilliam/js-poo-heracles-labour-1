export interface IFighter {
    name:string;
    strength:number;
    dexterity: number;
    life: number;
    fight(defender:IFighter):number;
    isAlive():boolean;
}
export interface IBighter {
    name:string;
    strength:number;
    dexterity: number;
    life: number;
    fight(defender:IFighter):number;
    isAlive():boolean;
}