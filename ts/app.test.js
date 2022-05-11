const { num2rom } = require('./app');

describe('Convert numbers to roman numbers', () => {

    it('should handle the small numbers', () => {
        const numbers = new Map([
            [1, 'I'],
            [2, 'II'],
            [3, 'III'],
        ]);
        numbers.forEach((rom, num, map) => {
            expect(num2rom(num)).toBe(rom);
        });
    });

    it('should handle values around 5 (V)', () => {
        const numbers = new Map([
            [4, 'IV'],
            [5, 'V'],
            [6, 'VI'],
            [7, 'VII'],
            [8, 'VIII'],
        ]);
        numbers.forEach((rom, num, map) => {
            expect(num2rom(num)).toBe(rom);
        });
    })

    it('should handle values around 10 (X)', () => {
        const numbers = new Map([
            [9, 'IX'],
            [10, 'X'],
            [11, 'XI']
        ]);
        numbers.forEach((rom, num, map) => {
            expect(num2rom(num)).toBe(rom);
        });
    });

    it('should handle values with multiple X', () => {
        const numbers = new Map([
            [19, 'XIX'],
            [21, 'XXI'],
            [29, 'XXIX'],
            [33, 'XXXIII'],
            [33, 'XXXIII'],
        ]);
        numbers.forEach((rom, num, map) => {
            expect(num2rom(num)).toBe(rom);
        });
    });

    it('should handle values around L (50)', () => {
        const numbers = new Map([
            [50, 'L'],
        ]);
        numbers.forEach((rom, num, map) => {
            expect(num2rom(num)).toBe(rom);
        });
    });

});