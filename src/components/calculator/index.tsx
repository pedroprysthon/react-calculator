import React, {useRef } from 'react';
import './style.css';

const Calculator: React.FC = () => {
    const inputText = useRef<HTMLInputElement>(null)
    function add(val: string) {
        if (!inputText.current) return;
        inputText.current.value += val;
    }
    function reset() {
        if (!inputText.current) return;
        inputText.current.value = "";
        
    }
    function result() {
        if (!inputText.current) return;
        if (inputText.current.value ==="") return;

        inputText.current.value = eval(inputText.current.value);

    }
    function erease() {
        if (!inputText.current) return;
        let deletedText = inputText.current.value.substring(0, inputText.current.value.length - 1)
        inputText.current.value = deletedText
    }
    return (
        <main>
            <div className="container">
                <input type="text" ref={inputText} />
                <button className="reset" onClick={() => reset()}>C</button>
                <button onClick={() => add('%')}>%</button>
                <button onClick={() => add('/')}>/</button>
                <button onClick={() => add('1')}>1</button>
                <button onClick={() => add('2')}>2</button>
                <button onClick={() => add('3')}>3</button>
                <button onClick={() => add('*')}>X</button>
                <button onClick={() => add('4')}>4</button>
                <button onClick={() => add('5')}>5</button>
                <button onClick={() => add('6')}>6</button>
                <button onClick={() => add('-')}>-</button>
                <button onClick={() => add('7')}>7</button>
                <button onClick={() => add('8')}>8</button>
                <button onClick={() => add('9')}>9</button>
                <button onClick={() => add('+')}>+</button>
                <button onClick={() => add('0')}>0</button>
                <button onClick={() => add('.')}>.</button>
                <button onClick={() => erease()}>{'<='}</button>
                <button onClick={() => result()}>=</button>
            </div>
        </main>
    );
};

export default Calculator