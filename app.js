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

// ABOUT ME ANIMATION //

const aboutMe = document.querySelector('.my-border');

function scrollAppear(){
    // creates a variable that measure px distance from top of site to top of selected element
    const scrollPosition = aboutMe.getBoundingClientRect().top;
    // height of screen in a variable. divide by 1.5 to call function further up the screen
    const screenPosition = window.innerHeight / 1.8;

    if(scrollPosition < screenPosition) {
        aboutMe.classList.add('my-border-appear');
    }
}
window.addEventListener('scroll', scrollAppear);

// TECH STACK ANIMATION //

const techIcons = document.querySelectorAll('.circle');
const techSection = document.querySelector('.tech-stack-section');

function techAppear(){
    const scrollPosition = techSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 3;


    techIcons.forEach(element => {
        if(scrollPosition < screenPosition){
        element.classList.add('tech-animate');
        }
    });
}
window.addEventListener('scroll', techAppear);

// MY SKILLS ANIMATION //

const skills = document.querySelector('.skills-container');
const skillsDescription = document.querySelectorAll('.circle-description');
const skillsCircle = document.querySelectorAll('.circleLg');

function skillsAppear(){
    const scrollPosition = skills.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if(scrollPosition < screenPosition) {
        skills.classList.add('skills-appear');
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
}
window.addEventListener('scroll', skillsAppear);

//PROJECTS ANIMATION //

const projects = document.querySelector('.projects-section');

function projectsAppear(){
    const scrollPosition = projects.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1;

    if(scrollPosition < screenPosition) {
        projects.classList.add('projects-appear');
        console.log('working');
    }
}

window.addEventListener('scroll', projectsAppear);

// CONTACT ANIMATION //

const contact = document.querySelector('.contact-container');

function contactAppear(){
    const scrollPosition = contact.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1;

    if(scrollPosition < screenPosition) {
        contact.classList.add('contact-appear');
    }
}

window.addEventListener('scroll', contactAppear);