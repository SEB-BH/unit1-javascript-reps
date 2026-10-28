<h1>
  <span class="headline">Intro to JavaScript Arrays</span>
  <span class="subhead">Setup</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to create a practice project and confirm that JavaScript is running.

## Create the project

Use **Git Bash on Windows** or **Terminal on macOS**. These commands work in both.

```bash
mkdir -p ~/code/ga/lectures
cd ~/code/ga/lectures
mkdir intro-to-javascript-arrays
cd intro-to-javascript-arrays
mkdir js
touch index.html js/app.js
code .
```

If this project folder already exists, open it instead of creating it again. If `code .` does not work, open VS Code and choose **File → Open Folder**.

## Connect JavaScript to the page

Add this complete HTML to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Arrays Practice</title>
    <script defer src="./js/app.js"></script>
  </head>
  <body>
    <h1>JavaScript Arrays Practice</h1>
    <p>Open the browser console to see the output.</p>
  </body>
</html>
```

The `script` line connects the HTML file to our JavaScript file. `defer` tells the browser to run the script after reading the HTML.

In `js/app.js`, add:

```js
console.log('Arrays practice is connected.');
```

## Confirm that it works

1. Save both files.
2. Open `index.html` in your browser. You can use Live Server if it is already installed, or open the file directly.
3. Open Developer Tools and choose **Console**. In Chrome, use `Ctrl + Shift + J` on Windows or `Command + Option + J` on macOS.
4. Confirm that `Arrays practice is connected.` appears.

If it does not appear, check the filename and the script's `src`. `js/app.js` means a file named `app.js` inside a folder named `js`.

## Keep each topic in its own file

Each page tells you which JavaScript file to create. For example, for Fundamentals:

1. Create `js/fundamentals.js` in VS Code.
2. **Replace** the existing script line with:

   ```html
   <script defer src="./js/fundamentals.js"></script>
   ```

3. Keep one script line in the HTML. Save, refresh the browser, and check the console.

This lets us reuse clear variable names in different topics without declaring the same `const` twice in one program.

Within a topic, add the code blocks from top to bottom unless a step tells you to replace code. A `text` block shows output; do not copy it into JavaScript. Comments beginning with `//` explain the code.

If Node.js is already installed, you can also run a topic file from the project folder:

```bash
node js/fundamentals.js
```

Use the same method as your instructor. You do not need to install Node.js for this lesson.

## 🎓 You Do

Change the message in `js/app.js` to `Ready to learn arrays.` Save and refresh. Confirm that the new message appears in the console.

---

[Module contents](../README.md) · [Next: Concepts](../concepts/README.md)
