const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObj){  // using for-in loop
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for(const key in programming){
    // console.log(programming[key]);
}

const map = new Map();
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('fr', "France")
map.set('IN', "India")

// for(const key in map){  // for-in loop will not work on the map
//     console.log(key);
// }