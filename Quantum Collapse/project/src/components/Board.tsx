import React from 'react';
import { GameBoard } from '../types/game';
import Cell from './Cell';

type BoardProps = {
  board: GameBoard;
  onCellClick: (row: number, col: number) => void;
  currentPlayer: 'X' | 'O';
};

const Board: React.FC<BoardProps> = ({ board, onCellClick, currentPlayer }) => {
  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-md mx-auto">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            state={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
            currentPlayer={currentPlayer}
          />
        ))
      )}
    </div>
  );
};

export default Board;