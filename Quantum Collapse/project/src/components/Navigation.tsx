import React from 'react';
import { Atom, Home, Info, BookOpen } from 'lucide-react';

type NavItem = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

const navItems: NavItem[] = [
  { label: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
  { label: 'Play', icon: <Atom className="w-5 h-5" />, path: '/play' },
  { label: 'Learn', icon: <BookOpen className="w-5 h-5" />, path: '/learn' },
  { label: 'About', icon: <Info className="w-5 h-5" />, path: '/about' },
];

const Navigation: React.FC<{ currentPath: string; onNavigate: (path: string) => void }> = ({
  currentPath,
  onNavigate,
}) => {
  return (
    <nav className="bg-[#DCFFF9] border-b-4 border-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Atom className="w-8 h-8 text-[#00BA9F]" />
            <span className="text-2xl font-black text-[#2D3748]">Quantum Collapse</span>
          </div>
          <div className="flex gap-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-4 border-black transition-all ${
                  currentPath === item.path
                    ? 'bg-[#00BA9F] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-[#F0F7F4] text-[#2D3748] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                }`}
              >
                {item.icon}
                <span className="font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;