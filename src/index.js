import Phaser from "phaser";

// Scenes
// import Boot from './Scenes/Boot';
import Loader from './Scenes/Loader';
import MainMenu from './Scenes/MainMenu';
import Play from './Scenes/Play';
import GameOver from './Scenes/GameOver';


const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: '100%',
  height: '100%',
  scene: [
    // Boot,
    Loader,
    MainMenu,
    Play,
    GameOver
  ],
  scale: {
    mode: Phaser.Scale.FIT,
    // width: window.innerWidth * window.devicePixelRatio,
    // height: window.innerHeight * window.devicePixelRatio,
    zoom: window.devicePixelRatio
  },
});