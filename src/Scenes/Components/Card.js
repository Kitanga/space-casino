const cardOptions = [
    'circles',
    'diamond',
    'q',
    'triangle_up',
    'triangle_down'
];

/**
 * 
 * @param {Phaser.Scene} scene 
 * @param {number} x 
 * @param {number} y 
 * @param {callback} callback 
 */
export default function Card(scene, x, y, callback) {
    const SCALE = .34;
    const card = scene.add.sprite(x, y, 'back');
    card.setOrigin(.5);
    card.setScale(SCALE);
    card.flipToSide = () => {
        scene.tweens.timeline().add({
            targets: card,
            scaleX: 0,
            duration: 125,
            onComplete: () => {
                // Get the card we'll render
                const cardVariant = Math.floor(Math.random() * cardOptions.length);
                card.setTexture(cardOptions[cardVariant]);
                // scene.tweens;
            }
        }).add({
            targets: card,
            scaleX: -SCALE,
            duration: 125
        })/* .add({
            targets: card,
            duration: 250,
            offset: 2000,
            scaleX: 0,
            onComplete: () => {
                // Get the card we'll render
                card.setTexture('back');
            }
        }).add({
            targets: card,
            duration: 250,
            scaleX: SCALE
        }) */.play();
    };
    card.setInteractive();

    card.on('pointerup', card.flipToSide);
}