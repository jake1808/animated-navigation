const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control navigation animation
function navAnimation(d1, d2) {

    navItems.forEach((nav, index) => {
        nav.classList.replace(`slide-${d1}-${index + 1}`, `slide-${d2}-${index + 1}`)
    })
}

function toggleNav() {
    // Toggle: Menu bars open/closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate in the overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // Animate in - Nav items
        navAnimation('out', 'in');
    } else {
        // Animate Out - overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate out - Nav items
        navAnimation('in', 'out');
    }
}


// Event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav)
})