/* 

        firstly install the jsuv that is engine of V8

        -->  ~/.jsuv/bin/v8-debug--allow-natives-syntax 
        -->  ~/.jsuv/bin/v8-debug--allow-natives-syntax extra_imp.js 

 
          Types of Array.
          element kind :  PACKED_SMI_ELEMENT

*/



const arr = [];
// %DebugPrint(arr);



// continious Array, Holey Array

// SMI (small integer)
// Packed element
// Double (float, string, function)


const arr2 = [1, 2, 3, 4, 5]
//  PACKED_SMI_ELEMENTS

arr2.push(6.0);
// PACKED_DOUBLE_ELEMENTS


arr2.push("7");
// PACKED_ELEMENTS


arr2[10] = 12;
// HOLEY_ELEMENTS

console.log(arr2);
console.log(arr2.length);
console.log(arr2[9]); // undefined
console.log(arr2[19]); // undefined


// bound check
//  hasOwnProperty(arr2, 9)
//  hasOwnProperty(arr2.prototype, 10)
//  hasOwnProperty(Object.prototype, 10)



// holes are very expensive in javaScript


const arr3 = [1, 2, 3, 4, 5]
console.log(arr3);


// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED



const arr4 = new Array(3)
// just 3 holes. Holey_SMI_ELEMENTS

arr4[0] = "1"  // Holey_ELEMENTS
arr4[1] = "2"  // Holey_ELEMENTS
arr4[2] = "3"  // Holey_ELEMENTS



const arr5 = [];
arr5.push("1") // PACKED_ELEMENT
arr5.push("2") // PACKED_ELEMENT
arr5.push("3") // PACKED_ELEMENT



const arr6 = [1, 2, 3, 4, 5];

arr6.push(Infinity);
arr6.push(NaN);


// for, for-of, forEach





/*


🔍 Overview of the Code

This code explores how JavaScript arrays behave internally, especially when run on the V8 JavaScript engine (used in Chrome and Node.js). 
It discusses element kinds, array types, optimization behaviors, and performance implications of certain operations.

🚀 Summary of Topics:

1. V8 Internals with JSUV and Debugging

    // ~/.jsuv/bin/v8-debug--allow-natives-syntax extra_imp.js
    This is a debugging setup using jsuv, a tool that wraps V8 internals.

    --allow-natives-syntax: Enables V8-specific internal syntax (e.g. %DebugPrint()).

    Useful to inspect internal optimizations, especially how arrays are represented.

🧠 JavaScript Arrays & V8 Element Kinds

🔢 Types of Arrays Based on Element Kinds:

Element Kind	                                                Meaning

PACKED_SMI_ELEMENTS	                                    Packed array with only small integers (SMI = Small Integers)
PACKED_DOUBLE_ELEMENTS	                                Packed array with floating-point numbers
PACKED_ELEMENTS	                                        Packed array with mixed types (e.g. numbers and strings)
HOLEY_SMI_ELEMENTS	                                    Has holes (undefined values) with only integers
HOLEY_DOUBLE_ELEMENTS	                                Holes and doubles
HOLEY_ELEMENTS	                                        Holes and mixed types



👇 Example Walkthrough

✅ Simple integer array:

    const arr2 = [1, 2, 3, 4, 5];
    // Initially: PACKED_SMI_ELEMENTS
    ➡ V8 optimizes this efficiently since all elements are small integers.


    ➕ Push float:

        arr2.push(6.0);
        // Changes to: PACKED_DOUBLE_ELEMENTS
        ➡ Array now holds a float, so it’s upgraded from integers to doubles.

    ➕ Push string:

        arr2.push("7");
        // Changes to: PACKED_ELEMENTS
        ➡ Mixed types now, so V8 treats it as generic array.

    🕳 Insert hole:

        arr2[10] = 12;
        // Changes to: HOLEY_ELEMENTS

    ➡ Indexes 7 to 9 are empty (undefined) → V8 marks this as a holey array.

        console.log(arr2[9]); // undefined
        📌 Bound Checks
        When accessing arr2[9], what happens?
        JS engine checks arr2.hasOwnProperty(9)

    Then checks prototype: arr2.prototype

    Then checks Object.prototype

    ➡ Holes = costly, because JS has to check multiple places if value is not directly present.

    ⚠️ Holes Are Expensive

    const arr4 = new Array(3); // [ <3 empty items> ]
    // Starts as: HOLEY_SMI_ELEMENTS

➡ When you later add strings:

    arr4[0] = "1"; // Becomes: HOLEY_ELEMENTS
    This kind of array prevents optimization. Use [] and .push() when possible.

✅ Optimized Usage

    const arr5 = [];
    arr5.push("1");
    arr5.push("2");
    arr5.push("3");
    // Stays as: PACKED_ELEMENTS

➡ This is a well-optimized usage. No holes, no type inconsistencies.

⚠️ Adding Infinity and NaN

const arr6 = [1, 2, 3, 4, 5];
arr6.push(Infinity);
arr6.push(NaN);
➡ Stays as: PACKED_DOUBLE_ELEMENTS
These are special values, but still numeric, so V8 keeps it optimized.

🔁 Iteration Patterns
for loop → Fastest and most flexible

for-of → Clean syntax, good for modern JS

forEach → Callback-based, can be slightly slower due to function calls

🧵 Final Recommendations
✅ DO:
Prefer [] and .push() for adding items

Keep types consistent

Avoid assigning high-index values directly (causes holes)

❌ AVOID:
Creating arrays like new Array(10)

Mixing types in the same array

Creating "holes" in arrays (e.g., arr[1000] = 5)


📚 Bonus Keywords:


Term	                                            Meaning
SMI	Small Integers                          (< 32-bit) optimized by V8
HOLEY array	                                Array with empty slots (not undefined, but truly empty)
Packed array	                            No holes, consistent type — fast and optimized
V8	                                        JavaScript engine used in Chrome and Node.js
%DebugPrint()	                            V8 internal command to inspect object structure


*/