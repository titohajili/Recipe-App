

"use strict";


window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "4bc0ec36";
const APP_KEY = "0dbd63b99591be93d85897c3f009a4ad";
const TYPE = "public";


export const fetchData = async function (queries, successCallback) {
    const query = queries?.join("&")
       .replace(/,/g, "=")
       .replace(/ /g, "%20")
       .replace(/\+/g, "%2B");

    const url = `${ACCESS_POINT}?${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}