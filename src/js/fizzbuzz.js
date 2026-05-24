export function fizzBuzz(num) {
    if (typeof num !== "number") {
        throw new Error("Provided value is not a number");
    }

    const isFizz = num % 3 === 0;
    const isBuzz = num % 5 === 0;
    const isFizzBuzz = isFizz && isBuzz;

    if (isFizzBuzz) {
        return "FizzBuzz";
    }

    if (isFizz) {
        return "Fizz";
    }

    if (isBuzz) {
        return "Buzz";
    }

    return String(num);
}

