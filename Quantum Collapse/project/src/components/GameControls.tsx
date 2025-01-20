import React from 'react';
import { RefreshCw as Refresh, Zap } from 'lucide-react';

type GameControlsProps = {
  onReset: () => void;
  onCollapse: () => void;
  canCollapse: boolean;
};

const GameControls: React.FC<GameControlsProps> = ({ onReset, onCollapse, canCollapse }) => {
  return (
    <div className="flex gap-6 justify-center mt-8">
      <button
        onClick={onCollapse}
        disabled={!canCollapse}
        className="flex items-center gap-2 px-6 py-3 bg-[#00BA9F] text-white font-bold rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-x-[0px] disabled:hover:translate-y-[0px]"
      >
        <Zap className="w-5 h-5" />
        Collapse States
      </button>
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-6 py-3 bg-[#20E3CA] text-white font-bold rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
      >
        <Refresh className="w-5 h-5" />
        Reset Game
      </button>
    </div>
  );
};

export default GameControls;