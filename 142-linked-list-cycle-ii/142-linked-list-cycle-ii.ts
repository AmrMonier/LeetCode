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

// function detectCycle(head: ListNode | null): ListNode | null {
//     const hashMap = new Map<ListNode, boolean>()
//     while(head){        
//         if(hashMap.get(head)) return head
//         else hashMap.set(head, true)
//         head = head.next
//     }
//     return null
// };
// Floyed Algorithm
function detectCycle(head: ListNode | null): ListNode | null {
    let fast = head, slow = head
    while(slow && fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(fast === slow){
            slow = head
            while(fast !== slow){
                fast = fast.next
                slow = slow.next
            }
            return slow
        }
    }
    return null
};