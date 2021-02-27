async function insertion_sort(arr) {
    for(var i = 1; i < arr.length; i++) {
        // console.log(i);
        var key = arr[i];
        var j = i-1;

        while(j >= 0 && arr[j] > arr[j+1]) {
            all_bars[j+1].style.background = "white";
            await new Promise(resolve => setTimeout(() => {resolve(), 1000}));
            all_bars[j].style.background = "white";
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swap(all_bars[j], all_bars[j+1]);
            j--;
        }
    }
    console.log(arr);
}