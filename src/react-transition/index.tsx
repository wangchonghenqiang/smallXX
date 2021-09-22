import React, {PropsWithChildren} from 'react'
import PropTypes from 'prop-types';
import { hookEventHandler } from '@/utils/interface';

interface Props<> {
    name: string,
    visible: boolean,
    beforeEnter?: hookEventHandler,
    enter?: hookEventHandler,
    afterEnter?: hookEventHandler,
    enterCanceled?: hookEventHandler,
    beforeLeave?: hookEventHandler,
    Leave?: hookEventHandler,
    afterLeave?: hookEventHandler,
    leaveCanceled?: hookEventHandler
}


function reactTransition(props: PropsWithChildren<Props>) {
    const {name, visible, children} = props

    const modifyChild = (child, className = '1234') => {
        React.cloneElement(child, {
            className
        });
    }
    // 给子节点绑定事件

    // 获取子节点


    // 根据 visible 给子节点加class 
    return (
        <div>
            {React.Children.map(children, child => modifyChild(child))}
        </div>
    )
}

reactTransition.propTypes = {

}

export default reactTransition

