export class Tree {
    #leaf
    #lchild
    #rchild
    constructor(leaf) {
        this.#leaf = leaf
        this.#lchild = undefined
        this.#rchild = undefined 
    }
    GetLeaf = () => {
        return this.#leaf
    }
    GetLchild = () => {
        return this.#lchild
    }
    GetRchild = () => {
        return this.#rchild
    }
    SetLchild = (lchild) => {
        this.#lchild = lchild
    }
    SetRchild = (rchild) => {
        this.#rchild = rchild
    }
    GetLeafs = () => {
        if(this.#lchild === undefined && this.#rchild === undefined)
            return this.#leaf
        return [].concat(this.#lchild.GetLeafs(), this.#rchild.GetLeafs())
    }
    GetLevel = (level, queue) => {
        if(queue === undefined)
            queue = []
        if(level == 1)
            queue.push(this)
        else
            if(this.#lchild !== undefined)
                this.#lchild.GetLevel(level - 1, queue)
            if(this.#rchild !== undefined)
                this.#rchild.GetLevel(level - 1, queue)        
        return queue
    }
    Paint = (c) => {
        this.leaf.Paint(c)
        if(this.#lchild !== undefined)
            this.#lchild.Paint(c)
        if(this.#rchild !== undefined)
            this.#rchild.Paint(c)
    }
}
