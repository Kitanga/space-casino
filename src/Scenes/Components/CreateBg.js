/**
 * 
 * @param {Phaser.Scene} scene The scene we are adding the background to
 * @returns Phaser.GameObjects.Image
 */
export default function CreateBg(scene) {
    const {
        centerX,
        centerY
    } = scene.cameras.main;
    
    // Add the background image
    const bg = scene.add.image(centerX, centerY, 'bg');
    bg.setOrigin(0.5);
    bg.setScale(window.devicePixelRatio);

    return bg
}