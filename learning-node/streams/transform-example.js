const { Transform } = require('stream');

const camelStream = new Transform({
  transform(chunk, callback) {
    const data = chunk.toString();
    data.split(' ').map((word, index) => {
      this.push(
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1)
      );
    });
  },
});

process.stdin.pipe(camelStream).pipe(process.stdout);
