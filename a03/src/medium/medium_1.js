import {variance} from "./data/stats_helpers";


/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for( let i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
// console.log(getSum([1,2,3,4,5]));


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let sorted = array.sort(sortNumber);
    if (array.length % 2 === 1){
        return sorted[Math.ceil(array.length/2) -1];
    }else{
        return (sorted[array.length/2 -1]+sorted[array.length/2])/2;
    }
}
// console.log(getMedian([3,2,5,6,2,7,4,2,7,5]));
// console.log(getMedian([1,3,12,15,41,54,54]));
// 1 3 12 41 54 54

function sortNumber(a, b) {
    return a - b;
}



/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    return {
        length : array.length,
        sum : getSum(array),
        mean: getSum(array)/array.length,
        median: getMedian(array),
        min: Math.min(...array),
        max: Math.max(...array),
        variance: variance(array, getSum(array)/array.length),
        standard_deviation: Math.sqrt(variance(array, getSum(array)/array.length))
    }
}

// console.log(getStatistics([3,2,4,5,5,5,2,6,7]));
