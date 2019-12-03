/**
 * 
 * @param {Phaser.Scene} scene Scene
 * @param {number} x X position
 * @param {number} y Y position
 * @param {string} key Button sprite/image
 * @param {*} options Phaser text object config
 * @param {function} onClick Function called when button clicked
 * 
 * @returns Phaser.GameObjects.Image
 */
export default function Button(scene, x, y, key, onClick = () => {}) {
    // Create an interactive text object
    let btn = scene.add.image(x, y, key);
    btn.setInteractive();

    // Add event listener
    btn.on('pointerup', onClick, scene);

    return btn;
}