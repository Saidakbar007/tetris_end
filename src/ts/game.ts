// game.ts
import { drawTetrisPlayground, renderFixedBlocks, renderShape, removePreviousShape } from './drawFunction';
import { rotateShape, moveShape } from './moveFunction';
import { createPlayground, isCollision } from './until';

// Инициализация игрового поля и переменных
const tetrisPlaygroundTarget = document.querySelector('.tetris-playground') as HTMLDivElement | null;

if (tetrisPlaygroundTarget) {
  drawTetrisPlayground(10, 20, tetrisPlaygroundTarget);
}

const shapeKeys = Object.keys(shapes);
const currentShape = {
  shape: shapes['T'].shape,
  color: shapes['T'].color,
};

let currentX = 3;
let currentY = 0;
let speed = 1000;
let isPaused = false;
const playground = createPlayground();

// Основной игровой цикл
function gameLoop() {
  setTimeout(() => {
    if (!isPaused) {
      if (!isCollision(currentShape.shape, currentX, currentY + 1, playground)) {
        removePreviousShape(currentShape, currentX, currentY, playground, tetrisPlaygroundTarget);
        currentY++;
        renderShape(currentShape, currentX, currentY, tetrisPlaygroundTarget);
      } else {
        // Логика для фиксации фигуры
      }
    }
    gameLoop();
  }, speed);
}

gameLoop();
