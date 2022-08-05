const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'pick', age: 40, nervous: false };
const baz = { name: 'harry', age: 50, nervous: true };

//TERRIBLE WAY IS TO CONSOLE LOG EACH ONE. Not good! No way to know what the var name is

//Better way is to console log all as a single object this way we get each var as labels.
console.log('%c My Friends', 'color: orange; font-weight: bold;'); //CSS styling in js
console.log({ foo, bar, baz });

// Console.table(...)
console.table([foo, bar, baz]);

// Console.time
//How long does it take for us to loop through 1000000 times
console.time('looper');

let i = 0;
while (i < 1000000) {
  i++;
}

console.timeEnd('looper');

// // Stack Trace Logs

const deleteMe = () => console.trace('bye bye database');

deleteMe();
deleteMe();
