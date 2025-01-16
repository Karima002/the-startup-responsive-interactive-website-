// Chatbutton
//Stap 1: selecteren geschikt element
const openChatButton = document.querySelector ('.chat-button')
const theSearch = document.querySelector ('.zoeken')

//Stap 2: voeg event en functie toe
openChatButton.addEventListener('click', openSearch)


function openSearch() {
    theSearch.classList.add('toonSearch')
}

//Stap 3: feedback aan de gebruiker --> CSS


