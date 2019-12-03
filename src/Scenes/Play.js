import {
    Scene
} from 'phaser';

// Components
import CreateBg from './Components/CreateBg';
import GetHighscore from './Components/GetHighscore';
import Button from './Components/Button';
import Text from './Components/Text';
import Card from './Components/Card';

// Utilities
import { CheckAudio } from './utils';

export default class GameOver extends Scene {
    constructor() {
        super({
            key: 'play'
        });
    }

    create() {
        console.log('Start!');

        const audioMuted = CheckAudio(this);

        // Play audio
        this.sound.add('mus_play').play({
            volume: .7
        });

        const {
            centerX,
            centerY,
            width,
            height,
            displayWidth
        } = this.cameras.main;

        // Create the background
        this.bg = CreateBg(this);

        // Current score
        this.currentScore = 700;

        // Current Score
        this.score = Text(this, centerX, height * .25, `Points\n${this.currentScore}`);

        // Show cards
        const TOTAL_CARDS = 5;
        this.cards = new Array(TOTAL_CARDS);

        // Cards' scale
        const SCALE = .34;
        // A quarter the width of a card
        const OFFSET = (this.textures.get('back').getSourceImage().width * SCALE) / 2;

        console.log("The offset we'll apply to the elements:", OFFSET);

        for (let index = 0; index < TOTAL_CARDS; index++) {
            let x = ((width - OFFSET) / TOTAL_CARDS) * (index + .375) + OFFSET;
            this.cards[index] = Card(this, x, centerY);
        }

        // Betting amount
        this.bet = 10;
        this.reduceBetBtn = Button(this, width * .34, height * .75, 'arrowLeft', this.reduceBet);
        this.betText = Text(this, centerX, height * .75, this.bet);
        this.increaseBetBtn = Button(this, width * .7, height * .75, 'arrowRight', this.increaseBet);

        // How much we can increase or decrease bet by
        this.betReduction = 10;
    }

    reduceBet() {
        // c
        this.bet = Math.max(10, this.bet - this.betReduction);
        this.betText.setText(this.bet);
    }

    increaseBet() {
        // c
        this.bet = Math.min(100, this.bet + this.betReduction);
        this.betText.setText(this.bet);

    }
}