export class Room {
    #x
    #y
    #w
    #h
    constructor(container) {
        this.#x = container.GetX() + new Point.Random(0, Math.floor(container.GetW() / 3))
        this.#y = container.GetY() + new Point.Random(0, Math.floor(container.GetH() / 3))
        this.#w = container.GetW() - (this.#x - container.GetX())
        this.#h = container.GetH() - (this.#y - container.GetY())
        this.#w -= new Point.Random(0, this.#w / 3)
        this.#h -= new Point.Random(0, this.#w / 3)
    }
    Paint = (ctx, SQUARE) => {
        ctx.fillStyle = "#888"
        ctx.fillRect(this.#x * SQUARE, this.#y * SQUARE,
                     this.#w * SQUARE, this.#h * SQUARE)
    }
}