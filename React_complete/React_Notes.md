# React Fundamentals Study Guide

## Why Use React?
* **JavaScript Library:** 
-React is a specialized library (not a full framework) for building User Interfaces (UI).
* **SPA** => Single page Application
* **Component-Based** 
- It breaks the UI into small, isolated pieces called **Components**, making complex frontends easier to manage.
 **Solving Inconsistency:** 
- React uses a *Virtual DOM* to efficiently update the UI, ensuring the state of the app and the view always match.
* **Declarative:** You describe *what* you want the UI to look like, and React handles the actual updates to the browser.

---

## Core Topics to Master
1.  **JSX (JavaScript XML):** A syntax extension that allows you to write HTML-like code inside JavaScript. Syntactical Sugar
2.  **State Management:** Using the `useState` hook to handle data that changes over time (UI manipulation).
3.  **Components & Props:**
    * **Components:** function which returns jsx. Small, reusable building blocks of the UI.
    * **Props:** Short for "properties," used to pass data from a parent component to a child component. In react data flow in one direction[top to bottom]. Also a child component cannot modify the props it receives; it can only read them.
4.  **Hooks:** Special functions (like `useEffect`, `useContext`, `useRef`) that let you "hook into" React features.

---

## Advanced & Additional Topics
* **React Router:** For handling navigation and creating multiple pages in a Single Page Application (SPA).
* **Global State Management:** Tools like **Redux Toolkit** or **Context API** to share data across many components.
* **Class-Based Components:** The older way of writing React. Important for maintaining legacy codebases.
* **BaaS Apps:** Integrating React with **Backend-as-a-Service** platforms like Firebase, Appwrite, or Supabase for database and authentication.

---

## Tools & Commands
* **NPM (Node Package Manager):** Installs and manages the libraries your project needs.
* **NPX (Node Package Executor):** Runs a package directly without installing it globally on your computer.

### How to Start a Project

| Method | Command | Status |
| :--- | :--- | :--- |
| **CRA (Old)** | `npx create-react-app my-app` | **Slow.** No longer recommended by the React team. |
| **Vite (New)** | `npm create vite@latest` | **Fast.** The modern industry standard. |

**Steps for Vite:**
1.  Run `npm create vite@latest`.
2.  Select "React" and "JavaScript" or "TypeScript."
3.  `cd [your-project-name]` to go inside the folder.
4.  Run `npm install` (to download the `node_modules`).
5.  Run `npm run dev` to start the local development server.

---

