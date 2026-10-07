# An Introduction to JS

- The programs in JS are called SCRIPTS

1. Why it is called JS?
   - When it was created initially had another name: “LiveScript”.
   - As it evolved, JavaScript became a fully independent language with its own specification called ECMAScript,

2. Js not only execute in Browser, but Server as well
   - V8, spidermonkey, chakra, squirrelfish
   - How does engine works? (Basic overview)
     1. The engine (embedded if it’s a browser) reads (“parses”) the script.
     2. Then it converts (“compiles”) the script to machine code.
     3. And then the machine code runs, pretty fast.
   
   - Engine applies optimizations at each step of the process. watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.

3. Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.
4. In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.
   1. Add HTML to the page
   2. React to user actions
   3. Send reqs over the network to remote servers, download and upload files.
   4. Remember the data on the client-side (“local storage”).
   5. Get and set cookies, ask questions to the visitor, show messages.

5. JavaScript can be used to create servers, mobile applications, etc
   
6. There are many languages that get “transpiled” to JavaScript and provide certain features. 
   1. Typescript
   2. Coffescript
   3. Dart
   4. Brython

