var bars = [];
var all_bars = [];
var no_of_bar;
var maxValue;
var flag = flag == null ? false: flag;
function init() {
    var arr_size = document.getElementById("arr_sz"); 
    arr_size.addEventListener("input", createBars);
    no_of_bar = arr_size.value;
    // var spd = document.getElementById("Speed");
    // speed = spd.value;
    // spd.addEventListener("input", animate(animations));

    bars = [];
    for(var i = 0; i < no_of_bar; i++) {
        bars.push(Math.floor(Math.random() * no_of_bar) + 1);
    } 
    maxValue = Math.max(...bars);
    for(var i = 0; i < no_of_bar; i++) {
        bars[i] = bars[i]/maxValue;
    }
    return bars;
}
function createBars() {
    var arr = init();
    all_bars = []
    // console.log(all_bars.length);
    for(var i = 0; i < no_of_bar; i++) {
        var d =  document.createElement("div");
        d.classList.add("bar");
        d.id = i;
        d.style.height = arr[i]*600;
        d.style.width = (960 / no_of_bar);
        d.style.margin = 120/no_of_bar;
        all_bars.push(d);
    } 

    document.getElementById("view").innerHTML = "";
    for(var i = 0; i < no_of_bar; i++) {
        document.getElementById("view").appendChild(all_bars[i]);
    }
}

function algo_call(algo_name) {
    
    console.log(flag);
    if(algo_name == 'bubble') {
        bubble_sort(bars);
    }
    else if (algo_name == 'selection') {
        // flag = true;
        selection_sort(bars);
    }
    else if(algo_name == 'insertion') {
        insertion_sort(bars);
        // flag = true;
    }
    else if (algo_name == 'quick') {
        quick_sort(bars); 
        // flag = true;
    }
    else if(algo_name == 'merge') {
        // flag = true;
        merge_sort(bars);
    }
    // flag = true;
    // animate(animations);
}