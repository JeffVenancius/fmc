let idx = 0

const properties = [
    "<p>Há 10 minutos da Unicamp, o Flat Monte Carlo fica em um lugar arborizado, com uma ciclovia logo a frente.</p>",
    "<p>Já na entrada contamos com a segurança de</p><p>uma portaria monitorada 24h. </p><p>No quesito comodidade, temos aquecimento solar, Internet fibra ótica, ar condicionado e muito mais.</p>",
    "<p>A mobilia planejada e a iluminação em led decor é de encher os olhos. Os novissimos eletroeletronicos, é claro, estarão ao seu dispor.</p>",
    "<p>Temos ainda uma cozinha completa, com lava e seca, refrigerador duplex, microondas, fritadeira elétrica e até mesmo um Nespresso.</p>",
    "<p>O aconchego de um lar e o cuidado de querer bem.</p><p>Conheça e se apaixone.</p>"
]
const imgs = ["assets/2.jpg", "assets/1.jpg","assets/3.jpg","assets/4.jpg", "assets/5.jpg"]
let items = imgs.map((e,i) => `<div class="slider__item" style="translate: ${-100 * idx}%; background-image: url('${e}')"><div class="props">${properties[i]}</div></div>`)
let pages

document.querySelector(".slider__container").innerHTML = items.join("")
updateSlide()
move()

function turnPage(turnTo) {
    idx = turnTo > 0 ? idx === items.length - 1 ? 0 : idx + 1 : idx === 0 ? items.length - 1 : idx - 1
    updateSlide()
    move()
}


function setPage(page) {
    idx = page
    updateSlide()
    move()
}

function updateSlide() {
    document.querySelectorAll(".slider__item").forEach(e => {
        const translation = -100 * idx
        e.style.translate =  `${translation}%`
    })
    pages = items.map((_,i) => `<button onClick=setPage(${i}) class="page ${idx === i ? "page__selected" : ""}" ></button>`)    
}


function move() {
    document.querySelector(".pages").innerHTML = pages.join("")
}