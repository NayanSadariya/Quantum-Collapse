import React, { useState, useCallback } from 'react';
import Board from '../components/Board';
import GameControls from '../components/GameControls';
import Modal from '../components/Modal';
import { GameBoard, QuantumState } from '../types/game';
import { checkWinner } from '../utils/gameLogic';

const createEmptyBoard = (): GameBoard =>
  Array(3)
    .fill(null)
    .map(() =>
      Array(3).fill(null).map(() => ({
        superposition: [],
        isCollapsed: false,
      }))
    );

const GamePage: React.FC = () => {
  const [board, setBoard] = useState<GameBoard>(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [gameResult, setGameResult] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const handleCellClick = (row: number, col: number) => {
    if (board[row][col].isCollapsed || gameResult) return;

    setBoard((prev) => {
      const newBoard = [...prev];
      const cell = { ...newBoard[row][col] };
      
      cell.superposition = [
        ...cell.superposition,
        { player: currentPlayer, probability: 0.5 },
      ];
      
      newBoard[row][col] = cell;
      return newBoard;
    });

    setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
  };

  const isBoardFull = () => {
    return board.every(row => 
      row.every(cell => cell.superposition.length > 0 || cell.isCollapsed)
    );
  };

  const handleCollapse = async () => {
    if (!isBoardFull()) {
      setShowModal(true);
      return;
    }

    setBoard((prev) => {
      const newBoard = prev.map((row) =>
        row.map((cell) => {
          if (cell.superposition.length === 0) return cell;

          const randomIndex = Math.floor(Math.random() * cell.superposition.length);
          return {
            ...cell,
            isCollapsed: true,
            collapsedValue: cell.superposition[randomIndex].player,
          };
        })
      );

      const winner = checkWinner(newBoard);
      if (winner) {
        let resultMessage = '';
        if (winner === 'X') {
          resultMessage = '🎉 Player X has achieved quantum supremacy!';
        } else if (winner === 'O') {
          resultMessage = '🌟 Player O has mastered quantum control!';
        } else if (winner === 'TIE') {
          resultMessage = '🤝 A quantum equilibrium has been reached - It\'s a tie!';
        }
        setGameResult(resultMessage);
        setShowResultModal(true);
      }

      return newBoard;
    });
  };

  const handleReset = () => {
    setBoard(createEmptyBoard());
    setCurrentPlayer('X');
    setGameResult(null);
    setShowResultModal(false);
  };

  const canCollapse = board.some((row) =>
    row.some((cell) => cell.superposition.length > 0 && !cell.isCollapsed)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#DCFFF9] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-black text-center mb-8 text-[#2D3748]">
            Quantum Collapse
          </h1>

          <div className="mb-4 text-center">
            <span className="text-xl font-bold bg-[#F0F7F4] px-4 py-2 rounded-lg border-2 border-black text-[#2D3748]">
              Current Player: {currentPlayer}
            </span>
          </div>
          
          <Board
            board={board}
            onCellClick={handleCellClick}
            currentPlayer={currentPlayer}
          />
          
          <GameControls
            onReset={handleReset}
            onCollapse={handleCollapse}
            canCollapse={canCollapse}
          />
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message="Please fill all squares before collapsing the quantum states! 🎲"
      />

      <Modal
        isOpen={showResultModal}
        onClose={() => setShowResultModal(false)}
        message={gameResult || ''}
      />
    </div>
  );
};

export default GamePage;