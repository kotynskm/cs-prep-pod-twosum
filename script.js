function twoSum(arr, target) {

    // pull out the first element of the arr
    let firstNum = arr[0];
    // find the difference between the target and the number at i, that's the number we need in our arr to meet the target value
    let difference = target - firstNum;
    // use indexOf to determine if this value exists in our array
    let indexOfTarget = arr.indexOf(difference);
    
    // if the number does not exist, indexOf will return -1
    if(indexOfTarget === -1){
        return false;
    }else{
        return true;
    }

}

function twoSumTests() {
  console.log(twoSum([1,2,5,7], 3), ' -> ', true);
  console.log(twoSum([1,2,5,7], 5), ' -> ', false);
  console.log(twoSum([1], 5), ' -> ', false);
  console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true);
}

twoSumTests() // uncomment to test

