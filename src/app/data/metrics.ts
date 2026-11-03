import { chatSeguroDownloadsUrl } from './experience';
import { projects, visibleProjectCount } from './projects';

export { chatSeguroDownloadsUrl };

const CAREER_START_YEAR = 2024;
const CAREER_START_MONTH = 3;

export function yearsAsDeveloper(now = new Date()): number {
  let years = now.getFullYear() - CAREER_START_YEAR;
  if (now.getMonth() + 1 < CAREER_START_MONTH) {
    years -= 1;
  }

  return Math.floor(Math.max(0, years));
}

// atualizar a cada release
export const chatSeguroReleaseCount = 21;

export const angularPostgradHours = 540;

export function visibleProjectsOnPage(): number {
  return visibleProjectCount(projects);
}
