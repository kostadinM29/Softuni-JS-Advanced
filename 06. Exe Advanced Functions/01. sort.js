function sort(arr, sorting) {
    return sorting === "asc" ? arr.sort((x, y) => x - y) : arr.sort((x, y) => y - x);
}