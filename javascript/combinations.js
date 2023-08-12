const combinations = (n, k) => {
    const combos = [];
    let head, tail;
    if (k === 1) {
        return n;
    }
    for (let i = 0; i < n.length; i++) {
        head = n.slice(i, i + 1);
        tail = combinations(n.slice(i + 1), k - 1);
        for (let j = 0; j < tail.length; j++) {
            let combo = head.concat(tail[j]);
            combos.push(combo);
        }
    }
    return combos;
}