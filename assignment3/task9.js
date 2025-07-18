function wordsInPara(para) {
    para = para.trim();
    if(para.length === 0) {
        return 0;
    }
    
    let count = 1;
    let i = 0;
    while(i< para.length) {
        if(para.charAt(i) === ' ') {
            count++;
        }
        i++;
    }
    return count;
}

let para = "  The quick brown fox jumps over the lazy dog.  ";
console.log(wordsInPara(para));