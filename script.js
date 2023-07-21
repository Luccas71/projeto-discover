function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //  *pegar a tag img
    const img = document.querySelector('#profile img')
    //  * trocar avatar light mode
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        //  * trocar avatar dark mode
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
    
     

}