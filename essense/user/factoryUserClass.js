import { User } from "./user.js"

export class GetUserClass {
    constructor(typeUser = 'default', nameUser = 'user') {
        switch (typeUser){
            case 'FIGHTER': {
                const fighter = new User()

                return fighter
            }
            case 'TANK': {
                const tank = new User()

                return tank
            }
            case 'ROGUE': {
                const rogue = new User()

                return rogue
            }
            case 'RANGER': {
                const ranger = new User()

                return ranger
            }
            case 'MAGE': {
                const mage = new User()

                return mage
            }
            case 'SUMMONER': {
                const summoner = new User()

                return summoner
            }
            case 'CLERIC': {
                const cleric = new User()

                return cleric
            }
            case 'BARD': {
                const bard = new User()

                return bard
            }
            default: return new User().SetName(nameUser)
        }
    }
}