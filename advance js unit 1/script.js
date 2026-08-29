
function greet() {
  console.log('Hi');
  sayBye();
}

function sayBye() {
  console.log('Bye');
}

greet();
console.log('Done');


setTimeout(() => console.log('One'), 3000);
setTimeout(() => console.log('Two'), 1000);
setTimeout(() => console.log('Three'), 2000);


for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}


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
counter2();


function logLater(id) {
  setTimeout(() => {
    console.log('ID is', id);
  }, 1000);
}

logLater(1);
logLater(2);
logLater(3);

