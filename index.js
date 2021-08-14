import React from 'react';

function AddingNumbers() {
    return (
        <div className="container">
            <h1>Adding Two Numbers</h1>
            <div className='form'>
                <input value = {num1}
                onChange={(e) => setNum1(e.target.value)}
                type='number'/>
                <input type='number'
                value={num2}
                onChange={(e) => setNum2(e.target.value)}/>
            </div>
            <button onClick ={() => setResult(+num1 + num2)}>Add Them!</button>
            <p>100</p>
        </div>
    );
}

export default AddingNumbers