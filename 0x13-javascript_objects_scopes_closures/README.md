# 0x13-javascript_objects_scopes_closures

<hr />
<img src="javascript.gif" alt="javascript" />

<h1>Scope and Closures in JavaScript</h1>

<h3>Scope and closures are important concepts in JavaScript that help define the accessibility and lifetime of variables. Let's explore these concepts in more detail:</h3>

# Scope:

<p>Scope refers to the part of a program where a variable can be accessed. In JavaScript, there are two main types of scope: global scope and local scope.</p>

<ul>
    <li>
        Global Scope: Variables declared outside all functions or curly braces are defined in the global scope. These variables can be accessed from anywhere in the program.
    </li>
    <li>
        Local Scope: Variables declared inside a function or a block (enclosed within curly braces) are defined in the local scope. These variables can only be accessed within the function or block where they are declared.
    </li>
</ul>


<hr />

<article>JavaScript allows for nested scopes, meaning that variables declared in outer scopes are accessible from inner scopes. This allows for the concept of closures.</article>

# Closures:

<p>A closure is a function bundled together with references to its surrounding state (the lexical environment). It gives you access to an outer function's scope from an inner function. Closures are created every time a function is created, at function creation time.</p>

<p>Closures are powerful because they allow functions to maintain connections with outer variables, even outside the scope of those variables. This enables various use cases, such as creating class-like structures that store state and implement private methods, or passing callbacks to event handlers .</p>