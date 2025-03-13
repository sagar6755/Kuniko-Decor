"use strict"
//  import Data from './data.js';

function showSidebar(){
    const sideBar = document.querySelector('aside')
    sideBar.style.display = 'flex'
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
}

function hideSideBar(){
    sideBar.style.display = 'none'
    const body = document.querySelector('body');
    body.style.overflow = 'scroll';
}

function showSearchBar(){
    const searchBar = document.querySelector('.search-bar')
    searchBar.style.display = 'flex'

}
function hideSearchBar(){
    const searchBar = document.querySelector('.search-bar')
 
    searchBar.style.display = 'none'
}

function searchBarIcon(){
    const searchBar = document.querySelector('.search-bar')

    
    if (searchBar.style.display === 'none'|| searchBar.style.display === ''){

        showSearchBar();
    }
    
    else if (searchBar.style.display === 'flex') {
        hideSearchBar();
        
    }
}

// autocomplete search bar

const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

// Sample data for autocomplete
const items = ["Toran", "Decoration Items", "Hanging items", "wall Decoration", "Door decoration", "Home decoration", "Mango", "Orange", "Peach", "Strawberry", "Watermelon"];

searchInput.addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    suggestionsBox.innerHTML = "";
    
    if (searchValue) {
        const filteredItems = items.filter(item => item.toLowerCase().startsWith(searchValue));

        if (filteredItems.length > 0) {
            suggestionsBox.style.display = "block";
            filteredItems.forEach(item => {
                const div = document.createElement("div");
                div.textContent = item;
                div.addEventListener("click", () => {
                    searchInput.value = item;
                    suggestionsBox.style.display = "none";
                });
                suggestionsBox.appendChild(div);
            });
        } else {
            suggestionsBox.style.display = "none";
        }
    } else {
        suggestionsBox.style.display = "none";
    }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function(e) {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.style.display = "none";
    }
});
