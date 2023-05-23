import { auroMenuResetExample } from './partials/reset';
import { auroMenuMatchWordExample } from './partials/matchWord';
import { auroMenuCustomEventExample } from './partials/customEvent';

export function initMenuIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    auroMenuResetExample();
    auroMenuMatchWordExample();
    auroMenuCustomEventExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initMenuIndexExamples(initCount + 1);
      }, 100);
    }
  }
}
