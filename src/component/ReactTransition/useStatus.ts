import { useEffect, useState, useLayoutEffect } from 'react';
import {
  STATUS_NONE,
  STATUS_APPEAR,
  STEP_PREPARE,
  STEP_NONE,
  STEP_TYPE,
  STATUS_TYPE,
} from './declare';
import useStepQueue from './useStepQueue';

import addEvent from './addEvent';

const useStatus = (props: any, isMounted: boolean, callback) => {
  const [status, setStatus] = useState<STATUS_TYPE>(STATUS_NONE);
  const [step, setStep] = useState<STEP_TYPE>(STEP_NONE);
  const { visible } = props;

  // 根据status进行变化
  useLayoutEffect(() => {
    let nextStatus;
    if (!isMounted) {
      nextStatus = STATUS_APPEAR;
    }

    callback({ status, step });
    if (nextStatus) {
      setStatus(nextStatus);
      setStep(STEP_PREPARE);
    }
  }, [visible]);
  // step 变化切换
  useStepQueue(step, (nextStep: any) => {
    setStep(nextStep);
    console.log(Date.now());
  });

  return [status, step];
};

export default useStatus;
