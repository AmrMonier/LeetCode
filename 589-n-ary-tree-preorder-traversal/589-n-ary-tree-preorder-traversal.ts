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
let childrentQueue = root.children.reverse()
const res = [root.val]
while(childrentQueue.length !== 0){
    let next = childrentQueue.pop()
    res.push(next.val)
    childrentQueue = childrentQueue.concat(next.children.reverse())
}
    return res
};