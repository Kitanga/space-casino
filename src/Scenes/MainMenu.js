import Phaser from 'phaser';
import Button from './Components/Button';
import CreateBg from './Components/CreateBg';
import GetHighscore from './Components/GetHighscore';

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({
            key: 'menu'
        });
    }

    create() {
        console.log('Main Menu', this.data);

        // Set the sound mute/unmute prop to whatever the user set the last time
        const audioMuted = JSON.parse(localStorage.getItem('muted'));

        console.log("Audio is:", audioMuted ? "muted" : "unmuted");
        console.log(audioMuted, typeof audioMuted);

        if (typeof audioMuted === 'boolean') {
            this.sound.setMute(audioMuted);
        }

        let {
            centerX,
            centerY,
            width,
            height
        } = this.cameras.main;

        // Add the background image to our scene
        this.bg = CreateBg(this);

        // Audio button
        this.aud_control = Button(this, 25, 25, audioMuted ? 'musicOff' : 'musicOn', () => {
            console.log('Changing audio mute to', !this.sound.mute);
            this.switch.play();
        });

        // Get the menu music and start playing it
        this.menuMusic = this.sound.add('mus_menu', {
            loop: true
        });

        // Sound effects we'll be needing
        this.click = this.sound.add('sfx_click');

        // When we click on play button then this audio will play and when it finishes playing move to the next scene
        this.click.on('complete', () => {
            // this.sound.stopAll();
            this.scene.start('play');
        })

        this.switch = this.sound.add('sfx_switch');

        // When the audio controller (aka mute button) is clicked we should play the switch audio sound, and then mute/unmute audio
        this.switch.on('complete', () => {
            let muted = false;
            // If the audio is already muted
            if (this.sound.mute) {
                muted = false;
            } else {
                muted = true;
            }

            this.aud_control.setTexture(muted ? 'musicOff' : 'musicOn');
            this.sound.setMute(muted);
            localStorage.setItem('muted', JSON.stringify(muted));
        }, this);

        // Play the audio
        this.menuMusic.play();

        // Place the logo...
        this.logo = this.add.image(centerX, centerY / 3, 'logo');
        // this.logo.setScale(2.5);

        // ...Start Button
        this.startButton = Button(this, centerX, centerY, 'play', () => {
            console.log('Started game');
            this.click.play();
        });

        this.startButton.setScale(.5);

        // ...highscore
        this.highscore = GetHighscore(this, centerX, height * .75);

        // this.highscore.getBottomCenter

        // this.tweens.add({
        //     targets: logo,
        //     scaleX: -1,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });
    }
    update() {}
}