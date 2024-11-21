export default function two_crystal_balls(breaks: boolean[]): number {
    let step = Math.floor(Math.sqrt(breaks.length));

    for (let i = step; i < breaks.length; i += step) {
        if (breaks[i]) {
            return findFirstBreak(breaks, i)!;
        }
    }

    return -1;
}

function findFirstBreak(breaks: boolean[], start: number): number {
    for (let i = start; i > 0; i--) {
        if (!breaks[i]) {
            return i+1;
        }
    }

    return 0;
}
