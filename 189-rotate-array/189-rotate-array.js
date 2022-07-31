/**
 Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    let len = nums.length
    let rotated = nums.slice(0, len - k)
    nums.splice(0,len - k)
    nums.splice(len - 1 , 0, ...rotated)
    
};