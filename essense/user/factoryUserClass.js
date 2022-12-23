import { User } from "./user.js"

export class GetUserClass {
    constructor(typeUser = 'default', nameUser = 'user') {
        switch (typeUser){
            case 'FIGHTER':
                return new User()
                .SetName('fighter')
                .SetHp(4)
                .SetSpeed(4)
                .SetDefence(4)
                .SetEntelligence(4)
                .SetPerception(4)
                .SetEndurance(4)
                .SetCharisma(4)
                .SetAgility(4)
                .SetLuck(4)
            case 'TANK':
                return new User()
                .SetName('tank')
                .SetHp(5)
                .SetSpeed(3)
                .SetDefence(5)
                .SetEntelligence(3)
                .SetPerception(4)
                .SetEndurance(3)
                .SetCharisma(2)
                .SetAgility(3)
                .SetLuck(3)
            case 'ROGUE':
                return new User()
                .SetName('rogue')
                .SetHp(4)
                .SetSpeed(4)
                .SetDefence(4)
                .SetEntelligence(3)
                .SetPerception(4)
                .SetEndurance(3)
                .SetCharisma(2)
                .SetAgility(2)
                .SetLuck(3)
            case 'RANGER': 
                return new User()
                .SetName('ranger')
                .SetHp(4)
                .SetSpeed(4)
                .SetDefence(4)
                .SetEntelligence(3)
                .SetPerception(4)
                .SetEndurance(3)
                .SetCharisma(2)
                .SetAgility(2)
                .SetLuck(3)
            case 'MAGE': 
                return new User()
                .SetName('mage')
                .SetHp(4)
                .SetSpeed(4)
                .SetDefence(4)
                .SetEntelligence(3)
                .SetPerception(4)
                .SetEndurance(3)
                .SetCharisma(2)
                .SetAgility(2)
                .SetLuck(3)
            case 'SUMMONER':
                return new User()
                .SetName('summoner')
                .SetHp(4)
                .SetSpeed(4)
                .SetDefence(4)
                .SetEntelligence(3)
                .SetPerception(4)
                .SetEndurance(3)
                .SetCharisma(2)
                .SetAgility(2)
                .SetLuck(3)
            case 'CLERIC': 
            return new User()
                .SetName('cleric')
                .SetHp(4)
                .SetSpeed(4)
                .SetDefence(4)
                .SetEntelligence(3)
                .SetPerception(4)
                .SetEndurance(3)
                .SetCharisma(2)
                .SetAgility(2)
                .SetLuck(3)
            case 'BARD':
                return new User()
                .SetName('bard')
                .SetHp(4)
                .SetSpeed(4)
                .SetDefence(4)
                .SetEntelligence(3)
                .SetPerception(4)
                .SetEndurance(3)
                .SetCharisma(2)
                .SetAgility(2)
                .SetLuck(3)
            default: return new User().SetName(nameUser)
        }
    }
}