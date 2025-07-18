const greaterThan = (arr, num) => {
    return arr.filter( n => n > num);
}

console.log(greaterThan([1,2,3,9,10,7,5,4,3], 5))