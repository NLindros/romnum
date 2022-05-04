import math
from unittest import result


def num2rom(num):
    nummap = {
        0: "",
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
    }

    romnum = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
    }

    result = ""

    if num >= 500:
        quotient = num // 500
        result += quotient * romnum[500]
        num = num % 500
    sub = decreaseToPowerOf10(500)
    if 500 - sub <= num < 500:
        result += romnum[sub] + romnum[500]
        num -= 400

    if num >= 100:
        quotient = num // 100
        result += quotient * romnum[100]
        num = num % 100
    sub = decreaseToPowerOf10(100)
    if 100 - sub <= num < 100:
        result += romnum[sub] + romnum[100]
        num -= 90

    if num >= 50:
        quotient = num // 50
        result += quotient * romnum[50]
        num = num % 50
    sub = decreaseToPowerOf10(50)
    if 50 - sub <= num < 50:
        result += romnum[sub] + romnum[50]
        num -= 40

    quotient = num // 10
    num = num % 10
    result += quotient * romnum[10] + nummap[num]
    return result


def decreaseToPowerOf10(number):
    exponent = math.floor(math.log10(number - 1))
    return 10**exponent


def romOfRem(num, base, baseChar):
    remainder = num % base

    if remainder == base - 1:
        result = "I" + baseChar
    else:
        result = "I" * remainder
    return result
