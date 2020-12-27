var reverseBetween = function (head, m, n) {
  let index = 1;
  let curr = head;
  let start = head;
  let prev = null;
  if (!head || !head.next || m === n) return head;
  while (curr && index < m) {
    start = curr;
    curr = curr.next;
    index++;
  }

  let tail = curr;
  while (curr && index <= n) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    index++;
  }
  start.next = prev;
  tail.next = curr;
  return m == 1 ? prev : head;
};
