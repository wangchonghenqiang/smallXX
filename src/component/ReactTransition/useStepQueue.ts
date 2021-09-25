import { useLayoutEffect, useState } from 'react';
import {
  STEP_NONE,
  StepStatus,
  STEP_END,
  STEP_PREPARE,
  STEP_START,
  STEP_ACTIVE,
} from './declare';

const queue = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_END];
export default (step: string, callback: any) => {
  if (step !== STEP_NONE && step !== STEP_END) {
    const index = queue.findIndex((item) => item === step);
    index !== -1 && index < queue.length - 1
      ? callback(queue[index + 1])
      : callback(STEP_NONE);
  }
};
