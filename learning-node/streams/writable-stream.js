const { Writable } = require('stream');

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
  },
});

process.stdin.pipe(writableStream);
