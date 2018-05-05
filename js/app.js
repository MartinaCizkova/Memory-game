let cardList = ['android', 'android', 'explorer', 'explorer', 'firefox', 'firefox', 'chrome', 'chrome', 'netscape', 'netscape', 'opera', 'opera', 'safari', 'safari', 'shiira', 'shiira'];
const elem = document.getElementById('decking');

function createCards() {
  for (let i = 0; i < cardList.length; i++) {
    const newLi = document.createElement('li');
    newLi.classList.add('card');
    newLi.classList.add(cardList[i])

    const newI1 = document.createElement('div');
    newI1.classList.add('back');
    newI1.classList.add('back-' + cardList[i]);

    const newI2 = document.createElement('div');
    newI2.classList.add('front');
    newI2.classList.add('front-' + cardList[i]);

    const backImage = document.createElement('img');
    backImage.src = "img/back.jpg";

    const frontImage = document.createElement('img');
    frontImage.src = "img/" +cardList[i]+ ".jpg";

    newI1.appendChild(backImage);
    newI2.appendChild(frontImage);
    newLi.appendChild(newI2);
    newLi.appendChild(newI1);
    elem.appendChild(newLi);
  }
}

createCards();

const allCards= document.getElementsByClassName('card');

for (var i = 0; i < allCards.length; i++) {
    let clickedCard = allCards[i];
    clickedCard.addEventListener('click', function() {
    clickedCard.classList.add('open');
});
}


/*
 * Create a list that holds all of your cards
 *
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
*/

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}


var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});


var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
    points.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("demo").innerHTML = points;
}


function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));


 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)

var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
 var memory_values = [];
 var memory_tile_ids = [];
 var tiles_flipped = 0;

 function newBoard() {
 tiles_flipped = 0;
 memory_array = _.shuffle(memory_array);
 var output = '';
 _.forEach(memory_array, function(memory_array_value, index) {
 output += '<div id="tile_'+ index +'" onclick="memoryFlipTile(this,\''+ memory_array_value +'\')"></div>';
 });
 document.getElementById('memory_board').innerHTML = output;
}





var options = ['Option 1','Option 2'];

function makeUL() {
    var a = '<ul>',
        b = '</ul>',
        m = [];

    // Right now, this loop only works with one
    // explicitly specified array (options[0] aka 'set0')
    for (i = 0; i < options.length; i++) {
        m[i] = '<li>' + options[i] + '</li>';
    }

    document.getElementById('foo').innerHTML = a + m + b;
}

// My goal is to be able to pass a variable
// here to utilize this function with different arrays
makeUL();


let cardList = ['android', 'android', 'explorer', 'explorer', 'firefox', 'firefox', 'chrome', 'chrome', 'netscape', 'netscape', 'opera', 'opera', 'safari', 'safari', 'shiira', 'shiira'];

function makeCards() {
	let m = [];

	for (i = 0; i < cardList.length; i++) {
        m[i] = '<li class="card"><i class="fa fa-' + cardList[i] + '"></i></li>';
    }
    document.getElementsByClassName('deck').innerHTML = m;
}

makeCards();








var options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('foo').appendChild(makeUL(options[0]));
*/