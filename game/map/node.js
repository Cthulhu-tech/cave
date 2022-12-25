import { Rectangle } from '../../utils/rectangle.js'

export class Node extends Rectangle {
    constructor(leaf){
        super()
        this.A = null
        this.B = null
        this.leaf = leaf
        this.sibling = null
        this.corridor = null
        this.parent = null
    }
    GetLeafs(){
        if (this.A === null && this.B === null)
                return [this.leaf]
            return [].concat(this.A.GetLeafs(), this.B.GetLeafs())
    }
}