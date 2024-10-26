/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";
/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback fuction
 */

window.ACCESS_POINT = "https://api.edamam.com/doc/open-api/recipe-search-v2.json";
const APP_ID = "6dc0e1b3";
const APP_KEY = "084d056f39d4e65b3e9dbd23477a5130";
const TYPE = "public";


export const fetchData = async function (queries, successCallback) {
    const query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B")


    const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const response = await fetch(url);

    if (response.ok){
        const data = await response.json();
        successCallback(data);
    }
}