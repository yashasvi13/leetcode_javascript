var middleNode = function (head) {
  if (!head.next) return head;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return fast.next ? slow.next : slow;
};
