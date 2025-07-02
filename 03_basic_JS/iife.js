// Immediate Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();  // it executed while execute the file



(() => {
    console.log(`Databse Connected`);
}) ();  // semicolon is must


((name) => {
    console.log(`Databse Connected ${name}`);
}) ("Abhishek");