const MIN_AGE =16;
function checkagev2 (age){
    if (age<= MIN_AGE){
        console.log("welcome to our program")
    }
    else{console.log("you may proceed with the intern")}
}
//calling function
checkagev2(12);
checkagev2(14);
checkagev2(27);

function printnumber(num,somefunction)
somefunction(num)
function checkagev3(num){
    console.log(num+=1);
}
printnumber(22,checkagev3);