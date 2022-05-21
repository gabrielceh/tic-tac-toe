export const cpuWin = (cpuMark, gameState = {}, winningConditions = []) => {
  let win = {
    toWin: false,
  };
  winningConditions.forEach((el) => {
    let cont = 0;
    Object.entries(gameState).forEach((entry) => {
      let [key, value] = entry;
      key = parseInt(key);
      if ((el[0] === key || el[1] === key || el[2] === key) && value === cpuMark) {
        cont++;
        if (cont >= 2) {
          win = {
            toWin: true,
            condition: el,
          };
        }
      }
    });
  });

  return win;
};
