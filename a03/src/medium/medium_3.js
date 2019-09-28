import mpg_data from "./data/mpg_data";
import { findObject } from "../mild/mild_1";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    return car_data.filter(c => c.horsepower >= minHorsepower && c.torque >= minTorque).sort(
        (a,b) => (a.horsepower < b.horsepower) ? 1 : (a.horsepower > b.horsepower) ? -1 : 0);
}

// console.log(searchHighPower(mpg_data, 600, 600))

/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    return car_data.filter(c => c.highway_mpg>=minHighway && c.city_mpg >= minCity).sort(
        (a,b) => (a.highway_mpg < b.highway_mpg) ? 1 : (a.highway_mpg > b.highway_mpg) ? -1 : 0);
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    let newterm = searchTerm.toLowerCase()
    return car_data.filter(c => c.id.toLowerCase().includes(newterm)).sort(
        (a,b) => (a.id.toLowerCase().indexOf(newterm) < b.id.toLowerCase().indexOf(newterm)) ? 1 : (a.id.toLowerCase().indexOf(newterm) > b.id.toLowerCase().indexOf(newterm)) ? -1 : 0);
}

// console.log(searchName(mpg_data, "HONDA"))

/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order. 
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    return car_data.filter(c => findObject(c.year, years)).sort(
        (a,b) => (a.year < b.year) ? 1 : (a.year > b.year) ? -1 : 0);

}

// console.log(searchByYear(mpg_data, [2011,2012]))
