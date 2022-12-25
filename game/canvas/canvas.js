import { Observer } from '../../utils/observer.js'
import { PositionMenu } from '../menuHandler.js'
import { Generator } from '../map/generator.js'

export class Canvas {
    #canvas
    #ctx
    #observer
    #nodes
    #tileSize = 8
    constructor () {
        this.#observer = new Observer()
        this.#canvas = document.querySelector('.canvas')
        this.#ctx = this.#canvas.getContext('2d')
        this.#subscribe()
    }
    #subscribe = () => {
        new PositionMenu().HiddenSection()
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
    #drawTree(node){
        this.#ctx.fillStyle = '#181818'
        let a = 0
        for(let h = 0; h < node.rows; h++ )
          for(let w = 0; w < node.cols; w++ ){
                let index = node.cols * h + w
                let y = index / node.cols >> 0
                let x = (index - y * node.cols)
                if(node.map[index] == 1)
                    this.#ctx.fillRect( x * this.#tileSize, y * this.#tileSize, this.#tileSize, this.#tileSize)
                a++
            }
        console.log(node)
        for (let i =  0; i < node.rooms.length; i++) {
            this.#ctx.strokeStyle = 'hsla('+a * 32+', 50%, 80%, 1)'
            this.#ctx.fillStyle = 'hsla('+a * 32+', 50%, 50%, 0.2)'
            this.#ctx.beginPath()
            // this.#ctx.rect(node.rooms[i].x * this.#tileSize, node.rooms[i].y * this.#tileSize, node.rooms[i].w* this.#tileSize, node.rooms[i].h * this.#tileSize );
            // this.#ctx.fillRect((node.rooms[i].x * this.#tileSize), (node.rooms[i].y * this.#tileSize), node.rooms[i].w * this.#tileSize, node.rooms[i].h * this.#tileSize);
            // this.#ctx.stroke();
            // this.#ctx.fillStyle = '#181818';
            // this.#ctx.fillText(node.rooms[i].x, node.rooms[i].x * this.#tileSize, node.rooms[i].y * this.#tileSize);
            a++
        }
    }
    StartGame = () => {
        this.#observer.notlify()
        this.#nodes = new Generator(0, 0, this.#canvas.width / this.#tileSize >> 0, this.#canvas.height / this.#tileSize >> 0, 5)
        this.#drawTree(this.#nodes)        
    }
}