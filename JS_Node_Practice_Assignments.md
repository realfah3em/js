# JavaScript & Node.js Practice Assignments

Based strictly on the topics covered in your coursework (days 05–07): variables & data types, functions, scope & closures, objects, arrays, array methods, destructuring, Map/Set, DOM basics, and Node.js modules/fs. HTML, CSS, and Tailwind are excluded.

**How to use this:** Do each Easy assignment before Medium, and Medium before Complex, for a topic. Don't look at hints unless you're stuck. Write the code yourself — no solutions are provided here.

---

## Topic 1: Variables, Data Types & Basic Functions

### Assignment 1.1
**Difficulty:** Easy
**Topics Practiced:** `let`, `const`, template literals, `typeof`, primitive data types
**Problem Statement:** Write a script that declares one variable of each type: string, number, boolean, `undefined`, `null`, and `bigint`. Print each variable's value and its type using template literals.
**Requirements:**
- Use `const` where the value never changes, `let` where it does.
- Use backtick template literals for every `console.log`, not string concatenation.
- Print in the format: `name = value, type = typeType`.
**Expected Input/Output:**
```
firstName = Alex, type = string
age = 25, type = number
```
**Hints:**
- `typeof` returns a string.
- Remember `typeof null` gives a surprising result — check it yourself.

### Assignment 1.2
**Difficulty:** Medium
**Topics Practiced:** data types, functions (declaration, expression, arrow), function calls
**Problem Statement:** Write a function `describeValue` that accepts a single value and returns a string describing its type and value. Then write three more versions of the same function: one as a function expression, one as an arrow function, and one as a named function expression. Call all four with different data types (including `NaN` and `Infinity`) and log the results.
**Requirements:**
- All four versions must produce identical output for the same input.
- Test with at least: a string, a number, `NaN`, `Infinity`, a boolean, `undefined`, and `null`.
**Expected Input/Output:**
```
describeValue(NaN) → "value = NaN, type = number"
describeValue("hi") → "value = hi, type = string"
```
**Hints:**
- `NaN` and `Infinity` are technically of type `number`.
- Function expressions and arrow functions are assigned to variables.

### Assignment 1.3
**Difficulty:** Complex
**Topics Practiced:** data types, template literals, multiple function styles, basic validation
**Problem Statement:** Build a small "type checker" tool. Write a function `validateInput(value, expectedType)` that checks whether a given value matches an expected type (passed as a string like `"string"`, `"number"`, `"boolean"`). It should return a clear pass/fail message. Then write a second function that runs a batch of test cases (an array of `{value, expectedType}` pairs) through `validateInput` and prints a summary of how many passed and failed.
**Requirements:**
- Use at least one function declaration and one arrow function in the solution.
- Handle `null` and `undefined` as valid inputs to check, not just skip them.
- Print a final summary line like `3 passed, 1 failed`.
**Expected Input/Output:**
```
Input: 42, expected: "number" → PASS
Input: "42", expected: "number" → FAIL
Summary: 1 passed, 1 failed
```
**Hints:**
- You will need `typeof` inside `validateInput`.
- Loop through your test case array with a function you already know from this topic.

---

## Topic 2: Function Types, Parameters & Higher-Order Functions

### Assignment 2.1
**Difficulty:** Easy
**Topics Practiced:** default parameters, rest parameters, `arguments` object
**Problem Statement:** Write a function `calculateSimpleInterest(principal, years, rate = 7.5)` that computes simple interest, using a default rate when none is given. Separately, write a function `sumAll(...numbers)` using rest parameters that adds up any number of arguments passed to it.
**Requirements:**
- Call `calculateSimpleInterest` both with and without a rate to show the default working.
- Call `sumAll` with 2, 5, and 0 arguments.
**Expected Input/Output:**
```
calculateSimpleInterest(1000, 2) → uses rate 7.5
calculateSimpleInterest(1000, 2, 10) → uses rate 10
sumAll(1, 2, 3, 4) → 10
sumAll() → 0
```
**Hints:**
- Rest parameters collect the remaining arguments into a real array.
- A default parameter is only used when the argument is `undefined`.

