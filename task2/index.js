function wrapper(time, func) {
  let timer = true;
  return (...args) => {
    setTimeout(() => {
      timer = true;
    }, time);
    if (timer) {
      timer = false;
      return func(args);
    }
  }
}

function example(name) {
  console.log(`hello ${name}`);
}

const exmapleWrapper = wrapper(1000, example);
exmapleWrapper('den');
exmapleWrapper('mark');
setTimeout(() => {
  exmapleWrapper('Alex');
}, 1000);