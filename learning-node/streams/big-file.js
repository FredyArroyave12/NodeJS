const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i = 0; i <= 1e6; i++) {
  file.write(
    'Estaba la pajara pinta sentada en un verde limon. con el pico cortaba la rama con la rama cortaba la flor, pero no m,pero no, pero no '
  );
}

file.end();
