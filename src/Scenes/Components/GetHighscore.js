import Text from './Text';
/**
 * 
 * @param {Phaser.Scene} scene The scene we will add this text to
 * @param {number} x X position
 * @param {number} y Y position
 * @param {*} options Phaser Text config object
 * @returns Phaser.Text
 */
export default function GetHighscore(scene, x, y, options = {
    fontSize: '43px',
    fontFamily: 'Verdana',
    align: 'center'
}) {
    const score = localStorage.getItem('highscore') || 0;
    const highscore = Text(scene, x, y, `Highscore\n${score}`, options);

    return highscore;
}