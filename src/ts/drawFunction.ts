// drawFunctions.ts

export function drawTetrisPlayground(x: number, y: number, target: HTMLDivElement) {
    if (x <= 0 || y <= 0) throw new Error('x and y cannot be negative');
  
    if (target.children.length) throw new Error('Aborted: target element should be empty');
  
    for (let rowsCount = 0; rowsCount < y; rowsCount++) {
      const row = document.createElement('div');
      row.className = 'row';
      row.dataset['row'] = rowsCount.toString();
  
      for (let cellsCount = 0; cellsCount < x; cellsCount++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset['cell'] = cellsCount.toString();
        row.append(cell);
      }
  
      target.append(row);
    }
  }
  
  export function renderFixedBlocks(playground: number[][], target: HTMLDivElement) {
    for (let row = 0; row < playground.length; row++) {
      for (let col = 0; col < playground[row].length; col++) {
        const cell = target.children[row]?.children[col] as HTMLDivElement;
        if (!cell) continue;
  
        cell.style.backgroundColor = playground[row][col] ? 'grey' : '';
      }
    }
  }
  
  export function renderShape(currentShape: any, currentX: number, currentY: number, target: HTMLDivElement) {
    const rowsToColor = currentShape.shape.length;
    const cellsToColor = currentShape.shape[0].length;
  
    for (let rowIndex = 0; rowIndex < rowsToColor; rowIndex++) {
      for (let cellIndex = 0; cellIndex < cellsToColor; cellIndex++) {
        if (currentShape.shape[rowIndex][cellIndex]) {
          const x = currentX + cellIndex;
          const y = currentY + rowIndex;
  
          if (x >= 0 && x < 10 && y >= 0 && y < 20) {
            const cell = target.children[y]?.children[x] as HTMLDivElement;
            if (cell) {
              cell.style.backgroundColor = currentShape.color;
            }
          }
        }
      }
    }
  }
  
  export function removePreviousShape(currentShape: any, currentX: number, currentY: number, playground: number[][], target: HTMLDivElement) {
    const rowsToClear = currentShape.shape.length;
    const cellsToClear = currentShape.shape[0].length;
  
    for (let rowIndex = 0; rowIndex < rowsToClear; rowIndex++) {
      for (let cellIndex = 0; cellIndex < cellsToClear; cellIndex++) {
        if (currentShape.shape[rowIndex][cellIndex]) {
          const x = currentX + cellIndex;
          const y = currentY + rowIndex;
  
          if (x >= 0 && x < 10 && y >= 0 && y < 20) {
            if (!playground[y][x]) {
              const cell = target.children[y]?.children[x] as HTMLDivElement;
              if (cell) {
                cell.style.backgroundColor = '';
              }
            }
          }
        }
      }
    }
  }
  