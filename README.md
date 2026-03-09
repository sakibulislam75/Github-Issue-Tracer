# JavaScript Questions & Answers

---

## 1. What is the difference between `var`, `let`, and `const`?

`var`, `let`, and `const` are all used to declare variables in JavaScript but they behave differently.

### 🔹 `var`
`var` is the old way of declaring variables. It is **function-scoped**, meaning it is accessible anywhere inside the function it was declared in. One big problem with `var` is that it can be **re-declared** and **updated**, which can cause unexpected bugs.

```js
var name = "Sakib";
var name = "Fahim"; // no error, re-declared
console.log(name); // Fahim
```

Another issue with `var` is **hoisting** — it gets moved to the top of its scope but its value is `undefined` until the line runs.

```js
console.log(age); // undefined (not an error)
var age = 22;
```

---

### 🔹 `let`
`let` is the modern replacement for `var`. It is **block-scoped**, meaning it only lives inside the `{}` it was declared in. It can be **updated** but **not re-declared** in the same scope.

```js
let score = 10;
score = 20; // ok, updated
let score = 30; // Error! Cannot re-declare
```

```js
if (true) {
  let x = 5;
}
console.log(x); // Error! x is not defined outside the block
```

---

### 🔹 `const`
`const` is used when the value will **never change**. It is also block-scoped like `let`, but it **cannot be updated or re-declared**.

```js
const PI = 3.1416;
PI = 3; // Error! Assignment to constant variable
```

One thing to note — if `const` holds an **object or array**, you can still modify the contents, just not reassign the variable itself.

```js
const user = { name: "Sakib" };
user.name = "Fahim"; // this works fine
user = {}; // Error! Cannot reassign
```

---

## 2. What is the Spread Operator (`...`)?

The spread operator (`...`) is used to **expand** an array or object into individual elements. It is super handy when copying, merging, or passing data around.

### 🔹 With Arrays

```js
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log(moreNums); // [1, 2, 3, 4, 5]
```

### 🔹 Copying an Array

```js
const original = [10, 20, 30];
const copy = [...original];
copy.push(40);
console.log(original); // [10, 20, 30] — not affected
```

### 🔹 With Objects

```js
const user = { name: "Sakib", age: 22 };
const updatedUser = { ...user, city: "Dhaka" };
console.log(updatedUser); // { name: "Sakib", age: 22, city: "Dhaka" }
```

### 🔹 In Function Arguments

```js
function add(a, b, c) {
  return a + b + c;
}
const values = [1, 2, 3];
console.log(add(...values)); // 6
```

---

## 3. What is the difference between `map()`, `filter()`, and `forEach()`?

All three loop through arrays but they serve different purposes.

### 🔹 `map()`
`map()` loops through an array and **returns a new array** with transformed values. The original array is not changed.

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

Use `map()` when you want to **transform** each item.

---

### 🔹 `filter()`
`filter()` loops through an array and **returns a new array** with only the items that pass a condition.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

Use `filter()` when you want to **keep some items and remove others**.

---

### 🔹 `forEach()`
`forEach()` loops through an array and **does not return anything**. It is used for side effects like logging, updating the DOM, etc.

```js
const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => {
  console.log(fruit);
});
// apple
// banana
// mango
```

Use `forEach()` when you just want to **do something** with each item without needing a new array back.

---

### Quick Comparison

| Method | Returns New Array | Use Case |
|---|---|---|
| `map()` | ✅ Yes | Transform each item |
| `filter()` | ✅ Yes | Keep items matching condition |
| `forEach()` | ❌ No | Side effects only |

---

## 4. What is an Arrow Function?

An arrow function is a shorter and cleaner way to write functions in JavaScript introduced in ES6.

### 🔹 Regular Function vs Arrow Function

```js
// Regular function
function greet(name) {
  return "Hello " + name;
}

// Arrow function
const greet = (name) => "Hello " + name;
```

If there is only **one parameter**, you can skip the parentheses:

```js
const double = num => num * 2;
console.log(double(5)); // 10
```

If the function body has **more than one line**, you need `{}` and `return`:

```js
const add = (a, b) => {
  const result = a + b;
  return result;
};
```

### 🔹 One important difference
Arrow functions do **not have their own `this`**. They take `this` from the surrounding scope. This is very useful inside callbacks and array methods.

```js
const obj = {
  name: "Sakib",
  greet: function() {
    setTimeout(() => {
      console.log("Hello " + this.name); // works fine
    }, 1000);
  }
};
obj.greet(); // Hello Sakib
```

---

## 5. What are Template Literals?

Template literals are a modern way to write strings in JavaScript using **backticks** (`` ` ``) instead of quotes. They make it easy to embed variables and expressions directly inside strings.

### 🔹 Old way vs Template Literals

```js
// Old way
const name = "Sakib";
console.log("Hello, " + name + "!");

// Template literal
console.log(`Hello, ${name}!`);
```

### 🔹 Multi-line Strings

With regular strings, multi-line text needed `\n`. With template literals, just press Enter.

```js
const message = `Hello,
Welcome to JavaScript.
Have a great day!`;
console.log(message);
```

### 🔹 Expressions Inside

You can put any JavaScript expression inside `${}`:

```js
const a = 10;
const b = 20;
console.log(`Sum is: ${a + b}`); // Sum is: 30
console.log(`Is even: ${a % 2 === 0}`); // Is even: true
```

### 🔹 With Functions

```js
const name = "Fahim";
const greet = (n) => `Hi ${n}!`;
console.log(`Message: ${greet(name)}`); // Message: Hi Fahim!
```

Template literals make code much cleaner and easier to read, especially when building dynamic strings.