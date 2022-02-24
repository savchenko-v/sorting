function bubbleSorting(sortList) {
    for (var i = 0; i < sortList.length-1; i++) {
        for (var j = 0; j < sortList.length-i; j++) {
             if (sortList[j+1] < sortList[j]) {
                 const buffer = sortList[j+1];
                 sortList[j+1] = sortList[j];
                 sortList[j] = buffer;
             }
            //  console.log(sortList.join(','));
        }
        // console.log("------------");
    }
}

const sortList = [6, 12, 4, 3, 8, 13, 2, 100, 55, 37];
bubbleSorting(sortList);
console.log(sortList);