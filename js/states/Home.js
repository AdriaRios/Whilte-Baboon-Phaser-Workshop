var Wmandrel = Wmandrel || {};

//setting game configuration and loading the assets for the loading screen
Wmandrel.HomeState = {
  preload: function() {
    //assets we'll use in the loading screen
    this.load.image('play', 'assets/images/playbutton.png');
  },
  create: function() {
    this.play = this.add.sprite(180, 296, 'play');
    this.play.anchor.setTo(0.5);
    //  Enables all kind of input actions on this image (click, etc)
    this.play.inputEnabled = true;
    this.play.events.onInputDown.add(this.btnClick, this);
  },
  btnClick: function(){
    this.game.state.start('GameState');
  }
};
