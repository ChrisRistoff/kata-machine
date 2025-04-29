export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let broken = -1;

    for (let i = jumpAmount; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            broken = i;
            break;
        }
    }

    for (let i = broken; i >= 0; i--) {
        if (!breaks[i]) {
            return i+1;
        }
    }

    return broken;
}
