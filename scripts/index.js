// **Chatbutton**//
//Selecteren geschikt element
const openChatButton = document.querySelector ('.chat-button')
const theSearch = document.querySelector ('.zoeken')
const sluitChat = document.querySelector ('.close-chat')

//Voeg event en functie toe
openChatButton.addEventListener('click', openSearch)


function openSearch() {
    theSearch.classList.add('toonSearch')
}

//**Sluit chat**//
sluitChat.addEventListener ('click', sluitChatMenu)

function sluitChatMenu() {
    theSearch.classList.remove('toonsearch') //in de functie verwijder de class van chat
}

 
//**add to wishlist**//
const addList = document.querySelector ('.save-button')
const popUpList = document.querySelector ('.pop-up')
const iconState = true; 

addList.addEventListener ('click', toonPopUp)

function toonPopUp() {
    popUpList.classList.add('show'); 
}

setTimeout(function() {
    popUpList.classList.remove('show'); //zorgt ervoor dat de class 'show' automatich verdwijnt na 5 sec (5000 milliseconden)
}, 5000);


