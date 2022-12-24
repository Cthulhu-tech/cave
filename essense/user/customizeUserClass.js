import { PositionMenu } from "../../game/menuHandler.js"
import { User } from './user.js'

export class CustomizeUserClass {
    #pointsParagraph
    #charackerStatsArray
    constructor() {
        if(CustomizeUserClass.instance){
            return CustomizeUserClass.instance
        }
        CustomizeUserClass.instance = this

        this.#pointsParagraph = document.querySelector('.points')
        this.#charackerStatsArray = document.querySelectorAll('.input_character_stats')
    }
    #showElement = () => {
        this.#pointsUpdate()
        this.#charackerStatsArray.forEach((input) => {
            this.#setValue(input)
            input.addEventListener('input', this.#notlifyPoints)
        })
        new PositionMenu().SetBackPosition('choose_character')
        new PositionMenu().ShowSection('customizite_character')
    }
    #notlifyPoints = (event) => {
        if(event.target.value > this.#getValue(event.target)){
            this.#updatePoints(event.target)
        }else{
            this.#updatePoints(event.target, -1)
        }
        this.#setValue(event.target)
        this.#pointsUpdate()
    }
    #setValue = (input) => {
        input.value = this.#getValue(input)
        input.previousElementSibling.firstElementChild.style.width = 13 * input.value + 'px'
    }
    #getValue = (input) => {
        switch (input.getAttribute('data-type')){
            case 'hp': return new User().GetHp()
            case 'speed': return new User().GetSpeed()
            case 'defence': return new User().GetDefence()
            case 'entellegence': return  new User().GetEntelligence()
            case 'perception': return new User().GetPerception()
            case 'endurance': return new User().GetEndurance()
            case 'charisma': return new User().GetCharisma()
            case 'agility': return new User().GetAgility()
            case 'luck': return new User().GetLuck()
        }
    }
    #updatePoints = (input, value = 1) => {
        if((new User().GetBuildPoint() > 0 || value < 0) && input.value <= 10 && input.value >= 1)
            switch (input.getAttribute('data-type')) {
                case 'hp': return new User().SetHp(value)
                case 'speed': return new User().SetSpeed(value)
                case 'defence': return new User().SetDefence(value)
                case 'entellegence': return  new User().SetEntelligence(value)
                case 'perception': return new User().SetPerception(value)
                case 'endurance': return new User().SetEndurance(value)
                case 'charisma': return new User().SetCharisma(value)
                case 'agility': return new User().SetAgility(value)
                case 'luck': return new User().SetLuck(value)
            }
        return false
    }
    #pointsUpdate = () => {
        const points = new User().GetBuildPoint()
        this.#pointsParagraph.firstElementChild.innerHTML = 'POINTS: ' + points
        this.#pointsParagraph.style.height = 3 * points + 'px'
    }
    Customize = () => {
        this.#showElement()
    }
}