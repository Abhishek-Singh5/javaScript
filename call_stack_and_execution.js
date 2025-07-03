/*

🔷 1. What is the Call Stack?

        The Call Stack is a data structure that keeps track of function calls. 
        When a function is invoked, it is pushed onto the stack. 
        When the function finishes executing, it's popped off.


🔷 2. What is an Execution Context?
        An Execution Context is an environment where JavaScript code is executed. 

There are 3 main types:

        1 --> Global Execution Context (GEC) — created first when your code runs.
        2 --> Function Execution Context (FEC) — created every time a function is invoked.
        3 --> Eval Execution Context — used when eval() is run (rare).


🔷 3. Phases of Execution Context
        Every execution context goes through two phases:

✅ 1. Memory Creation Phase (a.k.a. Creation Phase):

        Allocate memory for variables and functions.
        Variables are initialized with undefined.
        Functions are stored completely (hoisting).

✅ 2. Code Execution Phase:

        Variables are assigned actual values.
        Functions are executed when invoked.
        New Execution Contexts are pushed to the call stack.

✅ Global Execution Context (GEC)

        This is the base of all code execution and is created before any other execution context.

🧠 Example 1 — Simple Function Call

        var x = 1;

        function add() {
        var y = 2;
        console.log(x + y);
        }

        add();


✅ Step-by-step:

    🔹 Global Context (GEC) Created:
        Memory phase:

            x → undefined
            add → function

    Execution phase:

        x → 1
        add is invoked → new Function Execution Context (FEC) created

    🔹 add() Context:
        Memory phase:

            y → undefined

    Execution phase:

            y → 2
            console.log(x + y) → outputs 3

add() context is popped from stack



🧱 Call Stack during execution:


        |                |
        | add()          | ← pushed when add() is called
        |----------------|
        | Global Context | ← created first
        |----------------|



After add() finishes:


        |                |
        | Global Context |
        |----------------|




🧠 Example 2 — Nested Function Call



            function one() {
            console.log("Inside One");
            two();
            }

            function two() {
            console.log("Inside Two");
            three();
            }

            function three() {
            console.log("Inside Three");
            }

            one();


🔄 Step-by-step Call Stack:

        Call Stack:

            1. Global Context
            2. one() pushed
            3. Inside one() → two() called → two() pushed
            4. Inside two() → three() called → three() pushed
            5. three() logs → pop
            6. two() finishes → pop
            7. one() finishes → pop



🖼️ Diagram Representation:


        |             |
        | three()     | ← top
        | two()       |
        | one()       |
        | Global      | ← bottom



After everything:



        |             |
        | Global      |


⚙️ How Memory and Execution Phases Work

        Code:

            var a = 10;
            var b = 20;

            function sum(x, y) {
            var result = x + y;
            return result;
            }

            var total = sum(a, b);
            console.log(total);


🔹 Memory Creation Phase (GEC):

            Identifier	            Value

                a	                undefined
                b	                undefined
                sum	                function ref
                total	            undefined



🔹 Execution Phase (GEC):


                Identifier	           Value

                a	                    10
                b	                    20
                sum	                    function ref
                total	                30 (after sum returns)




🔹 FEC for sum(10, 20)

            Memory Phase:

                            Identifier	                    Value

                             x	                            undefined
                             y	                            undefined
                            result	                        undefined


Execution Phase:

                Identifier	                Value

                x	                           10
                y	                           20
                result	                       30



💡 Bonus: Why Understanding This Matters

        Avoid hoisting confusion
        Handle undefined vs ReferenceError
        Understand closures
        Debug asynchronous behavior



📌 Summary Table


            Concept	                                                Purpose

            Call Stack	                                            Tracks function calls
            Execution Context	                                    Environment for code execution
            Memory Phase	                                        Allocates space, hoists variables & functions
            Execution Phase	                                        Runs code and assigns actual values
            Global Context	                                        First context created
            Function Context	                                    Created per function call



*/