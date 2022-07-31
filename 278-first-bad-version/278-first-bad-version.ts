/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        if(n === 1) return n
        let left = 1 
        let right = n
        let middle = -1
        while(left < right){
            middle = Math.floor(left + (right - left) / 2)
            if(!isBadVersion(middle))
                left = middle + 1    
            else 
                right = middle 
            
        }
        return left
    };
};
