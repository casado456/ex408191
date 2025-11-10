let coin =0
let trap = 0
let cointrap = 0

for (let i = 1; i <= 50; i++ ) {
    if   (i % 3 === 0 && i % 5 === 0){
        console.log(i, "cointrap");
        cointrap++
        
    }if (i % 5 === 0) {
        console.log(i,"trap");
        trap++
        
    }if (i % 3 === 0){
        console.log(i, "coin");
        coin++
        
    }
    
    
}
console.log("coin" + " "+ coin);
console.log("trap" + " " + trap);
console.log("cointrap" + " " + cointrap);


