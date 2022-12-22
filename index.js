class Game {
    #gameLevel
    #canvas
    #ctx
    constructor() {
        this.#gameLevel = 0
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
    Main = () => {
        this.#eventsHandler()
    }
}

const game = new Game()

game.Main()