### Assignment 2.2
**Difficulty:** Medium
**Topics Practiced:** higher-order functions, function references, return values
**Problem Statement:** Write four small math functions: `add`, `subtract`, `multiply`, `divide` (each takes two numbers). Then write a higher-order function `calculate(n1, n2, operationFn)` that accepts two numbers and one of these functions as a reference, and returns the result of calling it.
**Requirements:**
- `calculate` must not know in advance which operation it will run — it just calls whatever function reference it receives.
- Handle divide-by-zero by returning a message instead of `Infinity`.
- Call `calculate` with all four operations.
**Expected Input/Output:**
```
calculate(10, 5, add) → 15
calculate(10, 0, divide) → "Cannot divide by zero"
```
**Hints:**
- Pass the function name without `()` to pass a reference, not call it.
- Think about what `calculate` should `return`, not just `console.log`.

### Assignment 2.3
**Difficulty:** Complex
**Topics Practiced:** higher-order functions, rest parameters, default parameters, arrow functions, function composition
**Problem Statement:** Build a mini "calculator pipeline". Write a function `applyOperations(startValue, ...operations)` where `operations` is a list of function references (e.g. `double`, `square`, `addTen`). The function should apply each operation to the value in order, passing the result of one into the next, and return the final value. Each individual operation function should be written as an arrow function.
**Requirements:**
- Write at least 4 different single-purpose operation functions.
- `applyOperations` must work with any number of operations, including zero (returns `startValue` unchanged).
- Print the running result after each step (not just the final one).
**Expected Input/Output:**
```
applyOperations(5, double, addTen)
→ Step 1: 10
→ Step 2: 20
→ Final result: 20
```
**Hints:**
- You already know how to loop over a rest-parameter array from Topic 2.1.
- This is similar to chaining, but you are writing the chaining logic yourself.

---

## Topic 3: Scope, Closures & Pure Functions

### Assignment 3.1
**Difficulty:** Easy
**Topics Practiced:** global scope, local scope, function scope
**Problem Statement:** Write a global variable `storeName`. Then write a function that declares a local variable `discount` inside it and logs both variables from inside the function. Outside the function, try to log `discount` and explain in a comment why it fails.
**Requirements:**
- Use `let` or `const` for both variables (not `var`).
- Add a comment explaining the scoping rule you observed.
**Expected Input/Output:**
```
Inside function: storeName = MyStore, discount = 10
Outside function: storeName = MyStore
(discount is not accessible here — add comment why)
```
**Hints:**
- A variable declared with `const`/`let` inside a function only exists inside that function.
- Try running the "outside" log and read the actual error message.

### Assignment 3.2
**Difficulty:** Medium
**Topics Practiced:** nested/inner functions, closures
**Problem Statement:** Write an outer function `createCounter()` that has a local variable `count = 0` and returns an inner function. Every time the returned inner function is called, it should increase `count` by 1 and return the new value — without `count` ever being reset.
**Requirements:**
- `count` must not be a global variable.
- Create two separate counters and prove they track their counts independently.
**Expected Input/Output:**
```
const counter1 = createCounter()
counter1() → 1
counter1() → 2
const counter2 = createCounter()
counter2() → 1
```
**Hints:**
- The inner function "remembers" the outer function's variables — that's the whole point of a closure.
- Each call to `createCounter()` creates a brand-new `count`.

### Assignment 3.3
**Difficulty:** Complex
**Topics Practiced:** closures, pure vs impure functions, higher-order functions
**Problem Statement:** Build a "bank account" using closures (no classes, no objects with methods — just functions). Write a function `createAccount(startingBalance)` that returns two inner functions: one to deposit money and one to withdraw money, both updating a private balance that only they can access. Then separately, write one **pure** function `calculateInterest(balance, rate)` that always returns the same output for the same input, and one clearly **impure** function that depends on something outside its parameters (e.g. the current date or a global variable).
**Requirements:**
- The balance must not be readable or writable from outside the returned functions.
- Withdraw must refuse to go below zero and return a clear message.
- Add a comment identifying which of your two extra functions is pure and which is impure, and why.
**Expected Input/Output:**
```
const account = createAccount(100)
account.deposit(50) → balance = 150
account.withdraw(200) → "Insufficient funds"
```
**Hints:**
- Return an object containing your two inner functions so you can call them by name.
- A pure function's only inputs are its parameters — nothing from outside.

