const selectionSort = async() => {
    if(sorted){
        alert("Already Sorted!")
        return
    }
    toggleBtns()
    let n = bars.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        document.querySelector(`.bar:nth-child(${minIndex + 1})`).style.backgroundColor = 'red'
        for (let j = i + 1; j < n; j++) {
            iterations++
            const currentBar = document.querySelector(`.bar:nth-child(${j + 1})`)
            currentBar.style.backgroundColor = 'white'
            if (bars[j] < bars[minIndex]) {
                if (minIndex !== i) {
                    document.querySelector(`.bar:nth-child(${minIndex + 1})`).style.backgroundColor = 'yellow'
                }
                minIndex = j
                await new Promise(resolve => setTimeout(resolve, wait));
                document.querySelector(`.bar:nth-child(${minIndex + 1})`).style.backgroundColor = 'red'
            }
            await new Promise(resolve => setTimeout(resolve, wait));
            if (currentBar.style.backgroundColor !== 'red') {
                currentBar.style.backgroundColor = 'yellow'
            }

        }

        const el1 = document.querySelector(`.bar:nth-child(${minIndex + 1})`)
        const el2 = document.querySelector(`.bar:nth-child(${i + 1})`)

        // Add a delay
        await new Promise(resolve => setTimeout(resolve, wait));
        swap(el1, el2)
        el1.style.backgroundColor = 'yellow'

        let temp = bars[i]
        bars[i] = bars[minIndex]
        bars[minIndex] = temp

        document.querySelector(`.bar:nth-child(${i + 1})`).style.backgroundColor = 'green'

    }

    document.querySelector(`.bar:nth-child(${n})`).style.backgroundColor = 'green'
    sorted = true
    toggleBtns()
    showResult()
}
const selectionSortBtn = document.querySelector('#selection-sort')
selectionSortBtn.addEventListener('click', selectionSort)