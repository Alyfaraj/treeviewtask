import { generateRandomId } from "../src/utils";

describe('generateRandomId', () => {
  it('should generate a random id [2,9]', () => {
    const randomId = generateRandomId();

    expect(typeof randomId).toBe('string');

    expect(randomId.length).toBeGreaterThanOrEqual(2);
    expect(randomId.length).toBeLessThanOrEqual(9);
  });

  it('should generate unique IDs', () => {
    const ids = new Set();
    const NUM_TESTS = 1000;

    for (let i = 0; i < NUM_TESTS; i++) {
      const randomId = generateRandomId();
      ids.add(randomId);
    }

    expect(ids.size).toBe(NUM_TESTS);
  });
});
