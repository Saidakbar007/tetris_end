// utils.ts

export function createPlayground(): number[][] {
    const playground = [];
    for (let row = 0; row < 20; row++) {
      playground[row] = new Array(10).fill(0);
    }
    return playground;
  }
  
  export function isCollision(shape: number[][], x: number, y: number, playground: number[][]): boolean {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const newX = x + col;
          const newY = y + row;
  
          if (newX < 0 || newX >= 10 || newY >= 20) return true;
          if (playground[newY][newX]) return true;
        }
      }
    }
    return false;
  }
  