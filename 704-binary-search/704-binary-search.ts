function search(nums: number[], target: number): number {
return binarySearch(nums, target, 0, nums.length - 1)
};

function binarySearch(nums: number[], target: number, left: number, right: number){
    if(left > right ) return -1
    if(right === left) 
        nums[left] === target ?  left : -1
    const mid = Math.floor((left + right) / 2)
    if(nums[mid] === target) return mid
    if(nums[mid] > target) return binarySearch(nums, target, left, mid - 1)
    else return binarySearch(nums, target, mid + 1, right)
}