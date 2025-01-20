import React from 'react';
import { Atom, GitBranch, Zap } from 'lucide-react';

const LearnPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-center mb-12 text-[#2D3748]">
          Understanding Quantum Mechanics
        </h1>

        <div className="grid gap-8">
          <section className="bg-[#DCFFF9] rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <div className="flex items-center gap-4 mb-4">
              <Atom className="w-8 h-8 text-[#00BA9F]" />
              <h2 className="text-2xl font-black text-[#2D3748]">Superposition</h2>
            </div>
            <p className="text-[#2D3748] mb-4">
              In quantum mechanics, superposition means that a particle can exist in multiple states
              simultaneously. In our game, this translates to a square containing both X and O
              at the same time until observed.
            </p>
            <div className="bg-[#F0F7F4] p-4 rounded-lg border-2 border-black">
              <p className="text-[#2D3748] font-bold">
                Game Example: When you make a move, your mark exists in a superposition
                until the quantum state is collapsed.
              </p>
            </div>
          </section>

          <section className="bg-[#DCFFF9] rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <div className="flex items-center gap-4 mb-4">
              <GitBranch className="w-8 h-8 text-[#00BA9F]" />
              <h2 className="text-2xl font-black text-[#2D3748]">Entanglement</h2>
            </div>
            <p className="text-[#2D3748] mb-4">
              Quantum entanglement occurs when particles become connected in such a way that the
              quantum state of each particle cannot be described independently. The state of one
              particle instantly influences the state of the other, regardless of distance.
            </p>
            <div className="bg-[#F0F7F4] p-4 rounded-lg border-2 border-black">
              <p className="text-[#2D3748] font-bold">
                Game Example: When moves are connected in a winning line, collapsing one square
                affects the possible states of the others.
              </p>
            </div>
          </section>

          <section className="bg-[#DCFFF9] rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <div className="flex items-center gap-4 mb-4">
              <Zap className="w-8 h-8 text-[#00BA9F]" />
              <h2 className="text-2xl font-black text-[#2D3748]">Measurement (Collapse)</h2>
            </div>
            <p className="text-[#2D3748] mb-4">
              In quantum mechanics, the act of measuring a quantum system forces it to collapse
              into a definite state. This is known as wave function collapse, and it's one of
              the most mysterious aspects of quantum mechanics.
            </p>
            <div className="bg-[#F0F7F4] p-4 rounded-lg border-2 border-black">
              <p className="text-[#2D3748] font-bold">
                Game Example: Using the "Collapse States" button forces all superpositions to
                resolve into either X or O, simulating quantum measurement.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;