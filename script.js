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
// let data = new Data;

// let data2 = JSON.stringify(data);
// console.log(JSON.parse(data2));
