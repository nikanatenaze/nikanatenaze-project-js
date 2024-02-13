

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

console.log(products);