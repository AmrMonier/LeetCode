class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if len(matrix) == 0 or len(matrix[0]) == 0:
            return []
        res = []
        top = 0
        bottom = len(matrix)-1 
        left = 0
        right = len(matrix[0]) -1
        size = len(matrix) * len(matrix[0])
        while len(res) < size :
            if len(res) < size:
                for i in range(left, right +1):
                    res.append(matrix[top][i])
                top = top +1
            if len(res) < size:
                for i in range(top, bottom+1):
                    res.append(matrix[i][right])
                right = right -1
            if len(res) < size:
                for i in reversed(range(left, right+1)):
                    res.append(matrix[bottom][i])
                    print(matrix[bottom][i])
                bottom = bottom - 1
            if len(res) < size:
                for i in reversed(range(top, bottom + 1)):
                    res.append(matrix[i][left])
                    print(matrix[i][left])
                left = left + 1
        return res
       