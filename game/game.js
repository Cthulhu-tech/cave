import { GetUserClass } from '../essense/user/factoryUserClass.js'
export class Game {
    #canvas
    #ctx

    #chooseCharacter = document.querySelector('.choose_character')

    #characterArrayButton = [...document.querySelectorAll('.button_character')]
    constructor() {
        if(Game.instance){
            return Game.instance
        }
        Game.instance = this
        this.#canvas = document.querySelector('.canvas')
        this.#ctx = this.#canvas.getContext('2d')
    }
    #canvasSize = () => {
        this.#canvas.style.width = window.innerWidth + 'px'
        this.#canvas.style.height = window.innerHeight + 'px'
        this.#canvas.width = window.innerWidth
        this.#canvas.height = window.innerHeight
    }
    #clearCanvas = (x = 0, y = 0) => {
        this.#ctx.clearRect(0, y, x, this.#canvas.height)
    }
    #animationFrame = () => {
        this.#clearCanvas()
        requestAnimationFrame(this.#animationFrame)
    }
    #eventsHandler = () => {
        this.#canvasSize()
        window.addEventListener('resize', this.#canvasSize)
        requestAnimationFrame(this.#animationFrame)
    }
    #characterType = (event) => {
       console.log( new GetUserClass(event.target.dataset.type))
    }
    DeleteInstanse = () => {
        delete Game.instance
    }
    PlayerChooseCharacter = () => {
        this.#chooseCharacter.style.display = 'block'
        this.#characterArrayButton.forEach((character) => character.addEventListener('click', this.#characterType))
    }
    StartGame = () => {
        this.#eventsHandler()
    }
}


