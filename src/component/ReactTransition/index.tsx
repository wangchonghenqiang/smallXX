import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
  useLayoutEffect,
} from 'react';
import { findDOM } from './utils';
import Wrapper from './Wrapper';
import useStatus from './useStatus';
import {
  STATUS_APPEAR,
  STATUS_ENTER,
  STATUS_LEAVE,
  STEP_TYPE,
  STATUS_TYPE,
  STEP_START,
  STEP_PREPARE,
  STEP_ACTIVE,
  STEP_END,
} from './declare';

export type MotionName =
  | string
  | {
      appear?: string;
      enter?: string;
      leave?: string;
      appearActive?: string;
      enterActive?: string;
      leaveActive?: string;
    };
//

export interface CSSMotionProps {
  name?: string;
  visible?: boolean;
  motionLeaveImmediately?: boolean;
  removeAfterAnimation?: boolean;
}
// 怎么判断是不是第一次呢
const ReactTransition: React.FC<CSSMotionProps & { ref?: React.Ref<any> }> = (
  props,
) => {
  const { visible, name, children, motionLeaveImmediately } = props;

  const nodeRef = useRef();
  const wrapperRef = useRef();

  const mountRef = useRef(false);
  let isMounted = false;
  if (mountRef.current) {
    isMounted = true;
  }
  mountRef.current = true;

  const [newStatus, step] = useStatus(props, isMounted, ({}) => {});
  console.log('====', newStatus, step);

  useLayoutEffect(() => {}, [visible]);
  function getDomElement() {
    try {
      return findDOM<HTMLElement>(
        (nodeRef.current || wrapperRef.current) as unknown as HTMLElement,
      );
    } catch (e) {
      // Only happen when `motionDeadline` trigger but element removed.
      return null;
    }
  }

  function getClass(
    status: STATUS_TYPE,
    step: STEP_TYPE & string,
    name: string,
  ) {
    let className = '';
    let first = '';
    switch (status) {
      case STATUS_APPEAR:
        first = 'appear';
        break;
      case STATUS_ENTER:
        first = 'enter';
        break;
      case STATUS_LEAVE:
        first = 'leave';
        break;
      default:
        return '';
    }
    if (first) {
      switch (step) {
        case STEP_PREPARE:
          className = `${name}-${first}-enter`;
          break;
        case STEP_START:
          className = `${name}-${first}-enter ${name}-${first}-enter-to ${name}-${first}-active`;
          break;
        case STEP_ACTIVE:
          className = `${name}-${first}-enter ${name}-${first}-enter-to ${name}-${first}-active`;
          break;
        case STEP_END:
          className = '';
          break;
        default:
          className = '';
          break;
      }
    }
    return className;
  }

  const className = getClass(newStatus, step, name);
  console.log('className', className, status, step, name);
  //

  const child = children({ className }, nodeRef);
  useEffect(() => {
    const el = getDomElement();
    console.log('getDomElement', el);
  });
  return <Wrapper ref={wrapperRef}>{child}</Wrapper>;
};

export default ReactTransition;
