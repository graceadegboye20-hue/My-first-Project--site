window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    setTimeout(() => {
        content.classList.add('appear');
    }, 300);
});