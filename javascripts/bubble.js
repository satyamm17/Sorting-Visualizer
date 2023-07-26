const bubbleSort = async() => {
    if(sorted){
        alert("Already Sorted!")
        return
    }
    toggleBtns()
    let n = bars.length;
    for (let i = 0; i < n - 1; i++) {
        let cnt = 0
        for (let j = 0; j < n - i - 1; j++) {
            cnt++
            iterations++
            if (bars[j] > bars[j + 1]) {
                const el1 = document.querySelector(`.bar:nth-child(${j + 1})`)
                const el2 = document.querySelector(`.bar:nth-child(${j + 2})`)

                //Change Color to red
                el1.style.backgroundColor = 'red'
                el2.style.backgroundColor = 'red'

                //Add a delay
                await new Promise(resolve => setTimeout(resolve, wait));

                //Swap Array elements
                [bars[j], bars[j + 1]] = [bars[j + 1], bars[j]]

                //Swap DOM elements
                swap(el1, el2)

                //Change color back to original
                el1.style.backgroundColor = 'yellow'
                el2.style.backgroundColor = 'yellow'
            }
        }

        const lastBar = document.querySelector(`.bar:nth-child(${n - i})`)
        lastBar.style.backgroundColor = 'green'
        if(cnt == 0) iterations++
    }

    document.querySelector(`.bar:nth-child(1)`).style.backgroundColor = 'green'
    sorted = true;
    toggleBtns()
    showResult()
}

const bubbleSortBtn = document.querySelector('#bubble-sort')
bubbleSortBtn.addEventListener('click', bubbleSort)