export const cpuMovePlayer = (playerMark, gameState = {}, winningConditions = []) => {
  let block = {
    toBlock: false,
  };
  winningConditions.forEach((el) => {
    let cont = 0;
    Object.entries(gameState).forEach((entry) => {
      let [key, value] = entry;
      key = parseInt(key);
      if ((el[0] === key || el[1] === key || el[2] === key) && value === playerMark) {
        cont++;
        if (cont >= 2) {
          block = {
            toBlock: true,
            condition: el,
          };
        }
      }
    });
  });

  return block;
};
