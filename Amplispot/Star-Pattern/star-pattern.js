function printStarSpaceProgram(lines) {
    for (let i = 1; i <= lines; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === j) {
          row += '*';
        } else {
          row += ' ';
        }
      }
      console.log(row);
    }
  }
   
  printStarSpaceProgram(7);