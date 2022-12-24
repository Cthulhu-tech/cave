import { PositionMenu } from './game/menuHandler.js'
import { Observer } from './utils/observer.js'
import { Game } from './game/game.js'

export class Menu {
    #start
    #stats
    #options
    #startGame

    constructor() {
        if(Menu.instance){
            return Menu.instance
        }
        Menu.instance = this

        this.#startGame = new Observer()
        this.#start = document.querySelector('.button_start')
        this.#stats = document.querySelector('.button_stats')
        this.#options = document.querySelector('.button_options')
    }
    #startGameSubscribe = () => {
        this.#start.addEventListener('click', this.#startHandler)
        this.#startGame.subscribe(new Game().PlayerChooseCharacter)
    }
    #statGameSubscribe = () => {
        this.#stats.addEventListener('click', this.#statsHandler)
    }
    #optionsGameSubscribe = () => {
        this.#options.addEventListener('click', this.#optionsHandler)
    }
    #startHandler = () => {
        new PositionMenu().ShowSection('choose_character')
        this.#startGame.notlify()
    }
    #statsHandler = () => {
        new PositionMenu().ShowSection('game_stats')
    }
    #optionsHandler = () => {
        new PositionMenu().ShowSection('game_options')
    }
    MenuHandler = () => {
        this.#startGameSubscribe()
        this.#statGameSubscribe()
        this.#optionsGameSubscribe()
    }
}

new Menu().MenuHandler()
