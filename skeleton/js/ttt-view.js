class View {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("click", (event) => {
      let $currentTarget = $(event.currentTarget);
      if (!($currentTarget.hasClass("over"))) {
        this.makeMove($currentTarget);
      }
    });
  }

  makeMove($square) {
    if ($square.hasClass("x") || $square.hasClass("o")) {
      alert("Invalid move, choose again.");
    } else {
      let pos = $square.data("pos");
      let mark = this.game.currentPlayer;
      $square.addClass(mark);
      $square.html(mark);
      $square.removeClass("click");
      this.game.playMove(pos);

      if (this.game.isOver()) {
        $("li").addClass("over");
        $("li").removeClass("click");

        let $p = $("<p>");
        let winner = this.game.winner();
        if (winner) {
          $(`li.${winner}`).addClass("winner");
          $p.html(`You win, ${winner}!`);
        } else {
          $p.html(`No one wins!`);
        }
        // $('body').append($("<br>"));
        $('figure').append($p);
      }
    }
  }

  setupBoard() {
    const POSITIONS = {
      0: [0, 0],
      1: [0, 1],
      2: [0, 2],
      3: [1, 0],
      4: [1, 1],
      5: [1, 2],
      6: [2, 0],
      7: [2, 1],
      8: [2, 2],
    };

    let $ul = $("<ul>");

    for (let i = 0; i < 9; i++) {
      let $li = $("<li>");
      $li.data("pos", POSITIONS[i]);
      $li.addClass("click");
      $ul.append($li);
    }

    this.$el.append($ul);
  }
}

module.exports = View;
