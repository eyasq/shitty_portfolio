var lightmode = 'inactive'
var themeSwitch = document.querySelector('#check')
var img = document.querySelector('img')

enableLightmode = ()=>{
    document.body.classList.add('lightmode')
    lightmode = 'active'
    img.src = '/assets/1000750834.jpg'

}
disableLightmode = ()=>{
    document.body.classList.remove('lightmode')
    lightmode = 'inactive'
    img.src = '/assets/BW_Portrait_nozoom.jpg'


    }
themeSwitch.addEventListener('change',()=>{
    lightmode !== "active" ? enableLightmode() : disableLightmode();
})
