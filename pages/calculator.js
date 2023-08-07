import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const handleClear = () => {
    setInput('');
    setDisplay('');
  };

  const handleOperands = (operands) => {
    setInput(input + operands);
  };

  const handleAnswer = () => {
    try {
      const result = eval(input);
      setDisplay(result);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleSquareRoot = () => {
    try {
      const result = Math.sqrt(eval(input));
      setDisplay(result);
    } catch (error) {
      
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="input-holder">
        <input type="text" value={input} className="container-input" readOnly />
        <input type="text" value={display} className="container-input" readOnly />
      </div>
      <div>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button onClick={() => handleOperands('-')}>
          -
        </button>
      </div>
      <div>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button onClick={() => handleOperands('+')}>
          +
        </button>
      </div>
      <div>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button onClick={() => handleOperands('/')}>
          /
        </button>
      </div>
      <div>
        <button onClick={handleClear}>
          Clr
        </button>
        <button value="0" onClick={handleClick}>
          0
        </button>
        <button onClick={() => handleOperands('*')}>
          *
        </button>
        <button onClick={handleAnswer}>
          =
        </button>
      </div>
      <div>
        <button onClick={handleSquareRoot}>√</button>
        <button onClick={() => handleOperands('**')}>**</button>
      </div>
    </div>
  );
};

export default Calculator;
