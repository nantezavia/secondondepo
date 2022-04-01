/*syntax for a FOR loop.
for(CountQueuingStrategy,condition,expression){
    //code goes here
}*/

//elevator going down
for(let floor=3; floor>1; floor--){
    console.log("going down")
    if (floor==1){
        console.log("you have arrived atyour destination")
    }
}
for(let num=0; num<=10; num++){
    console.log("hi there");
}

//while loop
const REQUIRED_AGE =18;
let currentAge =2;
while(currentAge<REQUIRED_AGE){
    console.log("you are under age");
    currentAge+=1;
}
// do while 

    let num=0;
    do{"hi there number: ",num}
    while(num<10);
//arrays 
let fruits=["pears", "jk","grapes","banana", "melon","mangoes"];
let lastitem = fruits[fruits.length-1]
console.log( "lastitem is:", lastitem);
fruits.push("apples")
console.log(fruits);
console.log("last item is:",lastitem,fruits[fruits.length-1])
fruits.push("lemon");
console.log("last item is:",lastitem,fruits[fruits.length-1])
let numset1 =[1,2,3,4,5];
let numset2 =[6,7,8,9,10];
