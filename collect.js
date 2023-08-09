// ==UserScript==
// @name         Collect Items Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script um ÖL abzuholen
// @author       veg
// @match        *.freewar.de/freewar/internal/main.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function get_pos() {
        const fieldname = document.querySelector(".areadescription").id;
        return fieldname;
    }

    const fields = [
        "x103y117",
        "x77y85"
    ];

    function collect() {
        const currentPosition = get_pos();
        if (fields.includes(currentPosition)) {
            console.log("Went in");
            const mitnehmenLink = document.querySelector("a[href*='arrive_eval=drink']");
            if (mitnehmenLink) {
                mitnehmenLink.click();
                console.log("Item collected.");
            } else {
                console.log("No 'mitnehmen' link found.");
            }
            
            const minwait = 1000;
            const maxwait = 20000;
            const wait = Math.floor(Math.random() * (maxwait - minwait + 1) + minwait);
        } else {
            console.log("Not in a collectable field.");
        }
    }

    collect();

})();
