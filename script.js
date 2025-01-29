let idx = 0

const properties = [
    "<div class='props props--1'><p>Há 500 metros da Unicamp, sua melhor opção para morar e estudar.</p></div>",
    "<div class='props props--2'><p>- Portaria monitorada 24h </p><p>- Aquecimento solar</p><p>- Internet fibra óptica</p><p>- Ar condicionado</p></div>",
    "<div class='props props--3'><p>- Mobília planejada</p><p>- Iluminação em led decor</p><p>- Equipadas com eletrodomésticos</p></div>",
    "<div class='props props--4'><p>- Lava e seca</p><p>- Refrigerador duplex</p><p>- Microondas</p><p>- Fogão e Fritadeira elétricos</p><p>- Cafeteira Nespresso</p></div>",
    "<div class='props props--5'><p>Viva a experiência Monte Carlo Flat.</p></div>"
]
const imgs = ["assets/2.jpg", "assets/1.jpg","assets/3.jpg","assets/4.jpg", "assets/5.jpg"]
let items = imgs.map((e,i) => `<div class="slider__item" style="translate: ${-100 * idx}%; background-image: url('${e}')">${properties[i]}</div>`)
let pages


document.querySelector(".slider__container").innerHTML = items.join("")

updateSlide()
move()

setInterval(() => turnPage(idx + 1), 5000);

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