---

## Topic 4: Objects & `this`

### Assignment 4.1
**Difficulty:** Easy
**Topics Practiced:** object literals, dot notation, bracket notation, adding/updating properties
**Problem Statement:** Create an object `book` with properties `title`, `author`, and `price` using an object literal. Read each property once using dot notation and once using bracket notation. Then add a new property `inStock` and update the `price`.
**Requirements:**
- Use bracket notation at least once with a property name stored in a variable.
- Log the full object before and after your changes.
**Expected Input/Output:**
```
Before: {title: "1984", author: "Orwell", price: 300}
After:  {title: "1984", author: "Orwell", price: 350, inStock: true}
```
**Hints:**
- Bracket notation is required when the property name is dynamic or has spaces.

### Assignment 4.2
**Difficulty:** Medium
**Topics Practiced:** constructor functions, `this`, prototype methods, object mutability
**Problem Statement:** Write a constructor function `Person(name, age)` that sets `name` and `age` using `this`. Add a method `canVote` to `Person.prototype` that returns whether the person is 18 or older. Create two `Person` objects and call `canVote` on both. Then show that changing one object's property does not affect the other, even though they share the same prototype method.
**Requirements:**
- `canVote` must be defined on the prototype, not inside the constructor.
- Create at least two `Person` instances.
**Expected Input/Output:**
```
p1 = Person("Asha", 20) → p1.canVote() → true
p2 = Person("Ravi", 15) → p2.canVote() → false
```
**Hints:**
- `this` inside a constructor function refers to the new object being created.
- Prototype methods are shared across all instances — that's why you only define `canVote` once.

### Assignment 4.3
**Difficulty:** Complex
**Topics Practiced:** constructor functions, prototypes, `this`, object mutability, const objects
**Problem Statement:** Build a small "Library" system. Write a constructor function `Book(title, author, available)`. Add prototype methods `borrow()` (sets `available` to `false`, or logs a message if already borrowed) and `returnBook()` (sets it back to `true`). Store several `Book` objects inside a `const` array called `library`. Prove that even though `library` is declared with `const`, you can still modify the books inside it and add new books to the array.
**Requirements:**
- At least 3 books in the `library` array.
- Borrow the same book twice in a row and show the second attempt is handled properly.
- Add a comment explaining why `const library` still allows changes to its contents.
**Expected Input/Output:**
```
library[0].borrow() → "1984 borrowed"
library[0].borrow() → "1984 is already borrowed"
library[0].returnBook() → "1984 returned"
```
**Hints:**
- `const` protects the variable binding, not the object's internal contents.
- You already used `.push()` on arrays in earlier coursework — the array itself is just another object.

---

## Topic 5: Arrays — Manipulation, Search & Loops

### Assignment 5.1
**Difficulty:** Easy
**Topics Practiced:** array creation, `push`, `pop`, `splice`, `indexOf`, `includes`
**Problem Statement:** Create an array of 5 numbers. Add a number to the end, remove the last number, insert a number at index 2 using `splice`, and check whether a specific value exists in the array.
**Requirements:**
- Use `push`, `pop`, `splice`, and `includes` — one each.
- Print the array after every operation.
**Expected Input/Output:**
```
Start:  [10, 20, 30, 40, 50]
After push(60): [10, 20, 30, 40, 50, 60]
After pop(): [10, 20, 30, 40, 50]
After splice(2, 0, 25): [10, 20, 25, 30, 40, 50]
includes(25) → true
```
**Hints:**
- `splice`'s first two arguments are start position and how many items to remove.

### Assignment 5.2
**Difficulty:** Medium
**Topics Practiced:** `find`, `findIndex`, `for`, `for...of`, `for...in`, `forEach`
**Problem Statement:** Given an array of student objects (each with `name` and `marks`), write four separate pieces of code that all achieve the same goal — printing every student's name — using: a traditional `for` loop, a `for...of` loop, a `for...in` loop, and `.forEach()`. Then use `find` to get the first student who scored above 80, and `findIndex` to get their position in the array.
**Requirements:**
- At least 5 students in your array.
- All four loop styles must produce the same printed names.
**Expected Input/Output:**
```
Names (all 4 loops): Asha, Ravi, Meena, John, Priya
find(marks > 80) → {name: "Meena", marks: 85}
findIndex(marks > 80) → 2
```
**Hints:**
- `for...in` gives you index keys, not values directly.
- `find` stops and returns as soon as it finds a match; `findIndex` returns its position.

