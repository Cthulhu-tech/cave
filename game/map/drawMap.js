import { Canvas } from "../canvas/canvas.js"
import { Generator } from "./generator.js"

export class Map {
    #ctx
    #size
    #nodes
    #canvas
    #tileSize = 8
    constructor(size = 4, width = 1000, height = 1000) {
        this.#size = size
        this.#ctx = new Canvas().GetContext()
        this.#canvas = new Canvas().GetCanvas()
        this.#nodes = new Generator(0, 0, width / this.#tileSize >> 0, height / this.#tileSize >> 0, this.#size)
    }
    GetNodes = () => {
        return this.#nodes
    }
    UpdateMap = (node) => {
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
        for (let i =  0; i < node.rooms.length; i++) {
            this.#ctx.strokeStyle = 'hsla('+a * 32+', 50%, 80%, 1)'
            this.#ctx.fillStyle = 'hsla('+a * 32+', 50%, 50%, 0.5)'
            this.#ctx.beginPath()
            // this.#ctx.rect(node.rooms[i].x * this.#tileSize, node.rooms[i].y * this.#tileSize, node.rooms[i].w* this.#tileSize, node.rooms[i].h * this.#tileSize );
            // this.#ctx.fillRect((node.rooms[i].x * this.#tileSize), (node.rooms[i].y * this.#tileSize), node.rooms[i].w * this.#tileSize, node.rooms[i].h * this.#tileSize);
            // this.#ctx.stroke();
            // this.#ctx.fillStyle = '#181818';
            // this.#ctx.fillText(node.rooms[i].x, node.rooms[i].x * this.#tileSize, node.rooms[i].y * this.#tileSize);
            a++
        }
    }

}