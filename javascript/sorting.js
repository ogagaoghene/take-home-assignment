const swap = function(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

function ArrayList() {
    const array = [];

    this.insert = function(item) {
        array.push(item);
    }

    this.toString = function() {
        return array.join();
    }

    this.bubbleSort = function() {
        for(let outer = 0; outer < array.length; outer++) {
            for(inner = 0; inner < array.length-1; inner++) {
                if(array[inner] > array[inner+1]) {
                    swap(array, inner, inner+1);
                }
            }
        }
    }
}

function createNonSortedArray(size){ //{6}
    const array = new ArrayList();
    for (var i = size; i> 0; i--){
        array.insert(i);
    }
    return array;
}

const array = createNonSortedArray(5); 
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());