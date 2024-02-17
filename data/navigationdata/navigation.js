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

// user image 

let navuserimage = document.querySelector(".user-image")
let navimgatribute = document.createAttribute("src")
navimgatribute.value = localStorage.getItem("Userimage")


let checkas = localStorage.getItem("Userimage")

console.log(Boolean(checkas));

setInterval(() => {
    if (checkas) {
        navusername.innerText = localStorage.getItem("UserName")
        navimgatribute.value = localStorage.getItem("Userimage")
        navuserimage.setAttributeNode(navimgatribute)
    }
    else {
        window.location.reload
        navimgatribute.value = "https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png"
    }
}, 100);
    
