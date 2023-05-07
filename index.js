function superbowlWin(array) {
    const foundWin = array.find(game => game.result === "W");
    return (foundWin ? foundWin.year : undefined);
  }