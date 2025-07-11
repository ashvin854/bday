const envelopeWrapper = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

// Toggle envelope open/close when clicking the heart
heart.addEventListener('click', (event) => {
    event.stopPropagation();
    envelopeWrapper.classList.toggle('flap');
});