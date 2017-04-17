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
    this.map = this.game.add.tilemap('map');
    this.map.addTilesetImage('tilesheet', 'tiles');
    this.layer = this.map.createLayer('background');

    this.layer.renderSettings.enableScrollDelta = true;
    this.layer.scale.set(1, 1); //Double the scale

    this.layer2 = this.map.createLayer('top');
    this.layer2.renderSettings.enableScrollDelta = true;
    this.layer2.scale.set(1, 1); //Double the scale
  }

  //Code ran on each frame of game
  update() {

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