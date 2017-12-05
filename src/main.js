import Begin from './states/begin';
import Boot from './states/boot';
import Game from './states/game';
import Gameover from './states/gameover';
import Menu from './states/menu';
import Preloader from './states/preloader';
import Start from './states/start';


const game = new Phaser.Game(280, 180, Phaser.AUTO, 'topdownshooter-game');

game.state.add('begin', new Begin());
game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('gameover', new Gameover());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());
game.state.add('start', new Start());

game.state.start('boot');
