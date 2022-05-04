import pytest
from romnum import num2rom, decreaseToPowerOf10

test_data = [
    (0, ""),
    (1, "I"),
    (2, "II"),
    (3, "III"),
    (4, "IV"),
    (5, "V"),
    (6, "VI"),
    (7, "VII"),
    (8, "VIII"),
    (9, "IX"),
    (10, "X"),
    (11, "XI"),
    (14, "XIV"),
    (19, "XIX"),
    (20, "XX"),
    (21, "XXI"),
    (34, "XXXIV"),
    (39, "XXXIX"),
    (40, "XL"),
    (79, "LXXIX"),
    (94, "XCIV"),
    (100, "C"),
    (109, "CIX"),
    (149, "CXLIX"),
    (440, "CDXL"),
    (450, "CDL"),
    (499, "CDXCIX"),
    (757, "DCCLVII"),
]


@pytest.mark.parametrize("data", test_data, ids=lambda x: f"{x[0]} -> {x[1]}")
def test_numbers(data):
    given, expected = data
    result = num2rom(given)
    assert result == expected


@pytest.mark.parametrize(
    "number",
    [
        (10, 1),
        (50, 10),
        (100, 10),
        (500, 100),
        (1000, 100),
    ],
    ids=lambda x: f"{x[0]} -> {x[1]}",
)
def test_get_sub10power(number):
    number, expected = number
    result = decreaseToPowerOf10(number)
    assert result == expected
