import { CustomizeUserClass } from '../essense/user/customizeUserClass.js'
import { GetUserClass } from '../essense/user/factoryUserClass.js'
import { Canvas } from './canvas/canvas.js'

export class Game {
    #characterArrayButton = [...document.querySelectorAll('.button_character')]
    constructor() {
        if(Game.instance){
            return Game.instance
        }
        Game.instance = this
    }
    #characterType = (event) => {
        const userName = document.querySelector('.input_userName').value
        const user = new GetUserClass(event.target.dataset.type, userName)
        if(user.GetType() === 'vagabond') {
            new CustomizeUserClass().Customize()
        }else{
            new Canvas().StartGame()
        }
    }
    DeleteInstanse = () => {
        delete Game.instance
    }
    PlayerChooseCharacter = () => {
        this.#characterArrayButton.forEach((character) => character.addEventListener('click', this.#characterType))
    }
}

