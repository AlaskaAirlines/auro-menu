/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

// import { auroMenuResetExample } from '../apiExamples/reset';

import { AuroMenu } from '../src/auro-menu.js';
import { AuroMenuOption } from '../src/auro-menuoption.js';

AuroMenu.register();
AuroMenuOption.register();
AuroMenu.register('custom-menu');
AuroMenuOption.register('custom-menuoption');

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    // auroMenuResetExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

