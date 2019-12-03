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
export default function Card(scene, x, y, callback = () => {}) {
    const card = scene.add.sprite(x, y, 'back');
    card.setScale(.5);
    card.setOrigin(.5);
    card.flipToSide = () => {
        scene.tweens.add({
            targets: card,
            flipX: 0,
            duration: 1000,
            onComplete: () => {
                // Get the card we'll render
                const cardVariant = Math.floor(Math.random() * cardOptions.length);
                card.setTexture(cardOptions[cardVariant]);
                scene.add({
                    targets: card,
                    flipX: -1,
                    duration: 1000,
                    onComplete: callback
                });
            }
        });

        card.setInteractive();

        card.on('pointerup', card.flipToSide);
    }
}