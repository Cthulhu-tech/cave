import { Observer } from '../../utils/observer.js'

export class Canvas {
    #canvas
    #ctx
    #observer
    constructor () {
        this.#observer = new Observer()
        this.#canvas = document.querySelector('.canvas')
        this.#ctx = this.#canvas.getContext('2d')
        this.#subscribe()
    }
    #subscribe = () => {
        this.#observer.subscribe(this.#deleteEventHandler)
        this.#observer.subscribe(this.#eventsHandler)
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
    #deleteEventHandler = () => {
        window.removeEventListener('resize', this.#canvasSize)
    }
    StartGame = () => {
        this.#observer.notlify()
    }
}