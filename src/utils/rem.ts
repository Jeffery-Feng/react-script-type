
function font ():void {
    //按750的设计稿做
    //750px = 7.5rem;100px = 1rem
    document.documentElement.style.fontSize = document.documentElement.clientWidth/ 7.5 + "px"
    if ( document.documentElement.clientWidth/ 7.5 < 100 ) {
        document.documentElement.style.fontSize = document.documentElement.clientWidth/ 7.5 + "px"
    } else{
        document.documentElement.style.fontSize = "100px"
    }   
}
// font()

window.onresize = font

export default font
