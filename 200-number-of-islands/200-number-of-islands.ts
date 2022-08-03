function numIslands(grid: string[][]): number {

const rows = grid.length
const columns = grid[0].length
let islands = 0
for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
        if(grid[i][j] === "1" ){
            let q = [[i,j]]
            while(q.length !== 0){
                const c = q.shift()
                
                if(
                    c[0] + 1 < rows &&
                    grid[c[0]+ 1][c[1]] === "1"
                ){
                     grid[c[0] + 1][c[1]] = '-1'
                    q.push([c[0] + 1, c[1]])
                }
                if(
                    c[0] - 1 >=0  &&
                    grid[c[0]- 1][c[1]] === "1"
                ){
                     grid[c[0] - 1][c[1]] = '-1'
                    q.push([c[0] - 1, c[1]])
                }
                
                if(
                    c[1] + 1 < columns &&
                    grid[c[0]][c[1] + 1] === "1" 
                ){
                     grid[c[0]][c[1] + 1] = '-1'
                    q.push([c[0] , c[1] + 1])
                }
                if(
                    c[1] - 1 >= 0 &&
                    grid[c[0]][c[1] - 1] === "1"
                ){
                     grid[c[0]][c[1] -  1] = '-1'
                    q.push([c[0] , c[1] - 1])
                }
                
            }
            islands++
        }
    }
}
    return islands
};
