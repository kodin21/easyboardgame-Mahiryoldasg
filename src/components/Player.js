import { useState } from 'react';
import useKeyboard from '../customHooks/useKeyboard';
import Character from './Character';

function Player({ skin }) {
  const [pozition, setPozition] = useState({ x: 0, y: 0 });
  const [isRunning, setIsRunning] = useState(false);

  const move = (direction) => {
    if (!isRunning) {
      setPozition((prev) => ({
        x: prev.x + direction.x,
        y: prev.y + direction.y,
      }));
    } else {
      setPozition((prev) => ({
        x: prev.x + direction.x * 2,
        y: prev.y + direction.y * 2,
      }));
    }
  };

  useKeyboard((e) => {
    e.preventDefault();
    const dir = e.key.replace('Arrow', '').toLowerCase();
    if (dir === ' ') {
      setIsRunning(!isRunning);
    }
    if (dir === 'down') {
      if ((isRunning && pozition.y >= 450) || pozition.y >= 475) return;
      move({ x: 0, y: 25 });
    }
    if (dir === 'up') {
      if ((isRunning && pozition.y <= 25) || pozition.y <= 0) return;
      move({ x: 0, y: -25 });
    }
    if (dir === 'left') {
      if ((isRunning && pozition.x <= 25) || pozition.x <= 0) return;
      move({ x: -25, y: 0 });
    }
    if (dir === 'right') {
      if ((isRunning && pozition.x >= 450) || pozition.x >= 475) return;
      move({ x: 25, y: 0 });
    } else return;
  });

  return <Character skin={skin} pozition={pozition} />;
}

export default Player;
