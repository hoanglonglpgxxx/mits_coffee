const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');
const productsItems = document.querySelectorAll('.products__item');
const productsCards = document.querySelectorAll('.products__card');
const sections = document.querySelectorAll('section[id]');

//loader;
onload = () => {
    const load = document.getElementById('load');
    setTimeout(() => {
        load.style.display = 'none';
    }, 4000);
};
function getcurrYear() {
    const spanY = document.getElementsByClassName('curryear');
    const currYear = new Date().getFullYear();
    spanY[0].innerText = currYear;
}
window.addEventListener('DOMContentLoaded', getcurrYear);
//burger bar
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

function linkAction() {
    navMenu.classList.remove('show-menu');

}
navLink.forEach(n => n.addEventListener('click', linkAction));

//scroll xuong 50vh thi doi mau header
function scrollHeader() {
    const header = document.getElementById('header');
    //>=50vh
    if (this.scrollY >= 50)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');

}
window.addEventListener('scroll', scrollHeader);

//filter productscard
productsItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        productsItems.forEach((item) => {
            item.classList.remove('active-product');
        });
        item.classList.add('active-product');
        e.preventDefault();

        const filter = e.target.dataset.filter;
        console.log(filter);
        if (filter == "coffee") {
            // console.log("coffee already");
            getCard(filter);
        } else if (filter == "cake") {
            getCard(filter);

        } else if (filter == "delicacies") {
            getCard(filter);
        } else {
            for (i = 0; i < productsCards.length; i++) {
                productsCards[i].style.display = "block";
            }

        }
    });

});
//chắc hôm sau dùng thư viện để filter cho nhanh :)
function getCard(filter) {
    for (i = 0; i < productsCards.length; i++) {
        if (productsCards[i].className.includes(filter)) {
            productsCards[i].style.display = "block";

        } else {
            productsCards[i].style.display = "none";

        }
    }
}

//show scroll up btn
function showScroll() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', showScroll);

//scroll active section
function scrollActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + '').classList.add('active-section');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + '').classList.remove('active-section');

        }
    });
}
