const array = [12,34,54,3,4,77,65,87,33,23,21,76,56,55]

const findNthLargestNumber = (arr, n) => {
    let x = n;
    const largestArr = []
    const dumArr = [...arr]
    while(x>0) {
        const largestNum = Math.max(...dumArr);
        largestArr.push(largestNum);
        const LargestNumInd = dumArr.indexOf(largestNum);
        dumArr.splice(LargestNumInd,1);
        x--
    }
    console.log(largestArr);
    console.log(largestArr[n-1]);
}
findNthLargestNumber(array, 8)
