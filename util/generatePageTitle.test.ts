import { config } from '../config';
import { generatePageTitle } from './generatePageTitle';

describe('generatePageTitle', () => {
  it('renders page title', async () => {
    expect(generatePageTitle()).toEqual(config.title);
  });

  it('renders page title with prefix', async () => {
    expect(generatePageTitle({ prefix: 'foo' })).toEqual(`foo - ${config.title}`);
  });
});
