import { useState, useCallback } from 'react';

const GRID = 5;
const BOXES = GRID - 1;
const CELLS = GRID * 2 - 1;

function lineKey(r, c) {
  if (r % 2 === 0 && c % 2 === 1) return `h-${r / 2}-${(c - 1) / 2}`;
  if (r % 2 === 1 && c % 2 === 0) return `v-${(r - 1) / 2}-${c / 2}`;
  return null;
}

function isLineSlot(r, c) {
  return (r % 2 === 0 && c % 2 === 1) || (r % 2 === 1 && c % 2 === 0);
}

function isDot(r, c) {
  return r % 2 === 0 && c % 2 === 0;
}

function isBox(r, c) {
  return r % 2 === 1 && c % 2 === 1;
}

function getBoxLines(br, bc) {
  const r = br * 2 + 1, c = bc * 2 + 1;
  return [
    lineKey(r - 1, c),
    lineKey(r + 1, c),
    lineKey(r, c - 1),
    lineKey(r, c + 1),
  ];
}

function getAdjacentBoxes(lk) {
  const parts = lk.split('-');
  const type = parts[0], a = parseInt(parts[1]), b = parseInt(parts[2]);
  if (type === 'h') {
    const boxes = [];
    if (a > 0) boxes.push([a - 1, b]);
    if (a < BOXES) boxes.push([a, b]);
    return boxes;
  }
  const boxes = [];
  if (b > 0) boxes.push([a, b - 1]);
  if (b < BOXES) boxes.push([a, b]);
  return boxes;
}

function checkBoxComplete(boxR, boxC, lines) {
  const sides = getBoxLines(boxR, boxC);
  return sides.every((k) => lines[k]);
}

function initialBoxes() {
  return Array.from({ length: BOXES }, () => Array(BOXES).fill(0));
}

export default function DotsAndBoxes() {
  const [lines, setLines] = useState({});
  const [boxes, setBoxes] = useState(initialBoxes);
  const [player, setPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const scores = boxes.flat().reduce(
    (acc, owner) => {
      if (owner === 1) acc.p1++;
      if (owner === 2) acc.p2++;
      return acc;
    },
    { p1: 0, p2: 0 }
  );

  const handleLineClick = useCallback(
    (r, c) => {
      const lk = lineKey(r, c);
      if (!lk || lines[lk] || gameOver) return;

      const nextLines = { ...lines };
      nextLines[lk] = player;
      setLines(nextLines);

      const adjBoxes = getAdjacentBoxes(lk);
      let claimed = false;

      const nextBoxes = boxes.map((row) => [...row]);
      for (const [br, bc] of adjBoxes) {
        if (nextBoxes[br][bc] === 0 && checkBoxComplete(br, bc, nextLines)) {
          nextBoxes[br][bc] = player;
          claimed = true;
        }
      }

      setBoxes(nextBoxes);

      const totalLinesPossible = 2 * GRID * (GRID - 1);
      if (Object.keys(nextLines).length >= totalLinesPossible) {
        setGameOver(true);
        return;
      }

      if (!claimed) setPlayer((p) => (p === 1 ? 2 : 1));
    },
    [lines, boxes, player, gameOver]
  );

  const handleReset = () => {
    setLines({});
    setBoxes(initialBoxes());
    setPlayer(1);
    setGameOver(false);
  };

  const winner = !gameOver
    ? null
    : scores.p1 > scores.p2
      ? 1
      : scores.p2 > scores.p1
        ? 2
        : 'draw';

  const statusMsg = gameOver
    ? winner === 'draw'
      ? "It's a draw!"
      : `Player ${winner} wins!`
    : `Player ${player}'s turn`;

  return (
    <div className="game-container">
      <h3 className="game-title">Dots & Boxes</h3>
      <p className="game-subtitle">Two players · Click between dots to draw lines</p>

      <div className="dab__scoreboard">
        <span
          className={player === 1 && !gameOver ? 'dab__score--active' : ''}
          style={player === 1 && !gameOver ? { color: '#ef4444' } : undefined}
        >
          P1: {scores.p1}
        </span>
        <span
          className={player === 2 && !gameOver ? 'dab__score--active' : ''}
          style={player === 2 && !gameOver ? { color: '#3b82f6' } : undefined}
        >
          P2: {scores.p2}
        </span>
      </div>

      <div className="dab__status">
        <span>{statusMsg}</span>
        {(gameOver || Object.keys(lines).length > 0) && (
          <button className="ttt__reset" onClick={handleReset}>Play Again</button>
        )}
      </div>

      <div className="dab__grid">
        {Array.from({ length: CELLS }, (_, r) =>
          Array.from({ length: CELLS }, (_, c) => {
            if (isDot(r, c)) return <div key={`${r}-${c}`} className="dab__dot" />;

            if (isLineSlot(r, c)) {
              const lk = lineKey(r, c);
              const owner = lines[lk];
              const isH = r % 2 === 0;

              return (
                <div
                  key={`${r}-${c}`}
                  className={`dab__line-slot${owner ? ' dab__line-slot--drawn' : ''}`}
                  onClick={() => handleLineClick(r, c)}
                >
                  {owner && (
                    <div
                      className={`dab__line dab__line--${isH ? 'h' : 'v'} dab__line--p${owner}`}
                    />
                  )}
                  {!owner && <div className="dab__line-hover" />}
                </div>
              );
            }

            if (isBox(r, c)) {
              const br = (r - 1) / 2, bc = (c - 1) / 2;
              const owner = boxes[br][bc];
              return (
                <div
                  key={`${r}-${c}`}
                  className={`dab__box${owner ? ` dab__box--p${owner}` : ''}`}
                >
                  {owner !== 0 && (
                    <span className="dab__box-label">P{owner}</span>
                  )}
                </div>
              );
            }

            return null;
          })
        )}
      </div>
    </div>
  );
}