### Assignment 5.3
**Difficulty:** Complex
**Topics Practiced:** array manipulation, search methods, loops, objects
**Problem Statement:** Build a simple "Todo List" manager using a plain array of objects (`{id, task, done}`). Write functions to: add a task, mark a task as done (find it by `id`), delete a task (by `id`), and print a formatted list showing only pending tasks. Use `splice` for deletion and `findIndex` to locate tasks.
**Requirements:**
- Each new task needs a unique `id` (you decide how to generate it).
- `markDone` and `deleteTask` should handle the case where the `id` doesn't exist, without crashing.
- The "print pending" function must use a loop, not just log the whole array.
**Expected Input/Output:**
```
addTask("Buy milk") → added with id 1
markDone(1) → task 1 marked done
addTask("Clean room") → added with id 2
printPending() → "Clean room"
```
**Hints:**
- Reuse your `findIndex` skill from 5.2 to locate a task by `id` before modifying or removing it.

---

## Topic 6: Functional Array Methods, Destructuring, Map & Set

### Assignment 6.1
**Difficulty:** Easy
**Topics Practiced:** `map`, `filter`, `reduce`, array destructuring, object destructuring
**Problem Statement:** Given an array of numbers, use `map` to create a new array of their squares, `filter` to get only the even numbers, and `reduce` to get their total sum. Then take an array `[10, 20, 30]` and destructure the first two values into variables, and destructure `name` and `age` out of a small object.
**Requirements:**
- Do not use a manual loop for `map`/`filter`/`reduce` — use the built-in methods.
- Destructuring must use `[]` for the array and `{}` for the object, not manual indexing.
**Expected Input/Output:**
```
numbers = [1,2,3,4,5]
squares → [1,4,9,16,25]
evens → [2,4]
sum → 15
const [a, b] = [10, 20, 30] → a = 10, b = 20
```
**Hints:**
- `reduce` needs a starting accumulator value (usually `0`).

### Assignment 6.2
**Difficulty:** Medium
**Topics Practiced:** `map`/`filter` chaining, object array processing, `Map`, `Set`
**Problem Statement:** Given an array of car objects (`{company, model, price}`), chain `filter` and `map` in one line to get just the model names of all cars priced under 30000. Separately, create a `Map` to store product names as keys and prices as values (add, update, delete, and iterate over it). Then take an array of names with duplicates and use a `Set` to get only the unique names.
**Requirements:**
- The filter+map must be chained (`array.filter(...).map(...)`), not two separate statements.
- Iterate the `Map` using a loop that destructures each `[key, value]` pair.
**Expected Input/Output:**
```
affordableModels → ["Swift", "Alto"]
productMap: {"Pen" → 10, "Book" → 50}
uniqueNames → ["Asha", "Ravi", "Meena"]
```
**Hints:**
- Converting an array to a `Set` and back to an array is the standard trick for removing duplicates.

### Assignment 6.3
**Difficulty:** Complex
**Topics Practiced:** `map`, `filter`, `reduce`, chaining, destructuring, `Map`
**Problem Statement:** Build a "Sales Report" tool. Given an array of order objects (`{customer, item, quantity, price}`), write a function that: (1) filters out cancelled orders (assume a `cancelled: true/false` field), (2) maps each remaining order to its total cost (`quantity * price`), (3) reduces those totals into one grand total. Separately, build a `Map` where each key is a customer name and the value is their total spend across all their orders, using object destructuring inside your loop to pull out `{customer, quantity, price}` cleanly.
**Requirements:**
- At least 6 orders, with at least 2 cancelled and at least 2 customers who appear more than once.
- The grand total calculation must be a single chained `filter → map → reduce`.
- Print the final `Map` showing each customer's total spend.
**Expected Input/Output:**
```
grandTotal → 4200
customerTotals: {"Asha" → 1500, "Ravi" → 2700}
```
**Hints:**
- Destructure fields right in your loop or callback parameter: `({customer, quantity, price}) => ...`
- Check if a customer already exists in the `Map` before deciding to add or update.

