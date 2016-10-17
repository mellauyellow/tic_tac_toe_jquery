const View = require("./ttt-view") // require appropriate file
const Game = require("./game") // require appropriate file

$( () => {
  let game = new Game();
  let $gridSpace = $('.ttt');
  let view = new View(game, $gridSpace);
});
