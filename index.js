const button = document.getElementById("button");
const shareDiv = document.getElementById("share");
const infos = document.getElementById("infos");
const footer = document.getElementsByClassName('div-footer')[0];
button.addEventListener('click', ()=>{
    shareDiv.classList.toggle("hidden");
    button.classList.toggle("clicked");
    footer.classList.toggle("footer-color");
    infos.classList.toggle("infos-hidden-respo");
})