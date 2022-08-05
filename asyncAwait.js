const random = () => {
  return Promise.resolve(Math.random());
};

//DONT DO
// const sumRandomAsyncNums = () => {
//   let first;
//   let second;
//   let third;

//   return random()
//     .then((v) => {
//       first = v;
//       return random();
//     })
//     .then((v) => {
//       second = v;
//       return random();
//     })
//     .then((v) => {
//       third = v;
//       return first + second + third;
//     })
//     .then((v) => {
//       console.log(`Result ${v}`);
//     });
// };

//PROMISE PRACTICE
const x = random().then((v) => {
  console.log(v);
});

let p = new Promise((resolve, reject) => {
  const a = 2;
  if (a === 0) {
    resolve('YAY!!');
  } else if (a === 1) {
    reject({
      start: 'Not',
      end: 'Happy',
    });
  } else {
    reject({
      start: 'Not',
      end: 'Birthday',
    });
  }
});

p.then((exciteMsg) => {
  console.log(exciteMsg);
}).catch(({ start, end }) => {
  console.log(`${start} ${end}`);
});

//USING ASYNC AND AWAIT
const sumRandomAsyncNums = async () => {
  const first = await random();
  const second = await random();
  const third = await random();
  console.log(first + second + third);
};

sumRandomAsyncNums();
