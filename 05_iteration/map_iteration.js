const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (val){
    // console.log(val);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe); // only give the reference not call function

coding.forEach( (item, index, arr) =>{
    // console.log(item, index, arr);
})


const code = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]


code.forEach( (item) => {
    console.log(item.languageFileName);
})