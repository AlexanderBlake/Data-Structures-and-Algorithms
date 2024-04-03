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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let back = head;
    let curr = head.next;
    let forward;

    if (curr) {
        forward = curr.next;
    } else {
        forward = null;
    }

    back.next = null;

    while (forward) {
        curr.next = back;

        back = curr;
        curr = forward;
        forward = forward.next;
    }

    curr.next = back;

    return curr;
};