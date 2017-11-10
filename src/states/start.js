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

        this.stageGroup = this.game.add.group();

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //this.game.world.resize(1400, 500);



        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('tilesheet', 'tiles');
        

        // tile collisions   [strange block]


        this.layer = this.map.createLayer('background');

        this.layer.renderSettings.enableScrollDelta = true;
        this.layer.setScale(1.6);
        

        this.layer2 = this.map.createLayer('top');
        this.layer2.renderSettings.enableScrollDelta = true;
        this.layer2.setScale(1.6);
        

        this.layer3 = this.map.createLayer('roof');
        this.layer3.renderSettings.enableScrollDelta = true;
        this.layer3.visible = true;
        this.layer3.setScale(1.6);


        this.collayer = this.map.createLayer('collision');
        this.collayer.renderSettings.enableScrollDelta = true;
        this.collayer.scale.set(1, 1); //Double the scale
        this.collayer.visible = false;
        this.collayer.setScale(1.6);

        //  Here we create our coins group
        this.peepz = this.game.add.group();
        
        this.peepz.enableBody = true;
        this.map.createFromTiles(268, null, "zombi", this.collayer, this.peepz); 
        

        //this.layer.resizeWorld();
        //this.layer2.scale.set(zoomlevel);
        this.map.setCollision(109, true, this.collayer);
        this.map.setTileIndexCallback(543, this.showRoof, this, this.collayer)

        this.map.setTileIndexCallback(544, this.hideRoof, this, this.collayer)








        //this.player = this.game.add.sprite(this.game.world.randomX, 200, 'player');


        this.player = this.game.add.sprite(20, 100, 'char');

        this.player.animations.add('left', [9, 10, 11, 12, 13, 14, 15, 16, 17]);
        // this.player.animations.play('left', 20, true);
        this.player.animations.add('right', [27, 28, 29, 30, 31, 32, 33, 34, 35]);
        // this.player.animations.play('right', 20, true);
        this.player.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
        // this.player.animations.play('up', 20, true);
        this.player.animations.add('down', [18, 19, 20, 21, 22, 23, 24, 25, 26]);
        // this.player.animations.play('down', 20, true);
        this.player.animations.add('idle', [18]);

        // scale the player
        this.player.scale.setTo(0.7, 0.7);

        this.player.anchor.x -= 0.5;
        this.player.anchor.y -= 0.5;





        this.game.physics.arcade.enable(this.player);
        this.player.body.setSize(20, 20, 24, 40);
        this.player.body.collideWorldBounds = true;

        this.game.camera.follow(this.player);

        this.cursors = this.game.input.keyboard.createCursorKeys();

        //this.map.scale.set(3,3);
        this.layer.resizeWorld();

        //this.layer.alpha = 0.5;
        // this.layer2.alpha = 0.8;
        // this.layer3.alpha = 0.95;




    }





    //Code ran on each frame of game
    update() {
        this.game.physics.arcade.collide(this.player, this.collayer);
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -130;
            this.player.animations.play('left', 20, true);
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 130;
            this.player.animations.play('right', 20, true);
        } else if (this.cursors.up.isDown) {
            this.player.body.velocity.y = -130;
            this.player.animations.play('up', 20, true);
        } else if (this.cursors.down.isDown) {
            this.player.body.velocity.y = 130;
            this.player.animations.play('down', 20, true);
        } else {
            this.player.animations.play('idle', 20, true);
        }
    }

    //Called when game is paused
    paused() {

    }

    //You're able to do any final post-processing style effects here.
    render() {


        // this.game.debug.body(this.player);


    }

    //Called when switching to a new state
    shutdown() {

    }

    showRoof(string) {
        this.layer3.visible = true;
        // console.log(this);
        return true;
    }

    hideRoof(string) {
        this.layer3.visible = false;
       
        return true;
    }

}

export default Start;