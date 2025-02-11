document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope-wrapper');
    const audio = document.getElementById('song');
    let isOpen = false;

    envelope.addEventListener('click', () => {
        if (!isOpen) {
            envelope.classList.add('flap');
            audio.play();
        } else {
            envelope.classList.remove('flap');
            audio.pause();
            audio.currentTime = 0; // Reset the audio to the beginning
        }
        isOpen = !isOpen;
    });
});
