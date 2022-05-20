const forEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
};
const map = (arr, func) => {
    const mapped = [...arr];
    for (let i = 0; i < arr.length; i++) {
        mapped[i] = func(arr[i], i, arr);
    }

    return mapped;
};
const filter = (arr, func) => {
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            filtered.push(arr[i]);
        }
    }

    return filtered;
};
const reduce = (arr, func, init = 0) => {
    let acc = init;
    let startFrom = 0;
    if (init == 0) {
        acc = arr[0];
        startFrom = 1;
    }

    for (let i = startFrom; i < arr.length; i++) {
        acc = func(acc, arr[i], i, arr);
    }
    return acc;
};
const some = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
};
const every = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) return false;
    }

    return true;
};
const flat = (arr, depth = 1) => {
    if (depth == 0) return arr;
    let currentDepth = 0;
    let flattened = [...arr];

    const flattenOnce = (toFlatten) => {
        const flattened = [];
        for (let i = 0; i < toFlatten.length; i++) {
            if (Array.isArray(toFlatten[i])) {
                for (let j = 0; j < toFlatten[i].length; j++) {
                    flattened.push(toFlatten[i][j]);
                }
                continue;
            }

            flattened.push(toFlatten[i]);
        }

        return flattened;
    };

    while (flattened.some((item) => Array.isArray(item))) {
        if (currentDepth == depth) break;

        flattened = flattenOnce(flattened);

        currentDepth++;
    }

    return flattened;
};
const find = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) return arr[i];
    }
};

module.exports = { forEach, map, filter, reduce, some, every, flat, find };
