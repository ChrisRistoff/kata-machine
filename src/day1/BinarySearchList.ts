export default function bs_list(haystack: number[], needle: number, low: number = 0, high: number = haystack.length): boolean {
    let mid = Math.floor(low + (high - low) / 2);

    if (haystack[mid] === needle) {
        return true;
    }

    if (low >= high) {
        return false;
    }

    if (haystack[mid] > needle) {
        return bs_list(haystack, needle, low, mid);
    }

    if (haystack[mid] < needle) {
        return bs_list(haystack, needle, mid + 1, high);
    }

    return false;
}
