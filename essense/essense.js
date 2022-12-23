export class Essense {
    #hp
    #name
    #speed
    #defence

    #buildPoint

    #perception
    #endurance
    #charisma
    #entelligence
    #agility
    #luck

    constructor() {
        this.#hp = 1
        this.#name = 'essense'
        this.#speed = 1
        this.#defence = 1

        this.#buildPoint = 36

        this.#entelligence = 1
        this.#perception = 1
        this.#endurance = 1
        this.#charisma = 1
        this.#agility = 1
        this.#luck = 1
    }
    //
    SelfDead = () => {
        this.#hp = 0
    }
    //
    UpDefence = (defenceUp = 1) => {
        this.#defence += defenceUp
        return `${this.#name} increased DEFENCE to ${this.#defence} (+${defenceUp})`
    }
    UpSpeed = (speedUp = 1) => {
        this.#speed += speedUp
        return `${this.#name} increased SPEED to ${this.#speed} (+${speedUp})`
    }
    UpHp = (hpUp = 1) => {
        this.#hp += defenceUp
        return `${this.#name} increased HP to ${this.#hp} (+${hpUp})`
    }
    //
    UpEntelligence = (entelligence) => {
        this.#entelligence += entelligence
        return `${this.#name} increased Entelegence to ${this.#entelligence} (+${entelligence})`
    }
    UpPerception = (perception) => {
        this.#perception += perception
        return `${this.#name} increased Perception to ${this.#perception} (+${perception})`
    }
    UpEndurance = (endurance) => {
        this.#endurance += endurance
        return `${this.#name} increased Endurance to ${this.#endurance} (+${endurance})`
    }
    UpCharisma = (charisma) => {
        this.#charisma += charisma
        return `${this.#name} increased Charisma to ${this.#charisma} (+${charisma})`
    }
    UpAgility = (agility) => {
        this.#agility += agility
        return `${this.#name} increased Agility to ${this.#agility} (+${agility})`
    }
    UpLuck = (luck) => {
        this.#luck += luck
        return `${this.#name} increased Luck to ${this.#luck} (+${luck})`
    }
    //
    GetHp = () => {
        return this.#hp
    }
    GetName = () => {
        return this.#name
    }
    GetSpeed = () => {
        return this.#speed
    }
    GetDefence = () => {
        return this.#defence
    }
    GetBuildPoint() {
        return this.#buildPoint
    }
    GetEntelligence = () => {
        return this.#entelligence
    }
    GetPerception = () => {
        return this.#perception
    }
    GetEndurance = () => {
        return this.#endurance
    }
    GetCharisma = () => {
        return this.#charisma
    }
    GetAgility = () => {
        return this.#agility
    }
    GetLuck = () => {
        return this.#luck
    }
    //
    SetName(name) {
        this.#name = name
        return this
    }
    SetSpeed(speed) {
        if(this.#buildPoint > 0 && speed < this.#buildPoint){
            this.#speed += speed
            return this
        }
        return false
    }
    SetHp(hp) {
        if(this.#buildPoint > 0 && hp < this.#buildPoint){
            this.#hp += hp
            return this
        }
        return false
    }
    SetDefence(defence) {
        if(this.#buildPoint > 0 && defence < this.#buildPoint){
            this.#defence += defence
            return this
        }
        return false
    }
    //
    SetEntelligence(entelligence) {
        if(this.#buildPoint > 0 && entelligence < this.#buildPoint){
            this.#entelligence += entelligence
            return this
        }
        return false
    }
    SetPerception(perception) {
        if(this.#buildPoint > 0 && perception < this.#buildPoint){
            this.#perception += perception
            return this
        }
        return false
    }
    SetEndurance(endurance) {
        if(this.#buildPoint > 0 && endurance < this.#buildPoint){
            this.#endurance += endurance
            return this
        }
        return false
    }
    SetCharisma(charisma) {
        if(this.#buildPoint > 0 && charisma < this.#buildPoint){
            this.#charisma += charisma
            return this
        }
        return false
    }
    SetAgility(agility) {
        if(this.#buildPoint > 0 && agility < this.#buildPoint){
            this.#agility += agility
            return this
        }
        return false
    }
    SetLuck(luck) {
        if(this.#buildPoint > 0 && luck < this.#buildPoint){
            this.#luck += luck
            return this
        }
        return false
    }
    //
    Build(essense) { 
        return new essense()
    }
}
