import { describe, expect, it } from 'vitest';
import { yearsAsDeveloper } from './metrics';

describe('yearsAsDeveloper', () => {
  it('should count complete years since March 2024', () => {
    expect(yearsAsDeveloper(new Date(2026, 10, 3))).toBe(2);
    expect(yearsAsDeveloper(new Date(2026, 2, 1))).toBe(2);
    expect(yearsAsDeveloper(new Date(2026, 1, 28))).toBe(1);
    expect(yearsAsDeveloper(new Date(2024, 2, 1))).toBe(0);
  });
});
