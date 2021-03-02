var animations = [];
function bubble_sort(bars) {
    animations = []
    disableSortButtons();
    bubble_sort_helper(bars);
    // console.log(bars*maxValue);
    animate(animations);
}



function bubble_sort_helper(bars) {
    var arr = bars;
    for(var i = 0; i < bars.length; i++) {
        for(var j = 0; j < bars.length-1 - i; j++) {
            // if(all_bars[j].style.background != "white") all_bars[j].style.background = "red";
            // if(all_bars[j+1].style.background != "white") all_bars[j+1].style.background = "red";
            animations.push(
                {
                    action: "compare",
                    idx1: j,
                    idx2: j+1
                }
            )
            if(arr[j] > arr[j+1]) {
                // await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                // swap(all_bars[j], all_bars[j+1]);
                animations.push(
                    {
                        action: "swap",
                        idx1: j,
                        idx2: j+1
                    }
                )
            }
            // if(all_bars[j].style.background != "white") all_bars[j].style.background = "yellow";
            // if(all_bars[j+1].style.background != "white") all_bars[j+1].style.background = "yellow";
        }
        // all_bars[num-1-i].style.background = "white";
    }
    // all_bars[0].style.background = "white";

}

function swap(a, b) {

    const style1 = window.getComputedStyle(a);
    const style2 = window.getComputedStyle(b);

    const h1 = style1.getPropertyValue("height");
    const h2 = style2.getPropertyValue("height");

    a.style.height = h2;
    b.style.height = h1;
}
