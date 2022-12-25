export class Point {
    #x
    #y
    constructor(x, y){
        this.#x = x
        this.#y = y
    }
    Random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}
