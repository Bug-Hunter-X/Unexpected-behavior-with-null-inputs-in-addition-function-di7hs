function foo(a, b) {
  // Use nullish coalescing operator to handle null values
  const numA = a ?? 0;
  const numB = b ?? 0;
  return numA + numB;
}
console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, null)); // Output: 0