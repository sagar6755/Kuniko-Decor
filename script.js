"use strict"


function showSidebar() {
    const sideBar = document.querySelector('aside')
    sideBar.style.display = 'flex'
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
};

function hideSideBar() {
    sideBar.style.display = 'none'
    const body = document.querySelector('body');
    body.style.overflow = 'scroll';
};

function showSearchBar() {
    const searchBar = document.querySelector('.search-bar')
    searchBar.style.display = 'flex'

}
function hideSearchBar() {
    const searchBar = document.querySelector('.search-bar')

    searchBar.style.display = 'none'
}

function searchBarIcon() {
    const searchBar = document.querySelector('.search-bar')


    if (searchBar.style.display === 'none' || searchBar.style.display === '') {

        showSearchBar();
    }

    else if (searchBar.style.display === 'flex') {
        hideSearchBar();

    }
}




function addCart() {
    alert('Added Successfully')
}