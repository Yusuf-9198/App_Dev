# 📖 JavaScript: The OOP Handbook

Object-Oriented Programming (OOP) is a programming paradigm centered around **Objects** rather than just functions and logic. It allows us to model real-world entities (like a User, a Bank Account, or a Car) inside our code.

---

## 1. What is an Object?

An **Object** is a collection of related data and functionality. It consists of:

* **Properties:** Variables that belong to the object (The "Nouns"). E.g., `color`, `username`.
* **Methods:** Functions that the object can perform (The "Verbs"). E.g., `.toLowerCase()`, `login()`.

> **Example:** In the statement `"HELLO".toLowerCase()`, the string is the object and `.toLowerCase()` is the method being called upon it.

---

## 2. Why Use OOP?

Without OOP, code often becomes "Spaghetti Code"—tangled, repetitive, and hard to debug. OOP provides:

* **DRY (Don't Repeat Yourself):** Reuse code via inheritance rather than rewriting it.
* **Organization:** Group related data and behavior together in one place.
* **Scalability:** Easier to add new features to large projects without breaking existing logic.
* **Modularity:** Troubleshoot specific objects without digging through thousands of lines of global code.

---

## 3. Parts of OOP in JavaScript

### A. Object Literal
The simplest way to define an object. It is a comma-separated list of name-value pairs.

```javascript
const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,
    getGreeting: function() {
        return `Welcome back, ${this.username}`;
    }
};
Pillar,Definition,Real-world Analogy
Abstraction,Hiding complex implementation details and showing only the essential features.,You can drive a car by pressing the gas pedal without knowing how the fuel injection system works.
Encapsulation,"Keeping data (properties) and the code that manipulates it (methods) together, and restricting direct access to the data.","A capsule (pill) hides the medicine inside; you interact with the pill as a whole, not the raw powder."
Inheritance,The mechanism where one class (child) derives properties and methods from another (parent).,"A ""Smartphone"" inherits the ""call"" and ""text"" features from the general ""Phone"" category."
Polymorphism,The ability of different objects to respond to the same method call in their own specific way.,"A ""Dog"" and a ""Cat"" both have a makeSound() method, but one barks and the other meows."