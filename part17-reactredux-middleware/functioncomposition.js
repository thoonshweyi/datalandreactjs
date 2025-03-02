function sayhello(){
     return function(){
          return "Hello Friend!,"
     }
}

let getfun = sayhello();
let printmsg = getfun();

console.log(printmsg)

function sumfun(num1){
     return function(num2){
          return num1+num2;
     }
}
let getsumfun = sumfun(5);
let result1 = getsumfun(20);
console.log(result1);

let result2 = sumfun(50)(200);
console.log(result2);


const multifun = num1 => num2 => num1 * num2;
let getmultifun = multifun(5);
let resultone = getmultifun(2)
console.log(resultone);

let resulttwo = multifun(50)(2)
console.log(resulttwo);

// node functioncomposition.js