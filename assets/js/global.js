"use strict";

// 

/**
 * 
 * @param {NodeList} $elements 
 * @param {String} eventType 
 * @param {Function} callback 
 */

window.addEventOnElements = ($elements, eventType, callback) => {
    for (const $element of $elements) {
        $element.addEventListener(eventType, callback)
    }
}