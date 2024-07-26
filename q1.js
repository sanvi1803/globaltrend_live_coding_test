function lcs(str1,str2){
    let i = str1.length;
    let j = str2.length;

    const mem = new Array(i + 1).fill(null).map(() => new Array(j + 1).fill(-1))

    function help(i,j){
        if (i === 0 || j===0) {
            return 0;
        }
        if (mem[i][j] !== -1) {
            return mem[i][j];
        }

        if(str1[i-1] === str2[j - 1]){
            mem[i][j] = 1 + help(i -1, j -1);
        }
        else
            mem[i][j] = Math.max(help(i-1 ,j),help(i,j-1));
        return mem[i][j];
    }

    help(i,j);

    let lcs ="";
    while(i>0 && j > 0){
        if (str1[ i-1 ] === str2[j-1]) {
            lcs += str1[i-1];
            i--;
            j--;
        }
        else if(mem[i - 1][j] > mem[i][j - 1]){
            i--;
        }
        else{
            j--;
        }
    }
    return lcs.length;
}

const s1 = "abcde";
const s2 = "ace";
console.log(lcs(s1,s2));
