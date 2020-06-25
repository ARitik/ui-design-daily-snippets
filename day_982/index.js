const toggle = document.querySelector('.accordion-toggler');
const content = document.querySelector('.accordion-content');
const toggleIcon = document.querySelector('.toggle-icon');

console.log(toggleIcon);


toggle.onclick = () => {
    $(".toggle-icon").toggleClass('fa-plus-circle fa-minus-circle');
    content.classList.toggle('accordion-open');
    console.log(toggleIcon);
}