## Essential Resources
* **Official Docs:** [react.dev](https://react.dev) (The best place to learn).
* **Build Tool:** [vitejs.dev](https://vitejs.dev).



# Important notes :-
- Components name must be start with capital letter
- file name also start with capital letter good partice but not necessary 
- jsx only return one element, if you want to return more than one element enclose it with div tag[also empty tag <> Elements </>]


# Understanding the Vite-React File Structure

When you build a React application using the **Vite** method, the project is structured to be lightweight and fast. Below is a breakdown of how the files work and how they link together.

---

## 1. The Root Directory
These files sit outside the `src` folder and handle the project configuration and the browser's entry point.

| File Name               | Purpose                                                                   | How it Links                                                                                                                        |
|:------------------------|:--------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------|
| **`index.html`**        | The **Entry Point**. The only HTML file the browser reads.                | Contains a `<div id="root"></div>`. It links to JavaScript via a script tag: `<script type="module" src="/src/main.jsx"></script>`. |
| **`package.json`**      | The **Manifest**. Lists metadata, dependencies (React), and scripts.      | Defines the commands you run in the terminal, like `npm run dev` to start the server.                                               |
| **`package_lock.json`** | The **Manifest**. Frozen snapshot of your project's exact dependencies.   | Ye humare project ki Dependencies ki dependencies ko store karta, Means like version of React used in this project                  |
| **`vite.config.js`**    | The **Configuration**. Tells Vite how to process React.                   | Used by the build tool to handle things like JSX transformation and hot module replacement.                                         |
| **`node_modules/`**     | The **Dependency Library**. Contains the code for all installed packages. | You never edit this; your code simply "imports" logic from here.                                                                    |

---

## 2. The `src` Folder
This is where you will spend almost all of your development time.

| File Name | Purpose | How it Links |
| :--- | :--- | :--- |
| **`main.jsx`** | The **Bridge**. Connects React to the real DOM. | It finds the `root` ID from `index.html` and uses `ReactDOM.createRoot` to render your `<App />` component. |
| **`App.jsx`** | The **Main Component**. The root of your UI tree. | It is imported by `main.jsx`. All other components you create will eventually be nested inside this file. |
| **`App.css`** | **Styles**. CSS specific to the App component. | Linked by adding `import './App.css'` at the top of `App.jsx`. |
| **`assets/`** | **Static Files**. Holds images, SVGs, or fonts. | Imported into components like variables, e.g., `import logo from './assets/react.svg'`. |

---

## The Execution Flow (Step-by-Step)

1.  **Browser** loads `index.html`.
2.  `index.html` calls **`src/main.jsx`**.
3.  **`main.jsx`** imports the **`App`** component from `App.jsx`.
4.  React takes your **`App`** code and "injects" it into the **`#root`** div in the HTML.
5.  Any change you make in `App.jsx` is instantly updated in the browser.

> **Pro-Tip:** In Vite, always use the `.jsx` extension for files that contain HTML-like code so the build tool can process it correctly!


## Virtual DOM
* virtual dom is a light weight reprentation of actual dom in memory.
* window -> document -> html -> body .....
* **How it works?**
* 1. Initial render
  2. state/props update :- We change something so react create new virtual dom
  3. Diffing :- React compare new and old virtual dom
  4. Find Minimal changes :- now react update the required changes
  5. Update real dom

## How React Virtual DOM works under the Hood

### 1. The Problem: The Real DOM is Slow
The **Real DOM (Document Object Model)** represents the user interface (UI) of your website as a tree structure. Every time you change something—like a button color or text—the browser must recalculate the layout, CSS, and repaint the screen.

When modern apps have thousands of elements, updating the Real DOM directly for every small change becomes very "expensive" in terms of performance, which can make the app feel slow or laggy.

### 2. What is the Virtual DOM?
The **Virtual DOM (VDOM)** is a lightweight copy of the Real DOM. It is a plain JavaScript object. Because it is not an actual UI element on the screen, React can create and change it very quickly without involving the browser's heavy painting processes.

### 3. The Step-by-Step Process

#### Step A: Initial Render
When your app starts, React creates a Virtual DOM tree of all your components. It then uses this tree to build the Real DOM for the first time. Now, the browser shows your app to the user.

#### Step B: State or Props Change
When a user interacts with the app (such as clicking a "Like" button), the **state** or **props** of a component change. This tells React that the UI needs an update.

#### Step C: Creating a New Virtual DOM Tree
React does not change the old Virtual DOM. Instead, it creates a **brand-new Virtual DOM tree** that represents how the UI should look after the change.

#### Step D: Diffing (Reconciliation)
React now has two trees: the **Old Virtual DOM** (before the change) and the **New Virtual DOM** (after the change). It compares them using a process called **Diffing**.

React is smart; it looks for exactly which parts are different:
* If a `<div>` turned into a `<span>`, it replaces it.
* If only the text inside a `<p>` changed, it notes that only the text needs updating.

#### Step E: Updating the Real DOM (The Patch)
Once React knows exactly what changed, it applies **only those specific changes** to the Real DOM. This is called "patching." If you changed one word in a list of 1,000 items, React will only update that one word in the browser.

### 4. Why This Improves Performance
By using the Virtual DOM, React avoids unnecessary work. Instead of the browser recalculating the entire page layout for every small click, React batches the changes and only touches the Real DOM when absolutely necessary. This results in smooth, fast user interfaces.

### 5. High-Level Flow: Render → Diff → Commit
The entire process can be summarized into three phases:
1.  **Render:** React creates the new Virtual DOM tree based on changes.
2.  **Diff:** React compares the new tree with the old one to find changes.
3.  **Commit:** React applies those minimal, specific changes to the Real DOM.





## 3.Hooks

### What are Hooks?
**Hooks** are special functions that give your components "memory". A function written as `use_functionName`. 

Usually, when a function finishes running, all its variables disappear. But React components need to remember things (like a counter value or a user's name) even after the function finishes. 
Hooks allow you to "hook" into React's internal systems to save that data. 
**You can only call Hooks at the top level of your function (not inside loops or conditions).**
```javascript
function(){
// hooks
// hooks
.
.
return(jsx)
}

```

```javascript
import React from 'react';

function BrokenCounter() {
  let count = 0; // Normal variable

  const increase = () => {
    count = count + 1;
    console.log("Current count in memory:", count); 
    // Console mein value badhegi, lekin screen pe hamesha 0 dikhega!
  };

  return (
    <div>
      <h1>Without Hooks (Broken)</h1>
      <p>Count: {count}</p> 
      <button onClick={increase}>Click Me</button>
    </div>
  );
}

export default BrokenCounter;
```

**Problem:** 
-count variable function ke andar hai. Jaise hi function khatam hota hai, variable ki memory khatam ho jati hai. Screen update nahi hoti.

**With the help of Hooks**
```javascript

import React, { useState } from 'react';

function WorkingCounter() {
  // [value, function_to_change_value] = useState(initial_value)
  const [count, setCount] = useState(0); 

  const increase = () => {
    setCount(count + 1); // React update memory AND the screen
    /* Agr ye sabhi ko ek sath lekhe tu??
    setCount(count + 1); 
    setCount(count + 1); 
    setCount(count + 1); 
    setCount(count + 1); 
    setCount(count + 1); 

    kya hoga?
    => increment srif ek ka hi hoga , becuaue useState() hamare changes ko bandle me bhajta hai[fibre], sare setcount onego me jayege so sab same count ko increment karenge , agr such me change karna ho tu 
    setCount(prevCount => prevCount + 1)  x 3
    */
  };

  return (
    <div>
      <h1>With Hooks (Working)</h1>
      <p>Count: {count}</p> 
      <button onClick={increase}>Click Me</button>
    </div>
  );
}

export default WorkingCounter;
```

## Why Do We Use Hooks?

You are correct: Hooks allow us to use state in **function components**. But here is the deeper reason **why** they were created in the first place:

### 1. No More "this" Keyword
In Class Components, you have to use `this.state` and `this.setState`. JavaScript's `this` keyword is very confusing even for experienced developers. Hooks (like `useState`) use simple variables, making the code much easier to read and write.

### 2. Less "Boilerplate" Code
Classes require a lot of extra code (constructor, super, binding methods). Hooks allow you to do the same thing with much less typing. 
* **Class Style:** 10-15 lines of code just to start a counter.
* **Hook Style:** Only 1 or 2 lines of code.

### 3. Better Logic Sharing
If you have a special logic (like tracking a user's location), it is hard to share that logic between two Class Components. With Hooks, you can create a **Custom Hook** and just "import" that logic wherever you need it.

### 4. Cleaner Lifecycle Management
In classes, related code is often split into different places (like `componentDidMount` and `componentWillUnmount`). With the `useEffect` hook, you can keep related code together in one block.

### The `useState` Hook
The most important hook is `useState`. Think of it like a **Variable + a Notification Bell**.
* **The Variable (`counter`):** This is the current value.
* **The Function (`setCounter`):** This is the only way to change the value. When you use this function, it rings a "bell" to tell React: *"Hey! The data changed. Please update the screen!"*

---
## 3. Hooks in Depth

### 1. `useState`
**The Variable + Notification Bell 🔔**
* use to manage States.

* **The Variable (`state`):** This is the current value or "snapshot."
* **The Function (`setState`):** The only way to change the value.
* `setState(state + Incremental_Value)`
* **The Bell:** When you call the function, it rings a bell to tell React: *"The data changed! Please re-draw the screen!"*
* `const [state, setState] = useState(Initial_State) `

> **Use Case:** Counters, form inputs, toggles (on/off).

---

### 2. `useEffect`
**The Smart Thermostat (The "Reaction") 🌡️**. use to run side effect{api cslling, timer, event listner etc} after rendering
```
useEffect(
(call_back) => { // runs on  every render},
[dependence_Array]
)
```
* **The Effect:** The code you want to run (the "Reaction").
* **The Dependencies `[]`:** The "Watching Eyes."
* 1. No dependencies :- runs on each rendering.
  2. empty dependencies :- runs only when reload(mount).
  3. with dependencies :- runs when perticular variable changes[Also when reload], runs the code.
* **The Logic:** You tell React: *"Watch these specific variables. If they change, run my code immediately."*

> **Use Case:** Fetching data from an API, starting a timer, or manually changing the page title.

---

### 3. `useContext`
**The Radio Tower (The "Broadcaster") 📡**

* **The Provider:** The tower broadcasting the signal (data) to the whole city (app).
* **The Hook:** The radio receiver that lets any component "tune in" to the signal without needing wires (props) from its parents.

> **Use Case:** Changing themes (Light/Dark mode), user authentication, or language settings.

---

### 4. `useRef`
**The Sticky Note (The "Silent Memory") 📌**

* **The `.current` property:** A place to store data that persists between renders.
* **The Silence:** Unlike `useState`, changing a Ref **does not** ring the notification bell. React won't re-render the screen.
* **The Hook:** Also used to "grab" an HTML element directly to focus it or measure it.

> **Use Case:** Storing a timer ID, focusing a text input, or remembering a "previous" value.

---
## Evnets Handling

* **user interation**{mouse click, key click etc}
* **syntehtic event** => cross browser events
* syntehtic event -> native event -> browser


---
## Form Handling
* Two way to handle
* 1. Controlled => input is controlled by react state. single source of truth, easy validation, works well with react ecosystem
  2. Un Controlled => input managed by own State(Dom handle it). Hard to validate, no reactive, less control

---

### 5. `useMemo` & `useCallback`
**The Brain-Freeze Prevention (The "Calculated Answer") 🧠**

* **`useMemo`:** Remembers the **result** of a complex math problem so you don't have to calculate it again.
* **`useCallback`:** Remembers the **function itself** so it isn't recreated every time the component refreshes.

> **Use Case:** Sorting a massive list of data or optimizing performance in child components.

---

### ⚡ Quick Summary Table

| Hook | Analogy | Why use it? |
| :--- | :--- | :--- |
| **`useState`** | Notification Bell | To change what's on the screen. |
| **`useEffect`** | Smart Thermostat | To react to a change. |
| **`useContext`** | Radio Tower | To share data globally. |
| **`useRef`** | Sticky Note | To remember things silently. |
| **`useMemo`** | Saved Answer | To speed up heavy logic. |


---
## Some topics:-
* **`StrictMode`:** It is basically a 'wrapper' tool that helps you to find bugs early.
  A tool for developers. It doesn't show up on the screen, but it warns you about potential bugs and outdated code in your terminal/console.
*  **`CreateRoote`:-** It is the bridge between your React code and the actual browser. Browser only understand HTML not React,
 So createRoot finds the actual HTML div (usually with the ID 'root') and tells React: "This is where you are allowed to draw my app."
 It enables 'Concurrent React'. This allows React to prepare multiple versions of your UI at the same time in the background, making the app feel much faster and smoother for users.
  **How?** , In a regular app, if React is busy rendering a huge list of 10,000 items, the browser "freezes." The user can't click buttons or type in a search box until that big list is finished. `createRoot` has these multitasking powers built-in, but they stay locked to keep old apps from breaking.
---
# Class Components vs. Hooks

### 1. The Class Component Way (The Old Way)
---Think of Class Components like a big, heavy manual car where you have to shift every gear yourself (this, bind, constructor). Hooks are like an automatic car—it’s much smoother, faster to start, and easier to drive.
In a class, you have to use a `constructor` to set up your data and the `this` keyword to access it. It is very "wordy" (lots of extra code).



```javascript
import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    // You must have to initialize state in an *object*
    this.state = {
      counter: 0
    };
  }

  addValue = () => {
    // You must use this.setState to update
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Value: {this.state.counter}</p>
        <button onClick={this.addValue}>Add</button>
      </div>
    );
  }
}

export default CounterClass;

```
-With Hooks, we don't need a constructor or this. We just use useState. It is much cleaner and easier to read.
```javascript

import React, { useState } from 'react';

function CounterHook() {
  // Simple and direct initialization
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Hooks (Functional)</h1>
      <p>Value: {counter}</p>
      <button onClick={addValue}>Add</button>
    </div>
  );
}

export default CounterHook;

```

## some function

 `createRoot() `// Dom create karta hai [serif ose component ko reload kar jo change hoa hai , but browser ka Dom pure page ko hi reload karta hai ]

## React Fibre:-
- Read from : https://github.com/acdlite/react-fiber-architecture

## what is Reconciliation?
The algorithm React uses to diff one tree with another to determine which parts need to be changed. Algorithim behins "Virtual DOM"
**update**
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

* Actually re-rendering entire app onn each change is coslty in terms of performance. 
* when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

## 1. Reconciliation vs. Rendering
**The Concept:** React splits its job into two completely different phases. 
* **Reconciliation (The Brain):** React looks at your code and calculates *what* needs to change. This is what Fiber does.
* **Rendering (The Hands):** Another library takes those calculations and actually draws them on the screen.

## Fibre:-
* **Problem** Normally, when a computer runs a function, it puts it on a "Call Stack." It cannot stop until the function finishes.they can't stop until they hit the bottom.

* **Sloution:-** React Fiber is like a "Smart To-Do List." Instead of running one giant function, React breaks it into small tasks and checks the time after each one.It breaks a React component down into a JavaScript object. Because it is just an object (and not a running function), React can save it in memory, pause it, and come back to it later.

## The "Virtual Stack Frame"
Normally, when a computer runs a function, it "forgets" where it was if it stops. Fiber is special because it saves the "state" of the work in an object (a Fiber).

**Key Points in Simple Terms:**

* **Pause & Resume**: Stop a big task to handle a small, fast task.

* **Priority**: Do animations and clicks first; load background data later.

* **Abort**: If a user clicks "Cancel," React can literally throw away the "Biryani" half-way through instead of finishing it.

# Projects:- 
## 02passwordGenerator:-
* `useCallback` is a React Hook that lets you cache a function definition between re-renders. Remembers a function. It prevents a function from being recreated every time the component re-renders unless certain values change.
`useCallback(fn, dependencies)`
* `useEffect` - Runs a side effect. It tells React to "do something" after the page finishes loading or when specific data changes (like fetching data or calling a function).
*  `useRef` - Grabs an element. It allows you to directly "touch" or reference an HTML element (like an input box) or store a value that doesn't trigger a re-render.

```javascript
import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [addNum, setaddNum] = useState(false)
  const [addChar, setaddChar] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (addNum) str += "0123456789"
    if (addChar) str += "!@#$%^&*(){[}]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, addChar, addNum, setpassword])
  useEffect(() => {
    passwordGenerator()
  }, [length, addChar, addNum, passwordGenerator])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 4)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex 
        
        shadow rounded-lg overflow-hidden md-4'>
          <input
            type="text"
            value={password}
            className='outline-none bg-white w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={addNum}
              id="numInput"
              onChange={() => {
                setaddNum((prev) => !prev);
              }}
            />
            <label htmlFor='numInput'> Nunber</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={addChar}
              id="charInput"
              onChange={() => {
                setaddChar((prev) => !prev);
              }}
            />
            <label htmlFor='charInput' > Characters</label>

          </div>
        </div>
      </div >
    </>
  )
}

export default App

```
# 03currencyConvertor :-
* fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) // generally API ke responce String formate me ate hai, tu hume .json convert karna padhta hai
        .then((res) => res.json())
* `useID`

# 04reactrouter:-
* `npm install react-router-dom`
* we donot use anchor tag in react , beacuse it referce the whole page but don't want instent of anchor we use Link or NavLink


## context API:-
* similarly rudex, zustand
* 