---

## Topic 7: DOM Manipulation & Events

*(These need an actual `.html` file with a `<script>` tag, like your coursework files — test them by opening the file in a browser.)*

### Assignment 7.1
**Difficulty:** Easy
**Topics Practiced:** `getElementById`, `querySelector`, `innerHTML`, inline style changes
**Problem Statement:** Create an HTML page with a heading, a paragraph, and a button. Using JavaScript, select each element (try one with `getElementById` and another with `querySelector`), change the paragraph's text using `innerHTML`, and change the heading's color using its `style` property.
**Requirements:**
- Use both `getElementById` and `querySelector` at least once each.
- The style change must happen through JavaScript, not written directly in the HTML/CSS.
**Expected Input/Output:**
```
Before: <p>Old text</p>
After running script: <p>New text</p>, heading turns blue
```
**Hints:**
- `element.style.color = "blue"` sets a CSS property from JS.

### Assignment 7.2
**Difficulty:** Medium
**Topics Practiced:** `addEventListener`, `innerHTML`, form input values
**Problem Statement:** Create a page with a text input, a button, and an empty `<div>`. When the button is clicked, read the value the user typed into the input and display a greeting message (e.g. "Hello, <name>!") inside the `<div>`.
**Requirements:**
- Use `addEventListener('click', ...)` on the button — not an inline `onclick`.
- Handle the case where the input is empty by showing a different message.
**Expected Input/Output:**
```
User types "Asha", clicks button → div shows "Hello, Asha!"
User leaves input empty, clicks button → div shows "Please enter a name"
```
**Hints:**
- The input's current text is available on its `.value` property.

### Assignment 7.3
**Difficulty:** Complex
**Topics Practiced:** DOM manipulation, events, array methods, objects, closures
**Problem Statement:** Build a small "Todo List" web page (this connects back to Topic 5.3, now with a real UI). You need: a text input, an "Add" button, and a `<ul>` to display tasks. Clicking "Add" should read the input, push a new task object into an array, and re-render the full list inside the `<ul>` using `map`/`forEach` to build the `innerHTML`. Each task in the list should have its own "Done" and "Delete" buttons that work correctly for that specific task.
**Requirements:**
- Keep your task data in a JavaScript array of objects — the DOM should always be a reflection of that array, not edited directly.
- Clicking "Done" should visually mark the task (e.g. strike-through) without deleting it.
- Clicking "Delete" should remove only that task, using its `id`, and re-render.
**Expected Input/Output:**
```
Type "Buy milk", click Add → list shows "Buy milk" with Done/Delete buttons
Click Done on it → text shows with strike-through
Click Delete on it → item disappears from the list
```
**Hints:**
- Re-run your "render" function every time the array changes, instead of trying to manually patch the DOM.
- Give each task button a way to know which task `id` it belongs to (e.g. store it as a data attribute or use closures when creating the buttons).

---

## Topic 8: Node.js — Modules & the File System

*(Run these with `node filename.js` from a terminal, not in a browser.)*

### Assignment 8.1
**Difficulty:** Easy
**Topics Practiced:** CommonJS modules, `module.exports`, `require`
**Problem Statement:** Create a file `mathUtils.js` that exports two functions, `add` and `multiply`. Create a second file `app.js` that requires `mathUtils.js` and calls both functions, logging the results.
**Requirements:**
- `mathUtils.js` must use `module.exports` to expose an object with both functions.
- `app.js` must use `require('./mathUtils')` to import them.
**Expected Input/Output:**
```
node app.js
→ add(3, 4) = 7
→ multiply(3, 4) = 12
```
**Hints:**
- `module.exports = { add, multiply }` is a shorthand for exporting an object.

