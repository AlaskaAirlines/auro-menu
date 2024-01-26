import { auroMenuResetExample } from '../apiExamples/reset';
import { auroMenuMatchWordExample } from '../apiExamples/matchWord';
import { auroMenuCustomEventExample } from '../apiExamples/customEvent';

export function initMenuApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    auroMenuResetExample();
    auroMenuMatchWordExample();
    auroMenuCustomEventExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initMenuApiExamples(initCount + 1);
      }, 100);
    }
  }
}
