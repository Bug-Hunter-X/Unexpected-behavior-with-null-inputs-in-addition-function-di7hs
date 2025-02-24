# Unexpected Behavior with Null Inputs in JavaScript Addition Function

This repository demonstrates a common, yet subtle bug in JavaScript involving the handling of null values in a simple addition function.  The function is intended to add two numbers, but it exhibits unexpected behavior when one or both inputs are null.

## Bug Description

The `foo` function, designed to add two numbers, returns 0 when either `a` or `b` is null.  While this might seem like a reasonable default, it could lead to unexpected results or mask errors in larger applications.  Ideally, the function should either throw an error to indicate invalid input or handle null values appropriately, such as by treating them as 0 or returning null.

## Solution

The solution provided in `bugSolution.js` handles null inputs gracefully by using the nullish coalescing operator (`??`) to default null values to 0.  This allows the function to continue adding numbers even with null inputs while preventing unexpected 0 results when that may not be the intention.