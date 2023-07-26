const partition = async (l, r) => {
    let i = l - 1;
    let key = bars[r];
    for(let j = l ; j < r ; j++){
        iterations++
        await new Promise(resolve => setTimeout(resolve, wait));
        document.querySelector(`.bar:nth-child(${j + 1})`).style.backgroundColor = 'red'
        if(bars[j] < key){
            i++;
            const el1 = document.querySelector(`.bar:nth-child(${i + 1})`)
            const el2 = document.querySelector(`.bar:nth-child(${j + 1})`)
            el1.style.backgroundColor = 'red'
            let t = bars[i];
            bars[i] = bars[j];
            bars[j] = t;
            await new Promise(resolve => setTimeout(resolve, wait));
            swap(el1, el2)
            el1.style.backgroundColor = 'yellow'
            el2.style.backgroundColor = 'yellow'
        }
        else{
            document.querySelector(`.bar:nth-child(${j + 1})`).style.backgroundColor = 'yellow'
        }
    }
    const el1 = document.querySelector(`.bar:nth-child(${i + 2})`)
    const el2 = document.querySelector(`.bar:nth-child(${r + 1})`)
    let t = bars[i+1]
    bars[i+1] = bars[r];
    bars[r] = t;
    await new Promise(resolve => setTimeout(resolve, wait));
    swap(el1, el2)
    return i + 1
}

const quickSortUtil = async (l, r) => {
    recursions++
    if(l <= r){
        let k = await partition(l, r)
        const el = document.querySelector(`.bar:nth-child(${k + 1})`);
        await new Promise(resolve => setTimeout(resolve, wait));
        el.style.backgroundColor = 'green'
        await quickSortUtil(l, k-1)
        await quickSortUtil(k+1, r)
    }
}

const quickSort = async () => {
    if(sorted){
        alert("Already Sorted!")
        return
    }
    toggleBtns()
    let n = bars.length;
    await quickSortUtil(0, n-1);
    sorted = true
    toggleBtns()
    showResult()
}

const quickSortBtn = document.querySelector('#quick-sort')
quickSortBtn.addEventListener('click', quickSort)