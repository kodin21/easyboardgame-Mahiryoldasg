import { useState } from 'react';
import Player from './components/Player';

function App() {
  const [skin, setSkin] = useState('red');
  return (
    <>
      <div className='section-center'>
        <div className='form'>
          <div className='form-control'>
            <h3>Select Character..</h3>
            <select value={skin} onChange={(e) => setSkin(e.target.value)}>
              <option value='red'>Warrior Red</option>
              <option value='blue'>Warrior Blue</option>
              <option value='black'>Warrior Black</option>
              <option value='green'>Warrior Green</option>
            </select>
            <br />
            <h4>Use arrow keys to move and "Space" to run.. </h4>
          </div>
        </div>
      </div>
      <div id='boardContainer'>
        <div id='board'>
          <Player skin={skin} />
        </div>
      </div>
    </>
  );
}

export default App;
