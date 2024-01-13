
const minimumIsland = (grid) => {
    let min = Infinity;
    const visited = new Set();
    for (let r = 0; r < grid.length ; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            let result = explore(grid, r, c, visited);
            if (result !== 0) {
                min = Math.min(result, min);
            }
        }
    }

    return min;
}

const explore = (grid, r, c, visited) => {
    const rInbound = 0 <= r && r < grid.length;
    const cInbound = 0 <= c && c < grid[0].length;
    if (!(rInbound && cInbound)) return 0;

    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    if (grid[r][c] === 'W') return 0;
    
    let count = 1;
    count += explore(grid, r + 1, c, visited);
    count += explore(grid, r - 1, c, visited);
    count += explore(grid, r, c + 1, visited);
    count += explore(grid, r, c - 1, visited);

    return count;
}


const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
  ];
    
  console.log(minimumIsland(grid));