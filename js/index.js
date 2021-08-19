// change color for top players and blogs
document.getElementById('top-player').style.color = 'tomato';
document.getElementById('top-blogs').style.color = 'DarkOrange';

// set background color in all player class 
const allPlayers = document.getElementsByClassName('player');
for(const player of allPlayers){
    player.style.backgroundColor = 'rgb(51, 255, 173)';
}

// add list item using clicked button 
document.getElementById('add-item').addEventListener('click', function(){
    const createItem = document.createElement('li');
    createItem.innerText = 'New Item';
    const parent = document.getElementById('ul-list');
    parent.appendChild(createItem);
});

// click plus button and number will increasing by one 
document.getElementById('plus').addEventListener('click', function(){
    // console.log('plus button clicked');
    const addNumber = document.getElementById('input');
    const convertNumber = parseInt(addNumber.value);
    const increasingNumber = convertNumber + 1;
    addNumber.value = increasingNumber;
    if(increasingNumber == 5){
        document.getElementById('plus').disabled = true;
    }


});