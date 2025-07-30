document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navb');
    const bar = document.getElementById('bar');
    const close = document.getElementById('close'); // Make sure you have an element with id="close" in your HTML

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close) { // This part requires you to add a close icon in your HTML with id="close"
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});