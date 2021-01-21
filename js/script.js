
let moon = document.querySelector('#switch i')
moon.addEventListener("click", changeMode);

function changeMode () {
    document.body.classList.toggle('dark-theme');
    
    let sections = Array.from(document.querySelectorAll("section"))
    sections.map((section) => {
        section.classList.toggle('dark-theme');

    })
}