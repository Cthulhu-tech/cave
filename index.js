import { Observer } from './utils/observer.js'
import { Game } from './game/game.js'

class Menu {
    #start
    #stats
    #options
    #mainMenu
    #startGame
    constructor() {
        this.#startGame = new Observer()
        this.#start = document.querySelector('.button_start')
        this.#stats = document.querySelector('.button_stats')
        this.#options = document.querySelector('.button_options')

        this.#mainMenu = document.querySelector('.main_menu')
    }
    #startGameSubscribe(){
        this.#startGame.subscribe(new Game().StartGame)
    }
    #hiddenMenu = () => {
        this.#mainMenu.style.display = 'none'
    }
    #startHandler = () => {
        this.#hiddenMenu()
        this.#startGame.notlify()
    }
    #statsHandler = () => {
        this.#hiddenMenu()
    }
    #optionsHandler = () => {
        this.#hiddenMenu()
    }
    MenuHandler = () => {
        this.#startGameSubscribe()
        this.#start.addEventListener('click', this.#startHandler)
        this.#stats.addEventListener('click', this.#statsHandler)
        this.#options.addEventListener('click', this.#optionsHandler)
    }
}

new Menu().MenuHandler()