### Assignment 8.2
**Difficulty:** Medium
**Topics Practiced:** modules, `__dirname`/`__filename`, multiple exported members, objects
**Problem Statement:** Build a small `studentUtils.js` module that exports: a function `createStudent(name, marks)` that returns a student object, and a function `isPassing(student)` that returns true if marks are 40 or above. In `app.js`, `require` this module, create 3 students, and log `__filename` and `__dirname` from inside `app.js` to see what they print on your machine.
**Requirements:**
- Use array methods from Topic 5/6 (e.g. `filter`) in `app.js` to get the list of passing students.
- Print `__filename` and `__dirname` and add a one-line comment explaining what each one shows you.
**Expected Input/Output:**
```
passingStudents → [{name: "Asha", marks: 88}, {name: "Ravi", marks: 45}]
__filename → /your/full/path/app.js
```
**Hints:**
- These two variables are automatically available in every Node file — no `require` needed.

### Assignment 8.3
**Difficulty:** Complex
**Topics Practiced:** modules, `fs` module, array methods, objects, JSON
**Problem Statement:** Create a `students.json` file containing an array of at least 6 student objects (`name`, `marks`). Write a Node script that: reads the file using the `fs` module, parses the JSON into a JavaScript array, uses `filter`/`map`/`reduce` (from Topic 6) to calculate the class average and get the list of students who passed, and then writes a new file `report.json` containing a summary object (`{average, passCount, failCount, passingStudents}`).
**Requirements:**
- Use `fs.readFileSync` and `fs.writeFileSync` (or their async versions, if you're comfortable with callbacks).
- The written `report.json` must be valid, readable JSON (`JSON.stringify` with formatting).
- Put the file-reading logic in one module and the calculation logic in a separate module, and `require` both into your main script.
**Expected Input/Output:**
```
node app.js
→ report.json created with:
{
  "average": 67.5,
  "passCount": 4,
  "failCount": 2,
  "passingStudents": ["Asha", "Priya", "Ravi", "John"]
}
```
**Hints:**
- `fs.readFileSync(path, 'utf8')` gives you a string — you'll need `JSON.parse` on it.
- `JSON.stringify(data, null, 2)` produces nicely indented output for the report file.

---

## Mastery Challenge: Student Record System

This combines almost everything above into one project, split into two connected parts.

### Part A — Node.js Data Layer
**Difficulty:** Complex
**Topics Practiced:** modules, `fs`, objects, array methods (`map`/`filter`/`reduce`), destructuring, closures
**Problem Statement:** Build a Node.js "data layer" with a module `studentStore.js` that manages an in-memory array of student objects (`{id, name, marks, attendance}`) using closures so the array can't be accessed directly from outside the module. Expose functions: `addStudent`, `removeStudent(id)`, `updateMarks(id, newMarks)`, `getAllStudents`, `getTopScorers(minMarks)`, and `getClassStats()` (returns average marks and average attendance using `reduce`). On startup, load initial data from a `students.json` file using `fs`, and add a function `saveToFile()` that writes the current state back to disk.
**Requirements:**
- The raw array must be private (a closure), only reachable through the exported functions.
- `getClassStats` must use `reduce`, not a manual loop with a counter.
- At least one function must use object destructuring in its parameters.
**Hints:**
- Structure this like your bank account closure from Topic 3.3, but for a whole collection instead of one balance.

### Part B — Browser Dashboard
**Difficulty:** Complex
**Topics Practiced:** DOM manipulation, events, array methods, objects, destructuring
**Problem Statement:** Build an HTML page that acts as a dashboard for the same kind of student data (you can hardcode a starting array in the browser script, since `fs`/`require` don't work in a browser). Display all students in a table built dynamically with `map`/`forEach`. Add: a search box that filters students by name as you type, a dropdown/button to sort by marks, and a form to add a new student that re-renders the table. Show a summary line at the top (using `reduce`) with the class average marks.
**Requirements:**
- The table must always be re-rendered from your JavaScript array — never edited directly through the DOM.
- Filtering and sorting must not mutate your original data array (create new arrays instead).
- Use `addEventListener` for every interaction — no inline `onclick`/`oninput` in the HTML.
**Hints:**
- Keep one "render" function that takes an array and rebuilds the table — call it after every change, just like your Topic 7.3 todo list.
- `.slice()` before `.sort()` if you don't want to sort the original array in place.

**Done both parts?** You've now practiced every non-HTML/CSS topic in your coursework, applied together the way real projects use them.
