

let cardpg = document.getElementById("cards")

console.log(fetch("../../data/productsApi/products.json").then(item => item.json()).then(info => getcards(info)));

function getcards(e) {
    e.forEach(element => {
        cardpg.innerHTML += `<div class="product-card">
        <img class="card-img" src="${element.image}" alt="">
        <p class="card-title">${element.name}</p>
        <p class="card-stars">${stars(element.stars)}</p>
        <p class="card-brand">By: ${element.brand}</p>
        <p class="card-gender">${element.gender}'s</p>
        <p class="card-sell">${element.sell}</p>
        <p class="card-sell">price: ${element.price}$</p>
        <button class="card-more-btn">More</button>
    </div>`
    });
}

function stars(count) {
    let counter = 0
    let string = ''
    for(let i = 0; i < count; i++){
        counter++
    }
    function getstars() {
        for(let i = 0; i < counter; i++) {
            string += `<i class="fa-solid fa-star"></i>`
        }
    }
    getstars()
    return string
}

// სერტიროვკას ლოგიკა

console.log(cardpg);

let minpriceinput = document.getElementById("minprice")
let maxpriceinput = document.getElementById("maxprice")
let sertsearchbtn = document.getElementById("search-btn")

let searchbyname = document.getElementById("search-by-name-input")


sertsearchbtn.addEventListener("click", function(){
    cardpg.innerHTML = ""
    fetch("../../data/productsApi/products.json").then(info => info.json()).then(infoin => showprisedcards(infoin))
    function showprisedcards(e) {
        e.forEach(info => {
            if(info.price <= maxpriceinput.value && info.price >= minpriceinput.value) {
                cardpg.innerHTML += `<div class="product-card">
                <img class="card-img" src="${info.image}" alt="">
                <p class="card-title">${info.name}</p>
                <p class="card-stars">${stars(info.stars)}</p>
                <p class="card-brand">By: ${info.brand}</p>
                <p class="card-gender">${info.gender}'s</p>
                <p class="card-sell">${info.sell}</p>
                <p class="card-sell">price: ${info.price}$</p>
                <button class="card-more-btn">More</button>
            </div>`
            }
        })
        if(maxpriceinput.value === "" && minpriceinput.value === "") {
            console.log(123);
            e.forEach(info2 => {
                cardpg.innerHTML += `<div class="product-card">
                <img class="card-img" src="${info2.image}" alt="">
                <p class="card-title">${info2.name}</p>
                <p class="card-stars">${stars(info2.stars)}</p>
                <p class="card-brand">By: ${info2.brand}</p>
                <p class="card-gender">${info2.gender}'s</p>
                <p class="card-sell">${info2.sell}</p>
                <p class="card-sell">price: ${info2.price}$</p>
                <button class="card-more-btn">More</button>
            </div>`
            })
        }
    }
})

// სახელით ძებნა


