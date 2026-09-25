import { useState, useCallback } from 'react';

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function checkWinner(squares) {
  for (const [a, b, c] of WIN_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  if (squares.every(Boolean)) return { winner: 'draw', line: null };
  return null;
}

function Square({ value, onClick, isWinning }) {
  return (
    <button
      onClick={onClick}
      className={`ttt__square${isWinning ? ' ttt__square--win' : ''}`}
    >
      {value}
    </button>
  );
}

function Status({ result, player, onReset }) {
  const message = !result ? `Player ${player}'s turn (${player === 'X' ? '1' : '2'})`
    : result.winner === 'draw' ? "It's a draw!"
    : `Player ${result.winner === 'X' ? '1' : '2'} wins!`;

  return (
    <div className="ttt__status">
      <span>{message}</span>
      {result && <button className="ttt__reset" onClick={onReset}>Play Again</button>}
    </div>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const result = checkWinner(squares);

  const handleClick = useCallback((i) => {
    if (squares[i] || result) return;
    const next = squares.slice();
    next[i] = xIsNext ? 'X' : 'O';
    setSquares(next);
    setXIsNext((prev) => !prev);
  }, [squares, xIsNext, result]);

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const currentPlayer = xIsNext ? 'X' : 'O';

  return (
    <div className="game-container">
      <h3 className="game-title">Tic-Tac-Toe</h3>
      <p className="game-subtitle">Two players · Take turns clicking</p>
      <Status result={result} player={currentPlayer} onReset={handleReset} />
      <div className="ttt__board">
        {squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            onClick={() => handleClick(i)}
            isWinning={result?.line?.includes(i)}
          />
        ))}
      </div>
    </div>
  );
}
