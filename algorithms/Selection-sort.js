async function selection_sort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = i; j < num; j++) {
            all_bars[i].style.background = "red";
            all_bars[j].style.background = "red";
            if(arr[j] < arr[i]) {
                await new Promise(resolve => setTimeout(() => {resolve(), 2000}));
                var minimum = arr[i];
                arr[i] = arr[j];
                arr[j] = minimum;
                swap(all_bars[i], all_bars[j]);
            }
            all_bars[i].style.background = "yellow";
            all_bars[j].style.background = "yellow";
        }
        all_bars[i].style.background = "white";
    }
}