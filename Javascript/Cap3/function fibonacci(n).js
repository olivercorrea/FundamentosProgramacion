function fibonacci(n) {
if (n <= 1) return n;
return fibonacci(n-1) + fibonacci(n-2);
}

/**
 * 
 * function fibonacci(n) {
  if (typeof n !== 'number' || n < 0) {
    throw new Error('Invalid input');
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}
 */

describe('fibonacci', () => {
    it('should return the correct value for n = 1', () => {
      expect(fibonacci(1)).toBe(1);
    });
  
    it('should return the correct value for n = 2', () => {
      expect(fibonacci(2)).toBe(1);
    });
  
    it('should return the correct value for n = 3', () => {
      expect(fibonacci(3)).toBe(2);
    });
  
    it('should return the correct value for n = 4', () => {
      expect(fibonacci(4)).toBe(3);
    });
  
    it('should return the correct value for n = 5', () => {
      expect(fibonacci(5)).toBe(5);
    });
  
    it('should return the correct value for n = 6', () => {
      expect(fibonacci(6)).toBe(8);
    });
  
    it('should return the correct value for n = 7', () => {
      expect(fibonacci(7)).toBe(13);
    });
  
    it('should return the correct value for n = 8', () => {
      expect(fibonacci(8)).toBe(21);
    });
  
    it('should return the correct value for n = 9', () => {
      expect(fibonacci(9)).toBe(34);
    });
  
    it('should return the correct value for n = 10', () => {
      expect(fibonacci(10)).toBe(55);
    });
  });