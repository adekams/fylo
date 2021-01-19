let moon = document.querySelector('#switch i')
    moon.addEventListener("click", changeMode)

    function changeMode () {
        document.body.classList.toggle('dark-theme')
        
        let sections = Array.from(document.querySelectorAll("section"))
        sections.map(section => {
            section.classList.toggle('dark-theme')
        })

        let sectionsEven = Array.from(document.querySelectorAll("main section:nth-child(even)"))

        sectionsEven.map(section =>{
            // console.log("even section")
            section.classList.toggle("dark-theme")
        })

        // sections.forEach(section =>
            
    }