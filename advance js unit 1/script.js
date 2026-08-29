//Task 1 : Trace the stack and guess the order of output
function greet() {
  console.log('Hi');
  sayBye();
}

function sayBye() {
  console.log('Bye');
}

greet();
console.log('Done');//Hi
                    //Bye
                    //Done

//Task 2 : Trace the stack and guess the order of output
setTimeout(() => console.log('One'), 3000);
setTimeout(() => console.log('Two'), 1000);
setTimeout(() => console.log('Three'), 2000);//Two run in one second
                                             //Three run in 2 second
                                             //One run in 3 second               

//Task 3:  Trace the stack and guess the order of output
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}//4
  //4
  //4 they run after the task 2 . each run one by one in one second, two second, and three second.



//Task 4: What will this log? Why do counter1 and counter2 behave differently?

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = makeCounter();
counter1(); 
counter1(); 

const counter2 = makeCounter();
counter2();//1
           //2
           //1

//Task 5: What will be printed and in what order? 

function logLater(id) {
  setTimeout(() => {
    console.log('ID is', id);
  }, 1000);
}

logLater(1);
logLater(2);
logLater(3);//ID is 1
            // ID is 2
            //ID is 3

