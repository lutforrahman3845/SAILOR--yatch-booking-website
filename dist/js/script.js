// Naviton button clike
const navitonBtns = document.querySelectorAll('.nav-btn');
const hamburgerNav = document.getElementById('hamburger')


navitonBtns.forEach(navBtn => {
    navBtn.addEventListener('click', () => {
         navitonBtns.forEach(btn =>{
            btn.classList.remove('actv');
            btn.classList.add('pending');
         });
         navBtn.classList.remove('pending');
         navBtn.classList.add('actv');
         hamburgerNav.classList.add('hidden')

    })
})

const openHamburger = () =>{
    hamburgerNav.classList.remove('hidden')
}

const closeHamburger = () =>{
    hamburgerNav.classList.add('hidden')
}