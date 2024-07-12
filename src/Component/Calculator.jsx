import React, { useState } from 'react';
import './Calculator.css';
import './Mediaquery.css';


function Calculator() {

    const [num, setNum] = useState(0);
    const[oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

function inputNum(event){
    const input = event.target.value;
    if(num === 0){
        setNum(input)
    }
    else{
        setNum(num + input)
    }

}

function clear(){
    setNum(0);
}

function changeSign(){
    if(num > 0){
        setNum(-num)
    }
    else{
        setNum(Math.abs(num))
    }
}

function porcentage(){
    setNum(num / 100);
}

function operatorHandle(event){
    const operatorInput = event.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);

}


    function calculate() {
        let result;
        switch (operator) {
            case '/':
                result = parseFloat(oldNum) / parseFloat(num);
                break;
            case 'X':
                result = parseFloat(oldNum) * parseFloat(num);
                break;
            case '+':
                result = parseFloat(oldNum) + parseFloat(num);
                break;
            case '-':
                result = parseFloat(oldNum) - parseFloat(num);
                break;
            default:
                return;
        }

       
        if (result % 1 !== 0) {
            result = result.toFixed(2);
        }

        setNum(result.toString());
    }

  



    return (
        <div className="container">
            <div className="content">
                <h1 className='result'>{num}</h1>
                <div className="buttons-container">
                    <button className="buttons white" onClick={clear}>AC</button>
                    <button className="buttons white" onClick={changeSign} value={'-'}>+/-</button>
                    <button className="buttons white" onClick={porcentage}>%</button>
                    <button className="buttons orange" onClick={operatorHandle} value={'/'}>/</button>
                    <button className="buttons white" onClick={inputNum} value={7}>7</button>
                    <button className="buttons white" onClick={inputNum} value={8}>8</button>
                    <button className="buttons white" onClick={inputNum} value={9}>9</button>
                    <button className="buttons orange" onClick={operatorHandle} value={'X'}>X</button>
                    <button className="buttons white" onClick={inputNum} value={4}>4</button>
                    <button className="buttons white" onClick={inputNum} value={5}>5</button>
                    <button className="buttons white" onClick={inputNum} value={6}>6</button>
                    <button className="buttons orange" onClick={operatorHandle} value={'-'}>-</button>
                    <button className="buttons white" onClick={inputNum} value={1}>1</button>
                    <button className="buttons white" onClick={inputNum} value={2}>2</button>
                    <button className="buttons white" onClick={inputNum} value={3}>3</button>
                    <button className="buttons orange" onClick={operatorHandle} value={'+'}>+</button>
                    <button className="buttons gray wide" onClick={inputNum} value={0}>0</button>
                    <button className="buttons white" onClick={inputNum} value={'.'}>.</button>
                    <button className="buttons orange" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;