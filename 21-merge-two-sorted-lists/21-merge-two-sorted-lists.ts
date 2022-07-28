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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if(list1 && !list2) return list1
    if(!list1 && list2) return list2
    if(!list1 && !list2) return null
    let newList : ListNode 
    let temp1 = list1
    let temp2 = list2
    if(temp1.val <= temp2.val){
        newList = new ListNode(temp1.val)
            temp1 = temp1.next
    }
    else {
        newList = new ListNode(temp2.val)
        temp2 = temp2.next
    }
  let   tempNode = newList
    while(temp1 && temp2){
     
        if(temp1.val <= temp2.val){
            tempNode.next = new ListNode(temp1.val)
            temp1 = temp1.next
        }
        else{
            tempNode.next = new ListNode(temp2.val)
            temp2 = temp2.next
        }
        tempNode = tempNode.next
        
    }
    if(temp2 && !temp1 ) tempNode.next = temp2
    else if (!temp2 && temp1) tempNode.next = temp1
    return newList
};