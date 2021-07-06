let max=prompt("input a max number")
let s=2
do{
    let count=0
    for(let i=1;i<=s;i++) {
        if(s%i == 0) count++
    }
    if(count==2) alert(`${s}`)
    s++
}while(s<max);