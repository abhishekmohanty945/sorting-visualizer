var animations = [];
function quick_sort(arr) {
    animations = [];
    // console.log(arr);
    quick_sort_helper(arr, 0, arr.length-1,animations);
    // console.log(arr);
    animate(animations);
}

function quick_sort_helper(arr, low, high,animations) {
    if(low < high) {
        var p = partition(arr, low, high,animations);
        quick_sort_helper(arr, low, p-1,animations);
        quick_sort_helper(arr, p+1, high,animations);
    }
}

function partition(arr, low, high,animations) {
    var i = low - 1;
    for(var j = low; j < high; j++) {
        animations.push(
            {
                action: "compare",
                idx1 : j,
                idx2: high
            }
        )
        if(arr[j] < arr[high]) {
            i++;
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            // swap(all_bars[j], all_bars[i]);
            animations.push(
                {
                    action : "swap",
                    idx1 : j,
                    idx2 : i
                }
            );
        }
    }
    i++;
    var temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;
    // swap(all_bars[high], all_bars[i]);

    animations.push(
        {
            action : "swap",
            idx1 : high,
            idx2 : i
        }
    );

    return i;
}