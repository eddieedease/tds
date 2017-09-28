//Documentation for Phaser's (2.6.2) states:: phaser.io/docs/2.6.2/Phaser.State.html
class Start extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game, parent);
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {


    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.game.world.resize(1600, 480);
    
        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('tilesheet', 'tiles');
        this.layer = this.map.createLayer('background');
    
        this.layer.renderSettings.enableScrollDelta = true;
        this.layer.scale.set(1, 1); //Double the scale
    
        this.layer2 = this.map.createLayer('top');
        this.layer2.renderSettings.enableScrollDelta = true;
        this.layer2.scale.set(1, 1); //Double the scale
    
        this.player = this.game.add.sprite(this.game.world.randomX, 200, 'player');

      
    
        this.game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
    
        this.game.camera.follow(this.player);
    
        this.cursors = this.game.input.keyboard.createCursorKeys();






    
  }

  //Code ran on each frame of game
  update() {
    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;

    if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -240;
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 240;
    }

    if (this.cursors.up.isDown)
    {
        this.player.body.velocity.y = -240;
    }
    else if (this.cursors.down.isDown)
    {
        this.player.body.velocity.y = 240;
    }
  }

  //Called when game is paused
  paused() {

  }

  //You're able to do any final post-processing style effects here.
  render() {

  }

  //Called when switching to a new state
  shutdown() {

  }

}

export default Start;