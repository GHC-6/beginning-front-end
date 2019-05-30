// reduce.js
export default (arr, add) => {
    let index = 0,
        length = arr.length,
        currentValue = arr[index];

    index += 1;

    for (; index < length; index += 1) {
        currentValue = add(currentValue, arr[index]);
    }

    return currentValue;
}