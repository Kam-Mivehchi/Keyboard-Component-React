
import { useState } from 'react'
import Key from './Key';
import { Keyboard, Background, Feedback } from './styled-components'
import { characters } from './characterData.js'

function App() {
  const [shift, setShift] = useState(false)
  const [current, setCurrent] = useState('')
  const [capsLock, setCapsLock] = useState(false)


  document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e);
    setCurrent(e.key);
    !e.shiftKey ? setShift(false) : setShift(true)
    if (current === "CapsLock") setCapsLock(!capsLock)
  });
  document.body.addEventListener('keyup', (e) => {
    e.preventDefault();
    console.log(e.key);
    setCurrent('');
    if (current === "Shift") setShift(false)

  });


  return (
    <Background >
      <Feedback >
        <h3 style={{ color: "#FEFBF6", margin: '0' }}>Start Typing and See What Happens</h3>
        <h1 style={{ color: "#A6D1E6", position: "absolute", left: "50%", transform: "translateX:(50%)" }}>{current}</h1>
      </Feedback>
      <Keyboard>
        {characters.map((el) => <Key width={el.size} value={shift ? el.key[1] : el.key[0]} current={current === el.key[0]} />)}

      </Keyboard>
    </Background >
  );
}

export default App;
