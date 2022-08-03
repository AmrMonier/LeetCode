let notVisited = (node, arr) => {
  for (n in arr) {
    if ((arr[n][0] == node[0] && arr[n][1] == node[1])) return false;
  }
  return true;
};
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  if(image[sr][sc] === newColor) return image
    let nodesQueue = [[sr, sc]];
  let visitedNodes = [];
  let rows = image.length;
  let columns = image[0].length;

  while ( nodesQueue.length !== 0) {
    let tempNode = nodesQueue[0];
    nodesQueue = nodesQueue.slice(1);
    let [x, y] = tempNode;
    let currentNodeValue = image[tempNode[0]][tempNode[1]];
    if (x + 1 <= rows - 1) {
      if (
        image[x + 1][y] === currentNodeValue &&
        notVisited([x + 1, y], visitedNodes)
      ) {
        nodesQueue.push([x + 1, y]);
      }
    }
    if (x - 1 >= 0) {
      if (
        image[x - 1][y] === currentNodeValue &&
        notVisited([x - 1, y], visitedNodes)
      ) {
        nodesQueue.push([x - 1, y]);
      }
    }
    if (y + 1 <= columns - 1) {
      if (
        image[x][y + 1] === currentNodeValue &&
        notVisited([x, y + 1], visitedNodes)
      ) {
        nodesQueue.push([x, y + 1]);
      }
    }
    if (y - 1 >= 0) {
      if (
        image[x][y - 1] === currentNodeValue &&
        notVisited([x, y - 1], visitedNodes)
      ) {
        nodesQueue.push([x , y - 1]);
      }
    }
    image[x][y] = newColor
    visitedNodes.push(tempNode);
  }
  return image
};