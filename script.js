function bubbleSorting(sortList) {  // сортировка пузырьком
    for (var i = 0; i < sortList.length-1; i++) {  // -1 чтобы уменьшить кол-во итераций
        for (var j = 0; j < sortList.length-i; j++) {  // -i чтобы уменьшить кол-во итераций
             if (sortList[j+1] < sortList[j]) {
                 const buffer = sortList[j+1];  // меняем элементы местами
                 sortList[j+1] = sortList[j];
                 sortList[j] = buffer;
             }
             console.log(sortList.join(','));
        }
        console.log("------------");
    }
}

const sortList = [6, 12, 4, 3, 8, 13, 2, 100, 55, 37];
bubbleSorting(sortList);
console.log(sortList);

function combSorting(arr) {  // сортировка расчёской
    var lenBetweenElem = Math.floor(arr.length/1.247);
    while (lenBetweenElem > 1) {
        for (var i = 0; i < arr.length-lenBetweenElem+1; i++) {  // arr.length-lenBetweenElem+1 = кол-во итераций на каждом цикле (уменьшили кол-во итераций в программе)
            if (arr[i] > arr[i+lenBetweenElem-1]) {
                const buffer = arr[i+lenBetweenElem-1]; 
                arr[i+lenBetweenElem-1] = arr[i];
                arr[i] = buffer;
            }
            console.log(arr.join(','));
            console.log(i);
        }
        lenBetweenElem = Math.floor(lenBetweenElem/1.247);
        console.log("------------");
    }
}

const arr = [6, 12, 4, 3, 8, 13, 2, 1, 2, 37];
bubbleSortingImprovement(arr);
console.log(arr);
