import { StatsGenerics } from 'src/stats/stats.generics';
import { describe, it, test } from 'vitest';

describe('StatsService', () => {
  const statsSGenerics = new StatsGenerics();

  it('should count items', (t) => {
    const items = [1, 2, 3, 4, 5];
    t.expect(statsSGenerics.countItems(items)).toBe(5);
  });

  it('should calculate profit', (t) => {
    t.expect(statsSGenerics.calculateProfit(100)).toBe(1);
  });

  it('should calculate average price', (t) => {
    const products = [ 
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ];
    t.expect(statsSGenerics.calculateAveragePrice(products)).toBe(20);
  });
});
