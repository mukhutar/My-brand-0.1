const tripple = document.querySelector(".triple");
let item = document.querySelector(".content");
let content = document.querySelector(".menu-list");

tripple.onclick = function(){

    tripple.classList.toggle('active');
    item.classList.toggle('active');
    content.style.display = 'none';
        

}
document.querySelectorAll(".nav-link").forEach(li => li.addEventListener("click",() =>{

    tripple.classList.remove('active');
    item.classList.remove('active');
}))