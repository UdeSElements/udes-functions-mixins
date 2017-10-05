[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/UdeSElements/udes-functions-mixins)
[![Polymer 2 supported](https://img.shields.io/badge/Polymer%202-supported-blue.svg)](https://www.polymer-project.org)
[![Build status](https://travis-ci.org/UdeSElements/udes-functions-mixins.svg?branch=master)](https://travis-ci.org/UdeSElements/udes-functions-mixins)

# UdeS.FunctionsMixins
This repository provides useful functions to help you create faster your 
Polymer applications and components.

In Polymer, when we want to use a dom-if, we should provide it a boolean 
property. However, when we want to provide the result of a function, we must 
define that function inside our element, even if that function is simple as
`note > 60` by example.

By using the `UdeS.FunctionsMixins`, you no longer need to create and maintain 
theses custom functions. You could simply write your dom-if as below:

```html
<template is="dom-if" if="[[greaterThan(note, 60)]]">
</template>
```

## Mixins
### Base mixins
- **UdeS.ArrayFunctionsMixin**
  - `array` Return an array of arguments.
  - `at` Return the element of array at the specified index.
  
- **EqualityOperatorsMixin**
  - `equal` Perform a comparison (a == b) on all arguments.
  - `strictEqual` Perform a strict comparison (a === b) on all arguments.
  - `notEqual` Perform a comparison (a != b) on all arguments.
  - `notStrictEqual` Perform a strict comparison (a !== b) on all arguments.

- **UdeS.IsFunctionsMixin**
  - `isAllUndefined` Check if the all variables are undefined.
  - `isArray` Check if the variable is an array.
  - `isEmptyArray` Check to see if an array is empty.
  - `isEmptyObject` Check to see if an object is empty 
    (contains no enumerable properties).
  - `isEmptyString` Check to see if a string is empty.
  - `isInteger` Check to see if a string is an integer.
  - `isPositiveInteger` Check to see if a string is a positive integer.
  - `isUndefined` Check if at least one variable is undefined.
  - `isUndefinedVariable` Check if the variable is undefined.
  
- **UdeS.LogicalOperatorsMixin**
  - `and` And function (&&).
  - `iif` If function.
  - `not` Not function (!).
  - `or` Or function (||).
  - `xor` Exclusive or function.

### Grouping mixins
- **UdeS.ComparisonOperatorsMixins**
  - UdeS.EqualityOperatorsMixin
  - UdeS.RelationalOperatorsMixin
- **UdeS.FunctionsMixins**
  - UdeS.ArrayFunctionsMixin
  - UdeS.ComparisonOperatorsMixins
    - UdeS.EqualityOperatorsMixin
    - UdeS.RelationalOperatorsMixin
  - UdeS.IsFunctionsMixin