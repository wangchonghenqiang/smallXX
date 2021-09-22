import React, { useState } from 'react';
import classnames from 'classnames';

const Counter: React.FC =  () => {
    const [number, setNumber] = useState(0)
    return (
        <div className={classnames('class1', 'class2')}>
            <button onClick={() => {setNumber(number + 1)}}>{number}点击1</button>
        </div>
    )
}

export default Counter