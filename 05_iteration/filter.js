// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
    // console.log(item);
    //return item; // it did not return the values
//})

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => {
    //return num > 4;
})

// console.log(newNums);


myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num);

    }
})

// console.log(newNums);


const books = [
    {
        title: "Book One",
        genre: "Fiction",
        publish: 1992,
        edition: 2008
    },
    {
        title: "Book three",
        genre: "History",
        publish: 1999,
        edition: 2007
    },
    {
        title: "Book four",
        genre: "Non-Fiction",
        publish: 1989,
        edition: 2010
    },
    {
        title: "Book five",
        genre: "Non-Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book six",
        genre: "Non-Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book Seven",
        genre: "Fiction",
        publish: 1987,
        edition: 2010
    },
    {
        title: "Book Eight",
        genre: "Science",
        publish: 2011,
        edition: 2016
    },
    {
        title: "Book Nine",
        genre: "Non-Fiction",
        publish: 1981,
        edition: 2089
    },
    {
        title: "Book Ten",
        genre: "History",
        publish: 1990,
        edition: 2005
    }
]

let userBooks = books.filter( (bk) => bk.genre === "History");

// console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);