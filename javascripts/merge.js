const merge = async (l, mid, r) => {
    left = [], right = []
    for(let i = l ; i <= mid ; i++){
        iterations++
        left.push(bars[i]);
    }
    for(let i = mid+1 ; i <= r ; i++){
        iterations++
        right.push(bars[i])
    }
    left.push(Number.MAX_SAFE_INTEGER)
    right.push(Number.MAX_SAFE_INTEGER)

    let i = 0, j = 0, k = l;
    while(k <= r){
        iterations++
        const ele = document.querySelector(`.bar:nth-child(${k + 1})`)
        if(left[i] < right[j]){
            bars[k] = left[i];
            await new Promise(resolve => setTimeout(resolve, wait));
            ele.style.height = `${left[i] * scaleUpVal}px`
            ele.style.backgroundColor = 'green'
            i++;
        }
        else{
            bars[k] = right[j];
            await new Promise(resolve => setTimeout(resolve, wait));
            ele.style.height = `${right[j] * scaleUpVal}px`
            ele.style.backgroundColor = 'green'
            j++;
        }
        k++;
    }
}


const mergeSortUtil = async (l, r) => {
    recursions++
    if(l < r){
        let mid = l + parseInt((r - l) / 2)
        await mergeSortUtil(l, mid)
        await mergeSortUtil(mid+1, r)
        await merge(l, mid, r)
    }
}

const mergeSort = async () => {
    if(sorted){
        alert("Already Sorted!")
        return
    }
    toggleBtns()
    let n = bars.length;
    await mergeSortUtil(0, n-1);
    sorted = true
    toggleBtns()
    showResult()
}

const mergeSortBtn = document.querySelector('#merge-sort')
mergeSortBtn.addEventListener('click', mergeSort)