import { PropsWithChildren } from 'react';
import { hookEventHandler } from '@/utils/interface';
interface Props {
    name: string;
    visible: boolean;
    beforeEnter?: hookEventHandler;
    enter?: hookEventHandler;
    afterEnter?: hookEventHandler;
    enterCanceled?: hookEventHandler;
    beforeLeave?: hookEventHandler;
    Leave?: hookEventHandler;
    afterLeave?: hookEventHandler;
    leaveCanceled?: hookEventHandler;
}
declare function reactTransition(props: PropsWithChildren<Props>): JSX.Element;
declare namespace reactTransition {
    var propTypes: {};
}
export default reactTransition;
