/**
 * greet(name):
 * - Accepts a "name" parameter of type "string"
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name: string): void {
  console.log(`Hello ${name}`);
}

/**
 * isOdd(n):
 * - Accepts a "n" parameter of type "number"
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n: number): boolean {
  let result: boolean;
  if (n % 2 === 0) {
    result = false;
  } else {
    result = true;
  }

  return result; // replace false with what you see is fit
}

/**
 * oddsSmallerThan(n):
 * - Accepts a "n" parameter of type "number"
 * - returns the number of ODD numbers smaller than "n"
 *
 * e.g.
 * oddsSmallerThan(7) -> 3; // the odd numbers being 1, 3, 5
 * oddsSmallerThan(15) -> 7; // the odd numbers being 1, 3, 5, 7, 9, 11, 13
 */
function oddsSmallerThan(n: number): number {
  return Math.floor(n / 2); // replace -1 with what you see is fit
}

/**
 * squareOrDouble(n):
 * - Accepts a "n" parameter of type "number"
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32; // (16 * 2)
 * squareOrDouble(9) -> 81; // (9 ^ 2)
 */
function squareOrDouble(n: number): number {
  let result: number;
  if (n % 2 === 0) {
    result = n * 2;
  } else if (n === 0) {
    result = 0;
  } else {
    result = n ** 2;
  }

  return result; // replace -1 with what you see is fit
}

export { greet, isOdd, oddsSmallerThan, squareOrDouble };
