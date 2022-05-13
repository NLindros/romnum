const { num2rom, prevPowerOf10 } = require('./app');

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
            [49, 'XLIX'],
            [50, 'L'],
        ]);
        numbers.forEach((rom, num, map) => {
            expect(num2rom(num)).toBe(rom);
        });
    });

    it('should handle values around C (100)', () => {
        const numbers = new Map([
            [92, 'XCII'],
            [99, 'XCIX'],
            [100, 'C'],
            [109, 'CIX'],
        ]);
        numbers.forEach((rom, num, map) => {
            expect(num2rom(num)).toBe(rom);
        });
    });

    it('should handle all kind of random values', () => {
        const numbers = new Map([
            [34, 'XXXIV'],
            [79, 'LXXIX'],
            [149, 'CXLIX'],
            [498, 'CDXCVIII'],
        ]);
        numbers.forEach((rom, num, map) => {
            expect(num2rom(num)).toBe(rom);
        });
    });

});

describe('Find nearest power of 10 below', () => {
    it('should 10^(x-1) for 10^x', () => {
        expect(prevPowerOf10(10)).toBe(1);
        expect(prevPowerOf10(100)).toBe(10);
        expect(prevPowerOf10(1000)).toBe(100);
    });
    it('should find nearest below of between power of 10\'s', () => {
        expect(prevPowerOf10(50)).toBe(10);
        expect(prevPowerOf10(5)).toBe(1);
    })
});