import TicTacToe from '../components/games/TicTacToe';
import DotsAndBoxes from '../components/games/DotsAndBoxes';
import './Games.css';

export default function Games() {
  return (
    <div className="games-page">
      <div className="games-page__header">
        <h1 className="games-page__title">Games</h1>
        <p className="games-page__desc">Two 2-player mini-games to play with a friend.</p>
      </div>
      <div className="games-page__grid">
        <TicTacToe />
        <DotsAndBoxes />
      </div>
    </div>
  );
}
