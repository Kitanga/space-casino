import Phaser from 'phaser';

// Audio
import mus_menu from './../assets/snd/menu.ogg';
import sfx_click from './../assets/snd/click.ogg';
import sfx_draw from './../assets/snd/draw.ogg';
import sfx_flip from './../assets/snd/flip.ogg';
import mus_play from './../assets/snd/play.ogg';
import sfx_switch from './../assets/snd/switch.ogg';
import sfx_bonus from './../assets/snd/bonus.ogg';

// Images
import bg from './../assets/img/bg.png';
import logo from './../assets/img/logo.png';
// Icons
import highscore from './../assets/img/icons/highscore.png';
import home from './../assets/img/icons/home.png';
import musicOff from './../assets/img/icons/musicOff.png';
import musicOn from './../assets/img/icons/musicOn.png';
import arrowLeft from './../assets/img/icons/arrowLeft.png';
import arrowRight from './../assets/img/icons/arrowRight.png';
import play from './../assets/img/icons/play.png';
import restart from './../assets/img/icons/restart.png';
// Cards
import back from './../assets/img/card/back.png';
import circles from './../assets/img/card/circles.png';
import diamond from './../assets/img/card/diamond.png';
import q from './../assets/img/card/q.png';
import triangle_up from './../assets/img/card/triangle_up.png';
import triangle_down from './../assets/img/card/triangle_down.png';

export default class Loader extends Phaser.Scene {
    constructor() {
        super({
            key: 'loader'
        });
    }

    preload() {
        // Get the centerX and centerY of the screen in order for us to place the loader on screen
        const {
            centerX,
            centerY
        } = this.cameras.main;

        // Set the general default for our progress bar
        const w = window.innerWidth * .7,
            h = 10,
            x = centerX - (w / 2),
            y = centerY;

        // Loading bar graphic
        this.progressBarBg = this.add.graphics()
            .fillStyle(0xcdcdcd)
            .fillRect(x, y, w, h);

        // Create the loading bar graphic
        this.progressBar = this.add.graphics()
            .fillStyle(0x78be20)
            .fillRect(x, y, w * .1, h);

        // Now when the loader updates, update the graphic
        this.load.on('progress', progress => {
            console.log('Progress:', progress);
            this.progressBar
                .clear()
                // Do not remove the line below, you actually need to remove the 
                .fillStyle(0x78be20)
                .fillRect(x, y, w * progress, h);
        });

        // We are done loading initial assets, remove the two preloading graphics, and move on to the main menu
        this.load.on('complete', () => {
            console.log('Done loading');
            this.progressBar.destroy();
            this.progressBarBg.destroy();
            this.scene.start('menu');
        });

        // I'll load everything
        // Audio files
        this.load.audio('mus_menu', mus_menu);
        this.load.audio('mus_play', mus_play);
        this.load.audio('sfx_click', sfx_click);
        this.load.audio('sfx_draw', sfx_draw);
        this.load.audio('sfx_flip', sfx_flip);
        this.load.audio('sfx_switch', sfx_switch);
        this.load.audio('sfx_bonus', sfx_bonus);

        // Images
        this.load.image('bg', bg);
        this.load.image('logo', logo);
        // Icons
        this.load.image('highscore', highscore);
        this.load.image('home', home);
        this.load.image('musicOff', musicOff);
        this.load.image('musicOn', musicOn);
        this.load.image('arrowLeft', arrowLeft);
        this.load.image('arrowRight', arrowRight);
        this.load.image('play', play);
        this.load.image('restart', restart);
        // Cards
        this.load.image('back', back);
        this.load.image('circles', circles);
        this.load.image('diamond', diamond);
        this.load.image('q', q);
        this.load.image('triangle_up', triangle_up);
        this.load.image('triangle_down', triangle_down);
    }
}