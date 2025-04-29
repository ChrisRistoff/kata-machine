export default function bubble_sort(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j > i ; j--) {
            if (array[i] > array[j]) {
                const temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
}
