/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

import { auroMenuResetExample } from '../apiExamples/reset';
import { auroMenuMatchWordExample } from '../apiExamples/matchWord';
import { auroMenuCustomEventExample } from '../apiExamples/customEvent';
import '../index.js';

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    auroMenuResetExample();
    auroMenuMatchWordExample();
    auroMenuCustomEventExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

