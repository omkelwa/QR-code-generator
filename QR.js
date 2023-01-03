let form = document.querySelector("form")
let input = document.querySelector("input")
let img = document.querySelector("img")


form.addEventListener("submit" , generateQR)

async function generateQR(e){
    e.preventDefault()
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
    img.setAttribute('src', response.url)
    let a = document.querySelector("a")
    value = input.value
    a.setAttribute('href', `https://${value}`)
    a.innerText = value
    console.log(a)
    form.reset()
}