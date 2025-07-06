// for

for(let i = 0; i <= 10; i++){
    const element = i;
    if(element == 5){
        //console.log("5 is Good Number");
        
    }

    //console.log(element);
    
}

// console.log(element); // Not Acces scope issue

for(let i = 1; i <= 10; i++){
    //console.log(`Outer lop value: ${i}`);

    for(let j = 1; j <= 10; j++){
        //console.log(`Inner loop value ${i} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
    }
}


let arr = ["flash", "batman", "superman"]
console.log(arr.length);

for(let i = 0; i < arr.length; i++){
    const element = arr[i];
    console.log(element);
}

// break and continue

for(let i = 0; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        break;
    }

    //console.log(`Value if i is ${i}`);
}


for(let i = 0; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }

    console.log(`Value if i is ${i}`);
}