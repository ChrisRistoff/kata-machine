export default function bs_list(haystack: number[], needle: number, low: number = 0, high: number = haystack.length): boolean {
    const mid = Math.floor((high + low) / 2);

    if (low >= high) {
        return false;
    } else if (haystack[mid] === needle) {
        return true;
    } else if (haystack[mid] > needle) {
        high = mid;
        return bs_list(haystack, needle, low, high);
    } else {
        low = mid + 1;
        return bs_list(haystack, needle, low, high);
    }
}
