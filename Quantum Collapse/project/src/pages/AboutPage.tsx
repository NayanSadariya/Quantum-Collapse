import React from 'react';
import { Github } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#DCFFF9] rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h1 className="text-4xl font-black text-center mb-8 text-[#2D3748]">
            About Quantum Tic-Tac-Toe
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-black mb-4 text-[#2D3748]">The Game</h2>
            <p className="mb-6 text-[#2D3748]">
              Quantum Tic-Tac-Toe is an educational game that introduces players to
              the fascinating world of quantum mechanics through a familiar format.
              By incorporating quantum principles like superposition and measurement,
              the game provides an intuitive way to understand these complex concepts.
            </p>

            <h2 className="text-2xl font-black mb-4 text-[#2D3748]">How It Works</h2>
            <p className="mb-6 text-[#2D3748]">
              Unlike classical Tic-Tac-Toe, players can place their marks (X or O)
              in superposition, meaning a square can contain multiple possible states
              simultaneously. The game continues until players decide to "collapse"
              the quantum states, at which point each square resolves to either X or O
              based on quantum probability.
            </p>

            <h2 className="text-2xl font-black mb-4 text-[#2D3748]">Educational Value</h2>
            <p className="mb-6 text-[#2D3748]">
              This game serves as an interactive tool for learning about:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#2D3748]">
              <li>Quantum superposition</li>
              <li>Wave function collapse</li>
              <li>Quantum measurement</li>
              <li>Probability in quantum mechanics</li>
            </ul>

            <div className="flex justify-center mt-8">
              <a
                href="https://github.com/NayanSadariya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00BA9F] text-white font-bold rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <Github className="w-5 h-5" />
                Visit My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;