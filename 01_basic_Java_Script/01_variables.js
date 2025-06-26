const accountId = 1656455;
let accountName = "Abhishek_Singh";
var accountPassword = "4686";
accountCity = "new_Delhi";
let accountState;

// accountId = 12345;  const varialble not allow to change value

console.log(accountId);

/*
    Prefer not use var
    because of issue in block scope and functional scope

*/

accountName = "Vishal_Singh";
accountPassword = "9425401";
accountCity = "bangaluru";

console.table([accountId, accountName, accountPassword, accountCity, accountState]);

// accountState ---> undefined [It means that not defined the value or we can say thay I don't know what is this value]