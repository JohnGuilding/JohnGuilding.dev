const animateFunction = (calc, className) => {
    const scrollPosition = aboutMe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / calc;
    
    if (scrollPosition < screenPosition) {
        className.classList.add('className');
    }
}

window.addEventListener('scroll', animateFunction(1.8, aboutMe));