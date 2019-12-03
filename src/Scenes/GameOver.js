import {
    Scene
} from 'phaser';

// Components
import CreateBg from './Components/CreateBg';
import GetHighscore from './Components/GetHighscore';
import Button from './Components/Button';
import Text from './Components/Text';

// Utilities
import { CheckAudio } from './utils';

export default class GameOver extends Scene {
    constructor() {
        super({
            key: 'gameover'
        });
    }

    init(data = {
        score: 0
    }) {
        console.log("Data:", data);

        this.currentScore = data.score;

        // Set the new highscore if our score is higher than the current highscore
        if (this.currentScore > JSON.parse(localStorage.getItem('highscore'))) {
            localStorage.setItem('highscore', JSON.stringify(this.currentScore));
        }
    }

    create() {
        console.log('Game Over');

        const audioMuted = CheckAudio(this);

        // Play audio
        this.sound.add('mus_play').play();

        const {
            centerX,
            centerY,
            width,
            height
        } = this.cameras.main;

        this.bg = CreateBg(this);

        // Current Score
        this.score = Text(this, centerX, height * .25, `Score\n${this.currentScore}`);

        // Home and restart buttons
        this.homeBtn = Button(this, width * .34, centerY, 'home', () => {
            this.scene.start('menu');
        });
        this.restartBtn = Button(this, width * .7, centerY, 'restart', () => {
            this.scene.start('play');
        });

        // ...highscore
        this.highscore = GetHighscore(this, centerX, height * .75);
    }
}