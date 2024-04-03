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

function getMiddle(head: ListNode): ListNode {
    let fast = head;
    let slow = head;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow.next;
}

function reverseList(head: ListNode): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let back = head;
    let curr = head.next;
    let forward = curr.next;

    back.next = null;

    while (forward) {
        curr.next = back;

        back = curr;
        curr = forward;
        forward = forward.next;
    }

    curr.next = back;
    return curr;
}

function isPalindrome(head: ListNode | null): boolean {
    let middle = getMiddle(head);
    middle = reverseList(middle);

    while (middle) {
        if (middle.val != head.val) {
            return false;
        }

        middle = middle.next;
        head = head.next;
    }

    return true;
};