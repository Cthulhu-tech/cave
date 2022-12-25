import { Point } from './point.js'

export class Container {
    #x
    #y
    #w
    #h
    #center
    constructor(x, y, w, h){
        this.#x = x
        this.#y = y
        this.#w = w
        this.#h = h
        this.center = new Point(this.#x + (this.#w / 2), this.#y + (this.#h / 2))
    }
    Paint = (ctx, SQUARE) => {
        ctx.strokeStyle = "#OFO"
        ctx.lineWidth = 2
        ctx.strokeRect(this.#x * SQUARE, this.#y * SQUARE,
                       this.#y * SQUARE, this.#h * SQUARE)
    }
    DrawPath = (ctx, container, SQUARE) => {
        ctx.beginPath()
        ctx.lineWidth = SQUARE
        ctx.strokeStyle = "#888"
        ctx.moveTo(this.#center.GetX() * SQUARE, this.#center.GetY() * SQUARE)
        ctx.lineTo(container.GetCenter().GetX() * SQUARE, container.GetCenter().GetY() * SQUARE)
        ctx.stroke()
    }
    DrawPaths = (ctx, tree) => {
        if(tree.GetLchild() === undefined || tree.GetRchild() === undefined)
            return
        tree.GetLchild().GetLeaf().DrawPath(ctx, tree.GetRchild().GetLeaf())
        this.DrawPaths(ctx, tree.GetLchild())
        this.DrawPaths(ctx, tree.GetRchild())
    }
    GetX = () => {
        return this.#x
    }
    GetY = () => {
        return this.#y
    }
    GetW = () => {
        return this.#w
    }
    GetH = () => {
        return this.#h
    }
    GetCenter = () => {
        return this.#center
    }
}