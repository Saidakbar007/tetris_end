// moveFunctions.ts

export function rotateShape(shape: number[][]): number[][] {
    const rotatedShape: number[][] = [];
    const rows = shape.length;
    const cols = shape[0].length;
  
    for (let col = 0; col < cols; col++) {
      rotatedShape[col] = [];
      for (let row = rows - 1; row >= 0; row--) {
        rotatedShape[col][rows - 1 - row] = shape[row][col];
      }
    }
  
    return rotatedShape;
  }
  
  export function moveShape(direction: number, currentShape: any, currentX: number, currentY: number, isCollision: (shape: number[][], x: number, y: number) => boolean, renderShape: () => void, removePreviousShape: () => void) {
    if (!isCollision(currentShape.shape, currentX + direction, currentY)) {
      removePreviousShape();
      currentX += direction;
      renderShape();
    }
  }
  