---
{"id":"8795cbce-beb7-11ee-9557-df619281a2af","title":"Day 01: Trebuchet?!","description":"Advent of Code 2023 Day 1 solutions","publish":true,"date_created":"Monday, January 29th 2024, 4:02:37 pm","date_modified":"Monday, January 29th 2024, 4:54:07 pm","path":"Advent of Code/2023/Day 01.md","permalink":"/advent-of-code/2023/day-01/","PassFrontmatter":true}
---


[Official Problem Page](https://adventofcode.com/2023/day/1)

Use Regular Expressions with [lookahead](https://www.regular-expressions.info/lookaround.html) to not consume matches. This allows for overlapping matches, which is important for part two.

Example: `eightwo` will match both `eight` and `two`. Without lookahead, the string `eight` would be consumed, causing a missed match on the remaining `wo`.

## Part 1

```python
from re import findall

input = open("input/1.txt", "r").readlines()

pattern = r"(?=(\d)){1}"

result = 0
for line in input:
    match = findall(pattern, line)
    result += int(match[0] + match[-1])
print(result)
```

## Part 2

```python
mapping = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
}

pattern = rf"(?=({'|'.join(mapping)})){{1}}"

result = 0
for line in input:
    match = findall(pattern, line)
    result += int(mapping.get(match[0]) + mapping.get(match[-1]))
print(result)
```
