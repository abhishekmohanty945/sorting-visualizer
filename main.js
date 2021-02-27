var num = 100
var bars = [];
var all_bars = [];
function randomArray(){ 
    bars = [];
    for(var i = 0; i < num; i++) {
        bars.push(Math.floor(Math.random() * num) + 1);
    } 
    return bars;   
}

function createBars() {
    
    var arr = randomArray();
    // console.log(bars);
    bars1 = bars;

    all_bars = []
    for(var i = 0; i < num; i++) {
        var to_del = document.getElementById(i);
        if(to_del != null)to_del.remove();
        var d =  document.createElement("div");
        d.classList.add("bar");
        d.id = i;
        d.style.height = arr[i]*6;
        all_bars.push(d);
    } 


    for(var i = 0; i < num; i++) {
        document.getElementById("view").appendChild(all_bars[i]);
    }
        // console.log(bars);
}

function algo_call(algo_name) {
    // console.log(bars)
    if(algo_name == 'bubble') bubble_sort(bars);
    else if (algo_name == 'selection') selection_sort(bars);
    else if(algo_name == 'insertion') insertion_sort(bars);
    else if (algo_name == 'quick') quick_sort(bars);
    else if(algo_name == 'merge') merge_sort(bars);
    // console.log(bars);
}


// console.log(bars);