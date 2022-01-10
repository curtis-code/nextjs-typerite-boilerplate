import { config } from '../config';

export function generatePageTitle({ prefix }: { prefix?: string } = {}) {
  return prefix ? `${prefix} - ${config.title}` : config.title;
}
