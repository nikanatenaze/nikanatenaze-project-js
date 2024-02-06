let burgerbar = document.getElementById("burger-bar")
let navigationslider = document.getElementById("b-slider")

burgerbar.addEventListener("click", function(){
    navigationslider.classList.toggle("nav_element-addon")
})

// check login navigation

let loginbtn = document.querySelector("las")

let checklogin = localStorage.getItem("Logined");
let afterloginbuttons = document.getElementById("after-login")
let navusername = document.getElementById("username-nav")
let navbuttonsbeforelogin = document.getElementById("nav-buttons-before")
let check = checklogin

console.log(check);

function checklogins() {
    if (checklogin === "ki") {
        afterloginbuttons.style.display = "flex"
        navbuttonsbeforelogin.style.display = "none"
        navusername.innerText = localStorage.getItem("UserName")
    }
    else if (checklogin === "ara") {
        afterloginbuttons.style.direction = "none"
        navbuttonsbeforelogin.style.display = "flex"
    }
}

let logoutnav = document.getElementById("logout-icon")

logoutnav.addEventListener("click", function(){
    localStorage.setItem("Logined", "ara")
    location.reload()
})

checklogins()

setInterval(checklogins(), 1000)