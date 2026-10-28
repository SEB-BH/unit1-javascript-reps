<h1>
  <span class="headline">Intro to JavaScript Arrays</span>
  <span class="subhead">Instructor Guide</span>
</h1>

## Teaching goal

Students should leave able to explain a list, trace an index lookup, and combine basic array operations to solve a small problem. The module assumes arrays are completely new. Familiar syntax from earlier lessons is reviewed when it is used.

Use the editor and console for the codealong. The booking and inspection examples teach reusable strategies without announcing future assignments.

## Prerequisites

Students should have met variable declarations, strings, numbers, booleans, comparisons, `if`, basic loops, and simple functions. They do not need objects, DOM methods, events, iterator methods beyond those taught here, or HTML interface work.

If functions are still unfamiliar, pause at `forEach()` and review a simple function call before passing a function as a value.

## Pacing

The main sequence has approximately **295 minutes of content and practice**. Allow extra time for breaks and questions. It fits one full teaching day or two sessions of about 2½ hours. Optional extensions add approximately 60 minutes.

| Session | Content | Suggested time |
| --- | --- | --- |
| First | Setup through Using forEach() | 150 minutes |
| Second | Using Indexes Across Arrays through the final practice | 145 minutes |
| Optional follow-up | at(), front-of-array methods, more forEach(), nested copying | 60 minutes |

The estimates include short You Do tasks. Spend the final 40 minutes on the combined practice. If time is short, carry the second session forward; keep the index-tracing work and the independent practice.

## A repeatable teaching routine

1. Give a concrete goal in one sentence.
2. Ask learners to predict a value before running the code.
3. Type a few lines and run them.
4. Trace one lookup or iteration aloud.
5. Change one input and predict again.
6. Let learners complete the short task before showing the answer.

Use “value,” “index,” and “element” consistently. Avoid introducing several names for the same idea at once.

## Checks before moving on

| Point in the lesson | Evidence of understanding |
| --- | --- |
| After Concepts | A student can name one array and one of its elements |
| After Reading | A student can distinguish an index, a value, and a length |
| After Updating | A student can explain mutation versus reassignment |
| After Checking for Values | A student can distinguish `[]`, `['']`, and a missing index |
| After Loops | A student can trace indexes `0`, `1`, `2`, then explain why the loop stops |
| After forEach() | A student can identify the callback's value and index parameters |
| After Using Indexes Across Arrays | A student can trace the two lookups when a stored number becomes an index |
| After Nested Arrays | A student can read an inner array first, then a value inside it |
| After Application State | A student can protect a booking, display it, and reset with a copy |

If the value/index distinction is uncertain, return to a three-row table before adding more syntax.

## Support the difficult transitions

**Starting at zero:** label a list's everyday positions and JavaScript indexes separately. Explain `length - 1` using a concrete list. Students do not need memory-layout explanations.

**Callbacks:** call the named function once yourself, then pass it to `forEach()`. Only after that, write the anonymous arrow form. Read the closing `});` aloud.

**Two arrays:** use the attendance table to show why the same index connects two values. Remind learners that aligned arrays must stay in the same order. They will meet objects later.

**Nested lookup:** expand an expression into named intermediate values before combining it. For example, read `group[1]`, log its numeric value, then use that value to read the statuses array.

**Comparisons:** use paired equality checks joined by `&&`. Include all-empty and mismatching examples. A group of equal empty strings must not count as recorded matching statuses.

**State:** ask learners to identify the meaning of each position and each placeholder before updating data. Fixed appointment positions keep their length and order. Adding or removing elements changes that model.

**Saved results:** strings and booleans read from an array describe the moment the code ran. After changing the array, learners must calculate those results again. The nested-array tasks explicitly ask them to change starting data and rerun the whole file.

## Important corrections from the earlier version

- Replacing a string element in a spread or `slice()` copy does not replace the original array's element. The optional shallow-copy example now uses shared inner arrays to demonstrate the actual issue.
- Reading a callback-local `let` variable from outside that scope raises a `ReferenceError`. It does not simply produce `undefined`.
- A running total is declared before the callback. A variable declared inside the callback starts fresh on each call.
- `push()` and `unshift()` return the new length. `pop()` and `shift()` return the removed value.
- The anonymous `function (...) { ... }` used inside a method call is a function expression.
- `forEach()` does not make a new array, and a callback's `return` does not stop the whole iteration.

## Coverage retained and added

| Topic | Location |
| --- | --- |
| Creation, empty arrays, mixed types, naming | Concepts; Creating Arrays |
| Indexed access, length, last item | Reading Values and Indexes |
| Mutation, const, push(), pop() | Updating Arrays |
| for and for...of | Looping Through Arrays |
| break and continue | Finding Matches and Controlling Loops |
| Callbacks, anonymous functions, index parameter | Using forEach() |
| join() | Turning an Array into Text |
| Spread, slice(), shared references | Copying Arrays |
| at(), shift(), unshift() | Optional extensions |
| Reusable callbacks, scope, totals, returns | More Practice with forEach() |
| Shallow/deep copies, JSON technique, structuredClone() | Copying Nested Arrays |
| includes(), negation, duplicate checks | Checking for Values |
| Matching positions across collections | Using Indexes Across Arrays |
| Random selection | Selecting a Random Item |
| Nested arrays and grouped index comparisons | Arrays Inside Arrays |
| Fixed positions, availability, display, reset | Arrays as Application State |
| Independent combined problem solving | Practice: A Workshop Booking Tool |

## Answers and runnable examples

[Practice Answers](./practice-answers.md) contains suggested answers to the short tasks and all four final practice parts. Accept other clear solutions that meet the requirements.

The `examples` folder contains runnable copies of the worked examples. The `solutions` folder contains one JavaScript file per code answer. Run files individually from the module folder, for example:

```bash
node internal-resources/examples/reading.js
node internal-resources/solutions/14-booking-tool.js
```

The student's manually created practice project remains separate. The Setup page explains how to switch one active script at a time so copied declarations do not collide.

## Media and navigation

The original array-syntax and forEach-syntax PNGs remain in their original folders and are used in the corresponding pages. Original EPS artwork, logos, and asset notes are also retained.

`internal-resources/data/config.json` keeps the original configuration schema, organisation, repository details, course records, and publishing settings. Its content entries follow the revised order, with optional pages identified as extension content. Both landing pages match the module README.

Legacy generated binary navigation caches are omitted so they cannot supply an outdated lesson order. If your publishing workflow uses those caches, regenerate them from `config.json` with that workflow.

[Back to module contents](../README.md)
