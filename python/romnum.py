import math


def num2rom(num):
    romnum = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    }

    result = ""

    for base, rom in reversed(romnum.items()):
        if base == 1:
            result += rom * num
            break

        if num >= base:
            quotient = num // base
            result += quotient * rom
            num = num % base

        sub = decreaseToPowerOf10(base)
        subBase = base - sub
        if num >= subBase:
            result += romnum[sub] + rom
            num -= subBase

    return result


def decreaseToPowerOf10(number):
    if number <= 1:
        return 1
    exponent = math.floor(math.log10(number - 1))
    return 10**exponent
