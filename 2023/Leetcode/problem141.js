/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next || !head.next.next) {
        return false;
    }
    
    let fast = head;
    let slow = head;

    do {
        fast = fast.next.next;
        slow = slow.next;
    } while (fast !== slow && fast.next && fast.next.next);

    return fast === slow;
};