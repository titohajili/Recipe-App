
"use strict";


/**
 * 
 * import
 */

import { fetchData } from "./api";
import { $skeletonCard, cardQueries } from "./global";


 //Home page Search

 const $searchField = document.querySelector("[data-search-field]");
 const $searchBtn = document.querySelector("[data-search-btn]");

 $searchBtn.addEventListener("click", function () {
    if ( $searchField.value) window.location = `/recipes.html?q=${$searchField.value}`
 })

 //Search submit when press "Enter" key

 $searchField.addEventListener("keydown", e => {
    if (e.key === "Enter") $searchBtn.click();
 })

 // Tab panel navigation 

 const $tabBtns = document.querySelectorAll("[data-tab-btn]")
 const $tabPanels = document.querySelectorAll("[data-tab-panel]")

 let [$lastActiveTabPanel] = $tabPanels
 let [$lastActiveTabBtn] = $tabBtns

 addEventOnElements($tabBtns, "click", function () {
    $lastActiveTabPanel.setAttribute("hidden", "")
    $lastActiveTabBtn.setAttribute("aria-selected", false)
    $lastActiveTabBtn.setAttribute("tabindex", -1)

    const $currentTabPanel = document.querySelector(`#${this.getAttribute("aria-controls")}`)
    $currentTabPanel.removeAttribute("hidden")
    this.setAttribute("aria-selected", true)
    this.setAttribute("tabindex", 0)

    $lastActiveTabPanel = $currentTabPanel
    $lastActiveTabBtn = this;


    addTabContent(this, $currentTabPanel)
 })

 /**
  * Navigate Tab with arrow key
  */

 addEventOnElements($tabBtns, "keydown", function(e){
   const $nextElement = this.nextElementSibling;
   const $previousElement = this.$previousElementSibling

   if (e.key === "ArrowRight" && $nextElement){
      this.setAttribute("tabindex", -1)
      $nextElement.setAttribute("tabindex", 0)
      $nextElement.focus();
   } else if(e.key === "ArrowLeft" && $previousElement){
      this.setAttribute("tabindex", -1)
      $previousElement.setAttribute("tabindex", 0)
      $previousElement.focus();
   } else if (e.key === "Tab") {
      this.setAttribute("tabindex", -1)
      $lastActiveTabBtn.setAttribute("tabindex", 0)
      
   }
 });


 /**
  * WORK WITH API
  * fetch data for tab content
  */


 const addTabContent = ($currentTabBtn, $currentTabPanel) => {
   const $gridList = document.createElement("div");
   $gridList.classList.add("grid-list");

   $currentTabPanel.innerHTML = `
   
   <div class="grid-list">
   ${$skeletonCard.repeat(12)}
   </div>

   `;

   fetchData([['mealType', $currentTabBtn.textContent.trim().toLowerCase()], ...cardQueries], function (data) {

     

   })
 }

 addTabContent($lastActiveTabBtn, $lastActiveTabPanel)