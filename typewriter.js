const sentence = "hello there form lighthouse labs";
let time = 0;
let increment = 50;
for (const char of sentence) {
    time = time + increment;
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
}

setTimeout(() => {
  console.log();
}, sentence.length*increment);