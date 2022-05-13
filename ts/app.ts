const romanNumbers = new Map([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
]);

type numResult = {
    remaining: number
    result: string
};

const checkSubRange = (numResult: numResult, threshold: number): numResult => {
    let subValue: number;
    let subRange: number;
    subValue = prevPowerOf10(threshold);
    subRange = threshold - subValue;
    if (numResult.remaining >= subRange) {
        numResult.remaining %= subRange;
        numResult.result += getRomanSymbol(subValue) + getRomanSymbol(threshold);
    }
    return numResult
};

function checkThreshold(numResult: numResult, threshold: number) {
    const quotient = (numResult.remaining / threshold) >> 0;
    numResult.remaining %= threshold;
    numResult.result += getRomanSymbol(threshold).repeat(quotient);
    return numResult
}

export const num2rom = (num: number) => {

    let numResult = {
        remaining: num,
        result: ''
    }
    const thresholds = Array.from(romanNumbers.keys()).slice(1).reverse();
    for (let threshold of thresholds) {
        checkThreshold(numResult, threshold);
        checkSubRange(numResult, threshold);
    }

    numResult.result += getRomanSymbol(1).repeat(numResult.remaining);
    return numResult.result

};

const getRomanSymbol = (num: number): string => {
    const symbol = romanNumbers.get(num);
    if (symbol == undefined)
        throw `${num} has no roman symbol`;
    return symbol
};

export const prevPowerOf10 = (num: number) => {
    const exponent = Math.log10(num - 1) >> 0;
    return Math.pow(10, exponent);
};

