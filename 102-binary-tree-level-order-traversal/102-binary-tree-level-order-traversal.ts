/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
const res = []
if(!root) return res
let stack = [root]

while(stack.length !== 0){
let nextLevel = []    
    let currentLevel = []
    while(stack.length !== 0){
        let node = stack.splice(0,1)[0]
        
            currentLevel.push(node.val)
        if(node.left)
            nextLevel.push(node.left)
        if(node.right)
            nextLevel.push(node.right)
        
    }
    res.push(currentLevel)
    stack = nextLevel
}
    return res
};