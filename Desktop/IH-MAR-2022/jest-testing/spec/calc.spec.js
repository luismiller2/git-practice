// spec/calc.spec.js

describe('The function sum() used in the Calculator', () => {
    it('should be a function', () => {
      expect(typeof sum).toBe('function');
    });
  
    it('should return 0 for an empty array', () => {
      expect(sum([])).toBe(0);
    });
  
    it('should throw an error if no parameter is provided', () => {
      expect(() => {
        sum();
      }).toThrow(new Error('No parameter provided'));
    });
  });
  