
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import React, { useState } from 'react';
import classnames from 'classnames';

const Counter$1 = () => {
    const [number, setNumber] = useState(0);
    return (React.createElement("div", { className: classnames('class1', 'class2') },
        React.createElement("button", { onClick: () => { setNumber(number + 1); } },
            number,
            "\u70B9\u51FB2")));
};

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (React.createElement("div", { className: classnames('class1', 'class2') },
        React.createElement("button", { onClick: () => { setNumber(number + 1); } },
            number,
            "\u70B9\u51FB1")));
};

function reactTransition(props) {
    const { name, visible, children } = props;
    const modifyChild = (child, className = '1234') => {
        React.cloneElement(child, {
            className
        });
    };
    // 给子节点绑定事件
    // 获取子节点
    // 根据 visible 给子节点加class 
    return (React.createElement("div", null, React.Children.map(children, child => modifyChild(child))));
}
reactTransition.propTypes = {};

export { reactTransition as ReactTransition, Counter$1 as button1, Counter as button2 };
