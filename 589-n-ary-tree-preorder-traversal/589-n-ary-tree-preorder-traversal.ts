/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */


function preorder(root: Node | null): number[] {
    if(!root) return []
let childrentQueue = root.children
const res = [root.val]
while(childrentQueue.length !== 0){
    let next = childrentQueue.splice(0,1)
    res.push(next[0].val)
    childrentQueue = next[0].children.concat(childrentQueue)
    
}
    return res

};