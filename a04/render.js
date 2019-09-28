/**
 * Course: COMP 426
 * Assignment: a04
 * Author: <type your name here>
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Generate HTML elements to represent the hero
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<div>${hero.name}</div>`;

    let element  = `
    <div class="card-box">
        <div class="header" style="background-color:${hero.backgroundColor};">
            <img class="hero-image" src="${hero.img}"></img>
            <h1 class="hero-title" style="color:${hero.color}">${hero.name}</h1>
        </div>
        <div class="card-body">
            <div class="text">
                <h3 class="subtitle">${hero.subtitle}</h3>
                <span class="details">
                    <p><b>Alter ego: </b> ${hero.first} ${hero.last}</p>
                    <p><b>First Apperance: </b> ${hero.firstSeen.toDateString()}</p>
                </span>
                <p> ${hero.description}</p>
            </div>
            <button class="edit">Edit</button>
        </div>
    </div>` ;

    return element;
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Generate HTML elements to represent the hero edit form
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<form>${hero.name}</form>`;

    let element  = `
    <div class="card-box">
        <div class="header" style="background-color:${hero.backgroundColor};">
            <img class="hero-image" src="${hero.img}"></img>
            <h1 class="hero-title">${hero.name}</h1>
        </div>
        <form class="card-body-edit">
            <div class=form-field>
                <label class="label">Hero Name</label>
                <input class="input" type="text" value="${hero.name}"></input>
            </div>
            <div class=form-field>
                <label class="label">First Name</label>
                <input class="input" type="text" value=${hero.first}></input>
            </div>
            <div class=form-field>
                <label class="label">Last Name</label>
                <input class="input" type="text" value=${hero.last}></input>
            </div>
            <div class=form-field>
                <label class="label">Subtitle</label>
                <input class="input" type="text" value=${hero.subtitle}></input>
            </div>

            <%- https://stackoverflow.com/questions/6040515/how-do-i-get-month-and-date-of-javascript-in-2-digit-format %>

            <div class=form-field>
                <label class="label">Last Seen</label>
                <input type="date" class="input" value="${hero.firstSeen.getFullYear()}-${("0"+hero.firstSeen.getMonth()).slice(-2)}-${("0"+hero.firstSeen.getDate()).slice(-2)}"></input>
            </div>
            <div class=form-field>
                <label class="label">Description</label>
                <textarea class="input">${hero.description}</textarea>
            </div>

            <button class="edit save" type="submit">Save</button>
            <button class="edit cancel">Cancel</button>
        </form>    
    </div>` ;

    return element;
};



/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 * @param heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    heroes.forEach(h => {
        // TODO: Append the hero cards to the $root element
        $root.append(renderHeroCard(h));
    });

    // Pick a hero from the list at random
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    // TODO: Generate the hero edit form using renderHeroEditForm()
    // TODO: Append the hero edit form to the $root element
    $root.append(renderHeroEditForm(randomHero))
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
