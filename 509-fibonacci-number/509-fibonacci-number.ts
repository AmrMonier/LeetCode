function fib(n: number): number {
    if(n == 0) return 0
    let res : number[] = [0, 1]
    for(let i = 2 ; i <= n; i++){
        res.push(res[i - 1] + res[i - 2])
    }
    return res.pop()
};