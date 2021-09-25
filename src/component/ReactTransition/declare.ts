export const STEP_PREPARE = 'prepare';
export const STEP_START = 'start';
export const STEP_ACTIVE = 'active';
export const STEP_END = 'end';
export const STEP_NONE = 'none';
export type STEP_TYPE =
  | typeof STEP_NONE
  | typeof STEP_PREPARE
  | typeof STEP_START
  | typeof STEP_ACTIVE
  | typeof STEP_END;

export const STATUS_APPEAR = 'appear';
export const STATUS_ENTER = 'enter';
export const STATUS_LEAVE = 'leave';
export const STATUS_NONE = 'none';

export type STATUS_TYPE =
  | typeof STATUS_APPEAR
  | typeof STATUS_ENTER
  | typeof STATUS_LEAVE
  | typeof STEP_NONE;

export type MotionStatus =
  | typeof STATUS_NONE
  | typeof STATUS_APPEAR
  | typeof STATUS_ENTER
  | typeof STATUS_LEAVE;

export type MotionEvent = (TransitionEvent | AnimationEvent) & {
  deadline?: boolean;
};

export type MotionPrepareEventHandler = (
  element: HTMLElement,
) => Promise<any> | void;

export type MotionEventHandler = (
  element: HTMLElement,
  event: MotionEvent,
) => React.CSSProperties | void;

export type MotionEndEventHandler = (
  element: HTMLElement,
  event: MotionEvent,
) => boolean | void;
