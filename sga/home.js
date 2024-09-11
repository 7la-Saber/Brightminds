window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333';
    } else {
        header.style.backgroundColor = '#54c6cb';
    }
});


document.querySelector('.mainbtn').addEventListener('click', function (e) {
    e.preventDefault(); 
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 1000);
});

