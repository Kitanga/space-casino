export function CheckAudio(scene) {
    // First stop all audio, if we are exectuting this function then this must be during some transition to another scene.
    scene.sound.stopAll();
    
    // Set the sound mute/unmute prop to whatever the user set the last time
    const audioMuted = JSON.parse(localStorage.getItem('muted'));

    if (typeof audioMuted === 'boolean') {
        scene.sound.setMute(audioMuted);
    }

    return audioMuted;
}