// navbar functionality //

const burgerMenu = document.querySelector('.hamburger-menu');
const navbarLinks = document.querySelector('.navbar-links');
const container = document.querySelector('.container');
// const navbar = document.querySelector('.nav')


burgerMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('navbarHeight');
    // container.classList.add('fixed-nav');
    if (navbar.classList.contains('fixed-nav') && window.pageYOffset == 0) {
        console.log('yay');
        navbar.classList.remove('fixed-nav');
    } else {
        navbar.classList.add('fixed-nav');
    }
});


// DYNAMICALLY ADDING FIXED NAVBAR //
const navbar = document.querySelector('.nav');
const navItems = document.querySelectorAll('li');

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    // console.log(window.pageYOffset);
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
});


// SCROLL TO RIGHT PLACE //
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (indvLink) {
    indvLink.addEventListener('click', function (e) {
        // prevent default scroll from html <a> tags
        e.preventDefault();
        // navigate to specifc spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        //calculate the nav height
        const navHeight = navbar.getBoundingClientRect().height;

        let position = element.offsetTop - navHeight;

        window.scrollTo({
            top: position,
        });
    });
});

// LANDING PAGE ANIMATION //
const translate = document.querySelectorAll('.translate');
const bigTitle = document.querySelector('.big-title');
const header = document.querySelector('header');
const shadow = document.querySelector('.shadow'); 

let headerHeight = header.offsetHeight; 

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
        
    }); 
    bigTitle.style.opacity = - scroll / (headerHeight / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;
});











const aboutMe = document.querySelector('.my-border');

const techIcons = document.querySelectorAll('.circle');
const techSection = document.querySelector('.tech-stack-section');

const skills = document.querySelector('.skills-container');
const skillsDescription = document.querySelectorAll('.circle-description');
const skillsCircle = document.querySelectorAll('.circleLg');

const projects = document.querySelector('.projects-section');

const contact = document.querySelector('.contact-container');

// MAIN ANIMATION FUNCTION //
const sectionAnimation = (sectionName, animationCalc, className) => {
    const scrollPosition = sectionName.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / animationCalc

    if (scrollPosition < screenPosition) {
        sectionName.classList.add(className)
    }
}

// TECH STACK ANIMATION //
function techAppear(){
    const scrollPosition = techSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 3;


    techIcons.forEach(element => {
        if(scrollPosition < screenPosition){
        element.classList.add('tech-animate');
        }
    });
}

// EXTRA FUNCTION FOR SKILLS ANIMATION //
const skillsDescriptionAppear = () => {

    skillsDescription.forEach(skill => {
        skill.classList.add('skillsD-appear')
    });

    const addCircle = () => {
        skillsCircle.forEach(circle => {
            circle.classList.add('circle-appear')
        });
    }
    setTimeout(addCircle, 200)
}

// LISTENING FOR CORRECT SCROLL HEIGHT TO FIRE EACH ANIMATION //
window.addEventListener('scroll', () => {
    sectionAnimation(aboutMe, 1.8, 'my-border-appear');
    techAppear();
    sectionAnimation(skills, 1.5, 'skills-appear', skillsDescriptionAppear());
    sectionAnimation(projects, 1, 'projects-appear');
    sectionAnimation(contact, 1.5, 'contact-appear');
});  