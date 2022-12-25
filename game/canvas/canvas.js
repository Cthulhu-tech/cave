import { Observer } from '../../utils/observer.js'
import { PositionMenu } from '../menuHandler.js'
import { Map } from '../map/drawMap.js'
export class Canvas {
    #ctx
    #map
    #canvas
    #observer
    constructor () {
        if(Canvas.instance){
            return Canvas.instance
        }
        Canvas.instance = this
        this.#observer = new Observer()
        this.#canvas = document.querySelector('.canvas')
        this.#ctx = this.#canvas.getContext('2d')
        this.#subscribe()
    }
    GetCanvas = () => {
        return this.#canvas
    }
    GetContext = () => {
        return this.#ctx
    }
    #subscribe = () => {
        new PositionMenu().HiddenSection()
        this.#observer.subscribe(this.#deleteEventHandler)
        this.#observer.subscribe(this.#eventsHandler)
        this.#observer.subscribe(this.#generateMap)
    }
    #canvasSize = () => {
        this.#canvas.style.width = window.innerWidth + 'px'
        this.#canvas.style.height = window.innerHeight + 'px'
        this.#canvas.width = window.innerWidth
        this.#canvas.height = window.innerHeight
    }
    #clearCanvas = () => {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
    }
    #generateMap = () => {
        this.#map = new Map()
    }
    #animationFrame = () => {
        this.#clearCanvas()
        this.#map.UpdateMap(this.#map.GetNodes())
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
    CanvasStart = () => {
        this.#observer.notlify()   
    }
}