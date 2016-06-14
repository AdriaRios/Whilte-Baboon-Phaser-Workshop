var Wmandrel = Wmandrel || {};

Wmandrel.GameState = {
  //initiate game settings
  init: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1000;

  },

  //load the game assets before the game starts
  preload: function() {
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('platform', 'assets/images/platform.png');

    //Load platform
    this.load.spritesheet('player', 'assets/images/player_spritesheet.png', 28, 30, 5, 1, 1);
  },
  //executed after everything is loaded
  create: function() {
    this.ground = this.add.sprite(0, 522, 'ground');
    this.game.physics.arcade.enable(this.ground);
    this.ground.body.allowGravity = false;
    this.ground.body.immovable = true;

    this.platform = this.add.sprite(0, 300, 'platform');
    this.game.physics.arcade.enable(this.platform);
    this.platform.body.allowGravity = false;

    this.player = this.add.sprite(100, 200, 'player', 3);
    this.player.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this.player);
  },
  update: function() {
    this.game.physics.arcade.collide(this.player, this.ground);

  }

};
