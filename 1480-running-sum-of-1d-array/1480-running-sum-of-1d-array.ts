function runningSum(nums: number[]): number[] {
    let sum = 0
    const res :number[] = []
    nums.forEach(num => res.push(sum = sum + num))
    return res

};