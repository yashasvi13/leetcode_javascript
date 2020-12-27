const reverseList = (head) => {
  let prev = null;
  let current = head;
  let next = null;
  if (!head.next || !head) return head;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
