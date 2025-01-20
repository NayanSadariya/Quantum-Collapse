import React from 'react';
import { QuantumState } from '../types/game';
import { Atom } from 'lucide-react';

type CellProps = {
  state: QuantumState;
  onClick: () => void;
  currentPlayer: 'X' | 'O';
};

const Cell: React.FC<CellProps> = ({ state, onClick, currentPlayer }) => {
  const getCellContent = () => {
    if (state.isCollapsed) {
      return (
        <span className="text-4xl font-black text-[#2D3748]">
          {state.collapsedValue}
        </span>
      );
    }

    if (state.superposition.length > 0) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <Atom className="w-8 h-8 text-[#00BA9F] animate-pulse" />
          <div className="absolute top-1 right-1 text-xs font-bold text-[#2D3748]">
            {state.superposition.map(s => s.player).join('/')}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <button
      onClick={onClick}
      className="aspect-square bg-[#F0F7F4] border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center p-4 disabled:opacity-100"
      disabled={state.isCollapsed}
    >
      {getCellContent()}
    </button>
  );
};

export default Cell;