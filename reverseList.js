/*

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both? */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
// iterative solution
  let curr = head;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

var reverseListRecursive1 = function (head) {
  // recursive approach 1
  if (head === null) {
    return null;
  } else if (head.next === null) {
    return head;
  }
  let p = reverseListRecursive1(head.next);
  head.next.next = head;
  head.next = null;

  return p;
}
var reverseListRecursive2 = function (head) {
  // recursive approach 2
  if (head === null) {
    return null;
  } else if (head.next === null) {
    return head;
  }
  let next = head.next;
  head.next = null;
  let remaining = reverseListRecursive2(next);
  next.next = head;

  return remaining;
}