import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';

const Button = (props) => {
  const {handleClick, children} = props;
  return (
    <button onClick={handleClick}>{children}</button>
  );
};

const Application = () => {
  const [name, setName] = useState('');
  const reset = () => setName('');

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='type your name'
      />
      <Button handleClick={reset}>reset</Button>
      {name !== '' && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
