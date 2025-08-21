var merge = function(nums1, m, nums2, n) {
    // combine the two array into one array in ascending order
    let tempArr = new Array(m + n);

    for (let i = 0; i < m; i++) {
        tempArr[i] = nums1[i];
    }
    for (let j= 0; j < n; j++) {
        tempArr[j+m] = nums2[j];
    }
    return tempArr.sort((a, b) => a - b);
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
