import mpg_data from "./data/mpg_data";
import {getStatistics, getSum} from "./medium_1";
import { findObject } from "../mild/mild_1";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

export const allCarStats = {
    avgMpg: getAvgMpg(mpg_data),
    allYearStats: getYearStats(mpg_data),
    ratioHybrids: getHybridRatio(mpg_data),
};

export function getAvgMpg(data){
    let sum_city = 0;
    let sum_high = 0;
    let cars = 0;

    data.forEach(function (car) {
        sum_city += car.city_mpg;
        sum_high += car.highway_mpg;
        cars++;
    });

    return {city: sum_city/cars, highway: sum_high/cars};
}

export function getYearStats(data){
    let years = Array();
    data.forEach(function (car) {
        years.push(car.year)
    });

    return getStatistics(years);
}
export function getHybridRatio(data){
    let hybrid = 0;
    data.forEach(function (car) {
        if (car.hybrid){
            hybrid++;
        }
    });

    return hybrid/data.length;
}

// console.log(allCarStats);

/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: getHybridMakers(mpg_data),
    avgMpgByYearAndHybrid: getMpgByYearAndHybrid(mpg_data)
};

export function getHybridMakers(cars){
    let makers = Array();
    let list = Array();

    cars.forEach(function (car) {
        if (car.hybrid){
            if (!findObject(car.make, makers)){
                makers.push(car.make)
                list.push({make: car.make, hybrids: [car.id]})
            }else{
                var found = list.find(element => element.make === car.make)
                found.hybrids = found.hybrids.concat([car.id])
            }
        }
    });

    let final = list.sort((a,b) => (a.hybrids.length < b.hybrids.length) ? 1 : (a.hybrids.length > b.hybrids.length) ? -1 : 0)
    return final ;
}
console.log(moreStats.avgMpgByYearAndHybrid);

export function getMpgByYearAndHybrid(cars){
    let years = cars.map(function (c) { return c.year; });
    let distinctYears = [...new Set(years)]
    let list = {};
    
    distinctYears.forEach(function (year) {
        let hybrid_cars = cars.filter(c => c.year===year && c.hybrid);
        let nonhybrid_cars = cars.filter(c => c.year===year && !c.hybrid);
        
        list[year] = {
            hybrid: getAvgMpg(hybrid_cars),
            notHybrid: getAvgMpg(nonhybrid_cars)
        }
    
    });
    return list;
}
// console.log(moreStats.avgMpgByYearAndHybrid);

