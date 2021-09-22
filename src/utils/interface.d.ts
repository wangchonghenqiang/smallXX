

export type MotionEvent = (TransitionEvent | AnimationEvent) & {
    deadline?: boolean;
};

export type hookEventHandler = (
    element: HTMLElement,
    event: MotionEvent,
  ) => React.CSSProperties | void;