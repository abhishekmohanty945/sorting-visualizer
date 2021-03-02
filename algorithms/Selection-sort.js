var animations = [];

function selection_sort(bars){
    disableSortButtons();
    selection_sort_helper(bars);
    animate(animations);
}

function selection_sort_helper(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = i; j < arr.length; j++) {
            animations.push(
                {
                    action: "compare",
                    idx1: i,
                    idx2: j
                }
            )
            if(arr[j] < arr[i]) {
                var minimum = arr[i];
                arr[i] = arr[j];
                arr[j] = minimum;
                animations.push(
                    {
                        action: "swap",
                        idx1: i,
                        idx2: j
                    }
                )
            }
        }
        animations.push(
            {
                action: "color",
                idx1: i,
                color: "white"
            }
        );
    }
}