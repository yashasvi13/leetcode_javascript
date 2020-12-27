const isPalindrome = (head) => {
  if (head === null || head.next === null) return true;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverse(slow.next);
  slow = slow.next;
  while (slow !== null) {
    if (head.val != slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

const reverse = (head) => {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
