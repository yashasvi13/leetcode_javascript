//iterative
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

//recursive

const reverseList = (head) => {
  if (!head || !head.next) return head;
  let reversedLinkedListHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedLinkedListHead;
};
