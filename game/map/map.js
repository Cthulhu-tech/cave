import { Container } from './container.js'
import { Point } from './point.js'
import { Tree } from './tree.js'

export class Map {
    #root
    constructor(container, iter) {
        this.#root = new Tree(container)
        if(iter !== 0) {
            const sr = this.Random_split(container)
            this.#root.SetLchild(split_container(sr[0], iter - 1))
            this.#root.SetRchild(split_container(sr[1], iter - 1))
        }
    }
    GetRoot = () => {
        return this.#root
    }
    Random_split = (container, DISCARD_BY_RATIO, W_RATIO, H_RATIO) => {
        let r1
        let r2
        if(new Point().Random(0, 1) === 0){
            r1 = new Container(container.GetX(), container.GetY(),
            new Point().Random(1, container.GetW()), container.GetH())
            r2 = new Container(container.GetX() + r1.GetW(), container.GetY(),
            container.GetW() - r1.GetW(), container.GetH())
            if (DISCARD_BY_RATIO) {
                const r1_w_ratio = r1.GetW() / r1.GetH()
                const r2_w_ratio = r2.GetW() / r2.GetH()
                if (r1_w_ratio < W_RATIO || r2_w_ratio < W_RATIO) {
                    return this.Random_split(container)
                }
            }    
        }else{
            r1 = new Container(container.GetX(), container.GetY(),
            container.GetW(), new Point().Random(1, container.GetH()))
            r2 = new Container(container.GetX(), container.GetY() + r1.GetH(),
            container.GetW(), container.GetH() - r1.GetH())
            if (DISCARD_BY_RATIO) {
                var r1_h_ratio = r1.GetH() / r1.GetW()
                var r2_h_ratio = r2.GetH() / r2.GetW()
                if (r1_h_ratio < H_RATIO || r2_h_ratio < H_RATIO) {
                    return this.Random_split(container)
                }
            }
        }
        return [r1, r2]
    }
}
