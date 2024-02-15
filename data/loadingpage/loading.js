let backbtn = document.getElementById("back-btn")


function randomtime() {
    let randomnumber = Math.round(Math.random() * (3000 - 1500) + 1500)
    return randomnumber
}

function changepage() {
    if(location.pathname === "/data/loadingpage/loading.html"){
        window.location.pathname = "../../index.html"
    }
}

setInterval(() => {
    changepage()
}, randomtime());