const buttonWtd = document.getElementById("buttonWtd")
const wTd = document.getElementById("wtd")
const showMenu = document.getElementById("showmenu")
// buttonWtd.onclick = ()=>{
//     if(wTd.style.display === "inline-block"){
//         wTd.style.display = "none"
//         showMenu.style.display === "inline-block"
//     }else{
//         wTd.style.display = location.href = "hello.html"
//     }
// }
unshowMenu().onclick = ()=>{
    wTd.style.display = "none"
}
