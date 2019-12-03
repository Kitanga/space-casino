import {
    Scene
} from 'phaser';

// Components
import CreateBg from './Components/CreateBg';
import GetHighscore from './Components/GetHighscore';
import Button from './Components/Button';
import Text from './Components/Text';
import Card from './Components/Card';

export default class GameOver extends Scene {
    constructor() {
        super({
            key: 'play'
        });
    }

    create() {
        console.log('Game Over');

        const {
            centerX,
            centerY,
            width,
            height
        } = this.cameras.main;

        this.bg = CreateBg(this);

        // Current score
        this.currentScore = 700;

        // Current Score
        this.score = Text(this, centerX, height * .25, `Points\n${this.currentScore}`);

        // Show cards
        const TOTAL_CARDS = 5;
        this.cards = new Array(TOTAL_CARDS);

        for (let index = 0; index < TOTAL_CARDS; index++) {
            let x = width / TOTAL_CARDS * (index + 1);
            this.cards[index] = Card(this, x / 2, centerY);
        }

        // Betting amount
        this.bet = 10;
        this.reduceBetBtn = Button(this, width * .34, height * .75, 'arrowLeft', this.reduceBet);
        this.betText = Text(this, centerX, height * .75, this.bet);
        this.increaseBetBtn = Button(this, width * .7, height * .75, 'arrowRight', this.increaseBet);
    }
    reduceBet() {
        // c
    }
    increaseBet() {
        // c
    }
}