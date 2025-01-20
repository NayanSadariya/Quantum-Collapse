import React from 'react';
import { Atom, Play, BookOpen, Info } from 'lucide-react';

type Props = {
  onNavigate: (path: string) => void;
};

const HomePage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F0F7F4]">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Atom className="w-20 h-20 text-[#00BA9F] animate-pulse" />
          </div>
          <h1 className="text-6xl font-black text-[#2D3748] mb-4">
            Quantum Collapse
          </h1>
          <p className="text-xl text-[#2D3748] max-w-2xl mx-auto mb-8">
            A quantum twist to the classic game of strategy and logic!
            Experience the fascinating world of quantum mechanics through play.
          </p>
          <div className="bg-[#DCFFF9] border-4 border-black rounded-xl p-6 max-w-2xl mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-black text-[#2D3748] mb-4">Python Evaluation Project </h2>
            <div className="text-[#2D3748] space-y-2">
              <p><span className="font-bold">Student Name:</span> Sadariya Nayan Jitendrabhai</p>
              <p><span className="font-bold">Semester/class:</span> 4A</p>
              <p><span className="font-bold">Field:</span> Computer Science</p>
              <p><span className="font-bold">Enrollment No:</span> 2303466160235</p>
              <p><span className="font-bold">Faculty</span> Parul Polytechnic Institure</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => onNavigate('/play')}
            className="group bg-[#DCFFF9] p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
          >
            <div className="flex justify-center mb-4">
              <Play className="w-12 h-12 text-[#00BA9F] group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-2xl font-black text-[#2D3748] mb-2">Play Now</h2>
            <p className="text-[#2D3748]">
              Jump into a game and experience quantum mechanics in action
            </p>
          </button>

          <button
            onClick={() => onNavigate('/learn')}
            className="group bg-[#DCFFF9] p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
          >
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-[#00BA9F] group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-2xl font-black text-[#2D3748] mb-2">Learn</h2>
            <p className="text-[#2D3748]">
              Discover the principles of quantum mechanics through interactive lessons
            </p>
          </button>

          <button
            onClick={() => onNavigate('/about')}
            className="group bg-[#DCFFF9] p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
          >
            <div className="flex justify-center mb-4">
              <Info className="w-12 h-12 text-[#00BA9F] group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-2xl font-black text-[#2D3748] mb-2">About</h2>
            <p className="text-[#2D3748]">
              Learn more about the game and the science behind it
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;