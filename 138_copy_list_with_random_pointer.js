var copyRandomList = function (head) {
  if (!head) return head;
  let falseHead = new Node(0, head, null);
  let falseHeadClone = new Node(0, null, null);
  let currentL = falseHead;
  let currentClone = falseHeadClone;
  let hash = new Map();

  while (currentL.next) {
    let clone = new Node(currentL.next.val, null, null);
    hash.set(currentL.next, clone);
    currentClone.next = clone;
    currentL = currentL.next;
    currentClone = currentClone.next;
  }
  currentL = falseHead;
  currentClone = falseHeadClone;

  while (currentL.next) {
    let clone = hash.get(currentL.next);
    clone.random = hash.get(currentL.next.random);
    currentL = currentL.next;
    currentClone = currentClone.next;
  }

  return falseHeadClone.next;
};
