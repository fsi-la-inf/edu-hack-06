const card = document.getElementById('card');
const dropZone = document.getElementById('drop-zone');
card.addEventListener('dragstart', function(event) {
	console.log(event)
})
dropZone.addEventListener('dragover', function(event) {
	event.preventDefault()
})
dropZone.addEventListener('drop', function(event) {
	dropZone.prepend(card)
})

var myPet = 'Tobey';
var nameLength = myPet.length;

document.getElementById('output').innerHTML =
    myPet + ' is a ' + nameLength + ' letter name!';
