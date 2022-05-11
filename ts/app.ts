export const num2rom = (num: number) => {

    let result = '';
    let quotient: number;

    quotient = (num / 50) >> 0;
    result += 'L'.repeat(quotient);
    num %= 50;

    quotient = (num / 10) >> 0;
    result += 'X'.repeat(quotient);
    num %= 10;
    if (num == 9)
        return result + 'IX'

    quotient = (num / 5) >> 0;
    result += 'V'.repeat(quotient);
    num %= 5;
    if (num == 4) {
        return result += 'IV'
    }
    result += 'I'.repeat(num);
    return result
}