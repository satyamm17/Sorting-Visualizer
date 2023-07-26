const bars = []
const maxWidth = 1000
const scaleUpVal = 2.5
const padding = 0.5
const N = 100
let sorted = true
let absoluteWait = 500
let iterations = 0, recursions = 0

const sortResult = document.querySelector('.sort-result')
const barsDiv = document.querySelector('.bars')
const rangeSelect = document.querySelector('#customRange')
let wait = parseInt(absoluteWait/(rangeSelect.valueAsNumber))


rangeSelect.addEventListener('input', (e) => {
    wait = parseInt(absoluteWait/(e.target.valueAsNumber))
    console.log(wait);
})

const createBars = () => {
    iterations = 0
    recursions = 0
    sortResult.setAttribute('hidden', true)
    sortResult.firstElementChild.innerHTML = "Number Of Recusrsive Calls = "
    sortResult.lastElementChild.innerHTML = "Number Of Iterations = "
    sorted = false
    barsDiv.innerHTML = ""
    bars.splice(0, bars.length)

    for (let i = 0; i < N; i++) {
        let randNumber = Math.floor(Math.random() * 100) + 1
        bars.push(randNumber)
    }

    for (let i = 0; i < N; i++) {
        const bar = document.createElement('div')
        bar.style.height = `${bars[i] * scaleUpVal}px`
        bar.style.width = `${maxWidth / bars.length}px`
        bar.style.backgroundColor = 'yellow'
        bar.classList.add('bar')
        barsDiv.appendChild(bar)
    }
}

const swap = (el1, el2) => {
    const style1 = window.getComputedStyle(el1)
    const style2 = window.getComputedStyle(el2)

    const transform1 = style1.getPropertyValue('height')
    const transform2 = style2.getPropertyValue('height')

    el1.style.height = transform2
    el2.style.height = transform1
}

const newArrBtn = document.querySelector('#new-array')
newArrBtn.addEventListener('click', createBars)


const toggleBtns = () => {
    btns = document.querySelectorAll('.btn')
    btns.forEach(element => {
        element.disabled = !element.disabled
    });
}

const showResult = () => {
    const text1 = document.createTextNode(`${recursions}`)
    const text2 = document.createTextNode(`${iterations}`)
    sortResult.firstElementChild.appendChild(text1)
    sortResult.lastElementChild.appendChild(text2)
    sortResult.toggleAttribute('hidden')
}