const towers = (discCount) => {
    const tower1 = [...Array(discCount + 1).keys()].slice(1);
    const tower2 = [], tower3 = [];

    const moveDiscs = (discCount, origin, stage, goal) => {
        if (discCount === 1) {
            let disc = origin.shift();
            goal.unshift(disc);
        return goal;
    }

        moveDiscs(discCount - 1, origin, goal, stage);

        let disc = origin.shift();
        goal.unshift(disc);

        moveDiscs(discCount - 1, stage, origin, goal);
            return goal;
    }

    return moveDiscs(discCount, tower1, tower2, tower3);
}