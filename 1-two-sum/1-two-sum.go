func twoSum(nums []int, target int) []int {

    hashTable  := map[int]int{}
    for i, num:= range nums {
        temp := target- num
    if j, found := hashTable[temp]; found {
            return []int{i, j}
    }
        hashTable[num] = i
    }
    return []int{}
}