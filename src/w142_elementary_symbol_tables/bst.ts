export interface Node {
  key: string;
  value: string;
  left: Node;
  right: Node;
  count: number;
}

export function removeMin(node: Node): Node {
  if (node.left === null) {
    return node.right;
  }

  node.left = removeMax(node.left);
  node.count = 1 + size(node.left) + size(node.right);

  return node;
}

export function removeMax(node: Node): Node {
  if (node.right === null) {
    return node.left;
  }

  node.right = removeMax(node.right);
  node.count = 1 + size(node.left) + size(node.right);

  return node;
}

export function min(node: Node): Node | null {
  if (node === null) {
    return null;
  }

  let cur = node;

  while (cur.left != null) {
    cur = cur.left;
  }

  return cur;
}

export function max(node: Node): Node | null {
  if (node === null) {
    return null;
  }

  let cur = node;

  while (cur.right != null) {
    cur = cur.right;
  }

  return cur;
}

export function floor(node: Node, key: string): Node | null {
  // todo: understand this very well
  // todo: write on paper
  if (node === null) {
    return null;
  }

  const cmp = compare(key, node.key);

  if (cmp === 0) {
    return node;
  } else if (cmp < 0) {
    return floor(node.left, key);
  } else {
    const t = floor(node.right, key);

    if (t !== null) {
      return t;
    } else {
      return node;
    }
  }
}

export function ceiling(node: Node, key: string): Node | null {
  if (node === null) {
    return null;
  }

  const cmp = compare(key, node.key);

  if (cmp === 0) {
    return node;
  } else if (cmp < 0) {
    const t = floor(node.left, key);

    if (t != null) {
      return t;
    } else {
      return node;
    }
  } else {
    return floor(node.right, key);
  }
}

export function rank(node: Node, key: string): number {
  if (node === null) {
    return 0;
  }

  let cmp = compare(key, node.key);

  if (cmp < 0) {
    return rank(node.left, key);
  } else if (cmp > 0) {
    return 1 + size(node.left) + rank(node.right, key);
  } /* cmp === 0 */ else {
    return size(node.left);
  }
}

export function select(k: number): string | null {
  return null;
}

export function sizeRange(node: Node, lo: string, hi: string): number {
  if (contains(node, hi)) {
    return rank(node, hi) - rank(node, lo) + 1;
  } else {
    return rank(node, hi) - rank(node, lo);
  }
}

export function keys(node: Node, lo: string, hi: string): string[] {
  // todo: do same with binary search: find left endpoint and find right endpoint
  const queue: string[] = [];
  keysInner(node, queue, lo, hi);
  return queue;
}

export function keysInner(node: Node, list: string[], lo: string, hi: string): void {
  if (node === null) {
    return;
  }

  const cmpLo = compare(lo, node.key);
  const cmpHi = compare(hi, node.key);

  if (cmpLo < 0) {
    keysInner(node.left, list, lo, hi);
  }

  if (cmpLo <= 0 && cmpHi >= 0) {
    list.push(node.key);
  }

  if (cmpHi > 0) {
    keysInner(node.right, list, lo, hi);
  }
}

export function put(node: Node, key: string, value: string): Node {
  if (node === null) {
    return {
      key,
      value,
      count: 1,
      left: null as any,
      right: null as any,
    };
  }

  const cmp = compare(key, node.key);

  if (cmp < 0) {
    node.left = put(node.left, key, value);
  } else if (cmp > 0) {
    node.right = put(node.right, key, value);
  } /* cmp === 0 */ else {
    node.value = value;
  }

  node.count = 1 + size(node.left) + size(node.right);

  return node;
}

export function remove(node: Node, key: string): Node {
  // todo: do this carefully
  // Hibbard deletion
  // lack of symmetry degenerates it
  if (node === null) {
    return null as any;
  }

  let cmp = compare(key, node.key);

  if (cmp < 0) {
    node.left = remove(node.left, key);
  } else if (cmp > 0) {
    node.right = remove(node.right, key);
  } /* cmp === 0 */ else {
    if (node.right === null) {
      return node.left;
    } else if (node.left === null) {
      return node.right;
    }

    const t = node;
    node = min(t.right)!;
    node.right = removeMin(t.right);
    node.left = t.left;
  }

  node.count = 1 + size(node.left) + size(node.right);

  return node;
}

export function get(node: Node, key: string): string | null {
  while (node != null) {
    const cmp = compare(key, node.key);

    if (cmp < 0) {
      node = node.left;
    } else if (cmp > 0) {
      node = node.right;
    } /* cmp === 0 */ else {
      return node.value;
    }
  }

  return null;
}

export function contains(node: Node, key: string): boolean {
  return false;
}

export function isEmpty(node: Node): boolean {
  return size(node) === 0;
}

export function size(node: Node): number {
  return node === null ? 0 : node.count;
}

export function inOrder(node: Node, keys: string[]): void {
  if (node === null) {
    return;
  }

  inOrder(node.left, keys);
  keys.push(node.key);
  inOrder(node.right, keys);
}

export function compare(a: string, b: string) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
