function showSidebar(){
    const sideBar = document.querySelector('aside')
    sideBar.style.display = 'flex'
}

function hideSideBar(){
    sideBar.style.display = 'none'
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

