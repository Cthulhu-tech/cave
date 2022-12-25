import { Rectangle } from '../../utils/rectangle.js'
import { Random } from '../../utils/random.js'
import { Node }  from './node.js'

export class Generator{
    constructor(x, y, w, h, maxLevel = 5){
        this.maxLevel = maxLevel
        this.rootContainer = new Rectangle(x + 1, y + 1, w - 2, h - 2)
        this.rows = h
        this.cols = w
        this.map = []
        for(let h = 0; h < this.rows; h++ )
            for(let w = 0; w < this.cols; w++ ){
                let index = this.cols * h + w
                this.map[index] = 1
            }
        this.tree = this.Devide(this.rootContainer, 0)
        this.rooms = this.tree.GetLeafs()
        this.CreateRooms()
        this.ConnectRooms(this.tree)
    }
    RandomSplit(container){
        let r1
        let r2
        let splitVertical = new Random(0, 1).GetNumber()
        if(container.w > container.h && container.h / container.h >= 0.05)
            splitVertical = true
        else if(container.h > container.w && container.w / container.h >= 0.05)
            splitVertical = false
        if(splitVertical){
            this.w = new Random(container.w * 0.3, container.w * 0.6).GetNumber()
            r1 = new Rectangle(container.x, container.y, this.w, container.h);
            r2 = new Rectangle(container.x + this.w, container.y, container.w - this.w, container.h);
    
        }else{
            this.h = new Random(container.h * 0.3, container.h * 0.6).GetNumber()
            r1 = new Rectangle(container.x, container.y, container.w, this.h)
            r2 = new Rectangle(container.x, container.y + this.h, container.w, container.h - this.h)
        }
        return [r1, r2]
    }
    Devide(container, level){
        const root = new Node(container)
        if(level < this.maxLevel){
            const sr = this.RandomSplit(container)
            root.A = this.Devide(sr[0], level + 1)
            root.B = this.Devide(sr[1], level + 1)
        }
        return root
    }
    CreateRooms(){
      for(let i = 0; i < this.rooms.length; i++ ){
        const w = new Random(this.rooms[i].w * 0.5, this.rooms[i].w * 0.9).GetNumber()
        const h = new Random(this.rooms[i].h * 0.5, this.rooms[i].h * 0.9).GetNumber()
        const x = new Random(this.rooms[i].x, (this.rooms[i].x + this.rooms[i].w) - w).GetNumber()
        const y = new Random(this.rooms[i].y, (this.rooms[i].y + this.rooms[i].h) - h).GetNumber()
        for(let hi = y; hi < y + h; hi++ )
            for(let wi = x; wi < x + w; wi++ ){
                let index = this.cols * hi + wi
                this.map[index] = 0
            }
        }
    }
    ConnectRooms(node){
        if(node.A == null || node.B == null) return false
            const x1 = node.A.leaf.GetCenterX() >> 0
            const y1 = node.A.leaf.GetCenterY() >> 0
            const x2 = node.B.leaf.GetCenterX() >> 0
            const y2 = node.B.leaf.GetCenterY() >> 0
        for(let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++ ){
            let index = this.cols * Math.max(y1, y2) + x
            this.map[index] = 0
        }
        for(let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++ ){
            let index = this.cols * y + Math.max(x1, x2)
            this.map[index] = 0
        }
        this.ConnectRooms(node.A)
        this.ConnectRooms(node.B)  
    }
}
