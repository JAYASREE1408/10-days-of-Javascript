'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let i,vow=[],con=[]
    for(i=0;i<s.length;i++){
        if('aeiou'.includes(s[i])){
            vow.push(s[i])
        }
        else{
            con.push(s[i])
        }
    }
    for(i=0;i<vow.length;i++){
        console.log(vow[i])
    }
    for(i=0;i<con.length;i++){
        console.log(con[i])
    }
}

