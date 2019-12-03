/**
 * 
 * @param {Phaser.Scene} scene The scene to which we add this text
 * @param {number} x X position
 * @param {number} y Y position
 * @param {string} text The text we are showing
 * @param {*} options 
 * @returns {Phaser.GameObjects.Text}
 */
export default function Text(scene, x, y, text, options = {
    fontSize: '43px',
    fontFamily: 'Verdana',
    align: 'center'
}) {
    // Create the text object and center it's origin position.
    const textObj = scene.add.text(x, y, text, options);
    textObj.setOrigin(0.5);

    return text;
}