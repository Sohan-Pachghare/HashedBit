function even(start, end) {
    let arr = [];
    for(let i= start; i<=end; i++) {
        if(i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(even(1,100));