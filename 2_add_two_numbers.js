var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let head = new ListNode(0);
  let node = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = sum > 9 ? 1 : 0;
    sum = sum % 10;
    node.next = new ListNode(sum);
    node = node.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return head.next;
};
