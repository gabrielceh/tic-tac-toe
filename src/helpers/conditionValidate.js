export const conditionValidation = (cond, handleCellPlayed, handleResultValidation) => {
  let index = cond;
  let clickedCellIndex = index;
  let clickedCell;
  console.log(clickedCellIndex);

  document.querySelectorAll('.cell').forEach((el) => {
    if (parseInt(el.dataset.cellIndex) === clickedCellIndex) {
      clickedCell = el;
    }
  });
  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
};
