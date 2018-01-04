class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');
  }

  create() {
    this.game.input.maxPointers = 1;
     //setup device scaling
    if (this.game.device.desktop) {
      this.game.scale.pageAlignHorizontally = true;
      //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      //this.game.scale.set(2,2);

    } else {
      //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      //this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.minWidth =  350;
      this.game.scale.minHeight = 100;
      this.game.scale.maxWidth = 600;
      this.game.scale.maxHeight = 200;
      this.game.scale.set(4,4);
      this.game.scale.forceOrientation(true);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.setScreenSize(true);
    }
    this.initGlobalVariables();

    this.game.state.start('preloader');
  }

  initGlobalVariables(){
    this.game.global = {
      score: 0
    };
  }

}

export default Boot;
