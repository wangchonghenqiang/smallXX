import React, { useState } from 'react';
import classnames from 'classnames';

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (React.createElement("div", { className: classnames('class1', 'class2') },
        React.createElement("button", { onClick: () => { setNumber(number + 1); } },
            number,
            "\u70B9\u51FB")));
};

export { Counter };
