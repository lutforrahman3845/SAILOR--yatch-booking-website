//Navigation button clike
const navigationBtns = document.querySelectorAll('.nav-btn');
navigationBtns.forEach(navBtn => {
    navBtn.addEventListener('click', () => {
         navigationBtns.forEach(btn =>{
            btn.classList.remove('actv');
            btn.classList.add('pending');
         });
         navBtn.classList.remove('pending');
         navBtn.classList.add('actv');
         hamburgerNav.classList.add('hidden')

    })
})
// mobile navigation

const hamburgerNav = document.getElementById('hamburger')
const openHamburger = () =>{
    hamburgerNav.classList.remove('hidden')
}
const closeHamburger = () =>{
    hamburgerNav.classList.add('hidden')
}

