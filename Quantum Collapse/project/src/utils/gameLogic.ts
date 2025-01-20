import { GameBoard } from '../types/game';

export const checkWinner = (board: GameBoard): 'X' | 'O' | 'TIE' | null => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0].isCollapsed &&
      board[i][0].collapsedValue === board[i][1].collapsedValue &&
      board[i][1].collapsedValue === board[i][2].collapsedValue
    ) {
      return board[i][0].collapsedValue!;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i].isCollapsed &&
      board[0][i].collapsedValue === board[1][i].collapsedValue &&
      board[1][i].collapsedValue === board[2][i].collapsedValue
    ) {
      return board[0][i].collapsedValue!;
    }
  }

  // Check diagonals
  if (
    board[0][0].isCollapsed &&
    board[0][0].collapsedValue === board[1][1].collapsedValue &&
    board[1][1].collapsedValue === board[2][2].collapsedValue
  ) {
    return board[0][0].collapsedValue!;
  }

  if (
    board[0][2].isCollapsed &&
    board[0][2].collapsedValue === board[1][1].collapsedValue &&
    board[1][1].collapsedValue === board[2][0].collapsedValue
  ) {
    return board[0][2].collapsedValue!;
  }

  // Check for tie
  const allCollapsed = board.every(row => 
    row.every(cell => cell.isCollapsed)
  );

  if (allCollapsed) {
    return 'TIE';
  }

  return null;
};