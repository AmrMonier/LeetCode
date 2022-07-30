/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    const hashMap = new Map<ListNode, boolean>()
    while(head){


        
        if(hashMap.get(head)) return head
        else hashMap.set(head, true)
        head = head.next
    }
    return null
};