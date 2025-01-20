export type QuantumState = {
  superposition: Array<{
    player: 'X' | 'O';
    probability: number;
  }>;
  isCollapsed: boolean;
  collapsedValue?: 'X' | 'O';
};

export type GameBoard = QuantumState[][];

export type GameHistory = {
  moves: Array<{
    position: [number, number];
    player: 'X' | 'O';
    timestamp: number;
  }>;
};