var animations = [];

function merge_sort(arr) {
    // console.log(arr);
    animations = [];
    merge_sort_helper(arr, 0, arr.length-1, animations);
    // console.log(arr);
    animate(animations);
}

function merge_sort_helper(arr, low, high, animations) {
    if(low < high) {
        var mid = low + Math.floor((high-low)/2);
        merge_sort_helper(arr, low, mid, animations);
        for(var i =  low; i <= mid; i++) {
            animations.push({action: "color", idx1: i, color: "pink"});
        }
        merge_sort_helper(arr, mid+1, high, animations);
        for(var i =  mid+1; i <= high; i++) {
            animations.push({action: "color", idx1: i, color: "orange"});
        }
        merge(arr, low, mid, high, animations);
        // for(var i =  low; i <= high; i++) {
        //     animations.push({action: "color", idx1: i, color: "cyan "});
        // }
    } 
}

function merge(arr, low, mid, high, animations) {
    var l = low, r = mid+1;
    var temp = [...arr];
    // if(mid == 0) console.log(temp);
    var k = low;
    while(l <= mid && r <= high) {
        animations.push(
            {
                action: "compare", 
                idx1 : l,
                idx2 : r
            }
        );
        if(temp[l] < temp[r]) {
            
            animations.push(
                {
                    action: "overwrite",
                    idx1 : k,
                    value : temp[l],
                }
            );
        
            arr[k] = temp[l];
            l++;
        }
        else {
            animations.push(
                {
                    action: "overwrite",
                    idx1 : k,
                    value : temp[r],
                }
            );
            arr[k] = temp[r];
            r++;
        }
        k++;
    }
    while(l <= mid) {

        animations.push(
            {
                action: "overwrite",
                idx1 : k,
                value : temp[l],
            }
        );
        arr[k++] = temp[l++];
        // if(mid == 0) console.log(temp);
    }
    while(r <= high) {

        animations.push(
            {
                action: "overwrite",
                idx1 : k,
                value : temp[r],
            }
        );
        arr[k++] = temp[r++];
    }
}


async function animate(animations) {
    for (let todo of animations) {
  
      if (todo.action === "compare") {
        // changes the color of the two indexes being compared
        all_bars[todo.idx1].style.background = "red";
        all_bars[todo.idx2].style.background = "red";

        await new Promise((resolve) => setTimeout(resolve, 2000/no_of_bar));
  
        // // changes the colors back to original color
        all_bars[todo.idx1].style.background = "yellow";
        all_bars[todo.idx2].style.background = "yellow";
      } else if(todo.action === "swap") {
        await new Promise((resolve) => setTimeout(resolve, 120/no_of_bar));
        swap(all_bars[todo.idx1], all_bars[todo.idx2]);
      } 
      else if(todo.action === "color") {
        await new Promise((resolve) => setTimeout(resolve, 120/no_of_bar));
        all_bars[todo.idx1].style.background = todo.color;
      }
      else {
        // pauses the event loop to better visualize the algo
        await new Promise((resolve) => setTimeout(resolve, 120/no_of_bar));
  
        // overwrite idx1 with idx2, change color to sorted
        all_bars[todo.idx1].style.height = todo.value * 600;
        // all_bars[todo.idx1].style.background = "white";
      }
    }
    for(var i = 0; i < all_bars.length; i++) {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        all_bars[i].style.background = "white";
    }
}