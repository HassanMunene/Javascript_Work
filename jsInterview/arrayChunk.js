let parentArr = [];

function chunkArray(arr, num) {
    let newArr = []
    for (let i = 0; i < num; i++) {
        console.log(arr);
        let ele = arr.shift();
        newArr.push(ele);
        if (arr.length === 0) {
            break;
        }
    }
    parentArr.push(newArr)
    if (arr.length === 0) {
        return;
    }
    chunkArray(arr, num);
    return parentArr;
}

const ans = chunkArray([1,2,3,4,5,6,7,8, 9], 3);
console.log(ans);