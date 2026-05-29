# English Kata

## Description

This project implements the English kata.

The function checks if a string contains the word `English`.

Rules:

- The text can contain any ASCII character.
- The word `English` must appear in the correct character order.
- The check is case-insensitive.
- Return `true` if the text contains `English`.
- Return `false` if the text does not contain `English`.

## Algorithm

1. Receive a string as a parameter.
2. Convert the string to lowercase.
3. Check if the lowercase string contains the word `english`.
4. Return `true` if it contains it.
5. Return `false` if it does not contain it.

## Project Structure

```text
.
|-- src/english/english.js
|-- tests/english.test/english.test.js
|-- package.json
`-- README.md
```
