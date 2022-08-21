// code your solution here

function saturdayFun(what="roller-skate"){

   let myDay= "This Saturday, I want to "+what+"!";

   return myDay;
}

function mondayWork(toDo="go to the office"){
    let monday="This Monday, I will "+toDo+".";
    return monday;

}

  function wrapAdjective(word="special"){

  const innerFunction = function(ad){
    
    return `You are ${word}${ad}${word}!`;

    };

   return innerFunction;
}
let ans=wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a dedicated programmer");
console.log(ans);


