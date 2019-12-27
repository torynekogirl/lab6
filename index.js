initGame(document.querySelector('#game'));

function initGame(game){
	var size = 2;
 	var time = 4000;
	var field = game.querySelector('.field')
	var timeout;
	newGame();

	function newGame(){
		var cells = drawGameField(size, field);
		timeout = setTimeout(timeFunction, time);
	
		addActivate(cells);
	}

	function addActivate(cells){
		var counter = 1;
		for(var i = 0; i < cells.length; i++){
			cells[i].addEventListener('click', function(){
				if(this.innerHTML == counter){
					this.classList.add('active');

					if(counter == size * size){
						size++;
						clearGameField(field);
						clearTimeout(timeout);
						time*=2;
						newGame();
					}
					counter++;
				}
			});
			cells[i].style.backgroundColor = getRandomColor();
			var sizeBlock = getRandomInt(50, 100) + "px";
			console.log(sizeBlock);
			cells[i].style.width = sizeBlock;
			cells[i].style.height = sizeBlock;
		}
	}

	function timeFunction(){
		alert("You lose!");
		clearGameField(field);
		initGame(document.querySelector('#game'));
	}
}

function clearGameField(field){
	field.innerHTML = '';
}

function drawGameField (size, field){
	var from = 1;
	var to = size * size;

	var arr = [];
	arr = createArr(from, to);
	arr = shuffleArr(arr);
	arr = chunkArr(size, arr);
	return createCells(arr, field);

}	
	

function createCells(arr, elem) {
	var cells = [];
	for(var i = 0; i < arr.length; i++){
		var tr = document.createElement('tr');
		for(var e = 0; e < arr[i].length; e++){
			var td = document.createElement('td');
			td.innerHTML = arr[i][e];
			tr.appendChild(td);
			
			cells.push(td);
		}
		elem.appendChild(tr);
	}	

	return cells;
}


function createArr(from, to){
	var arr = [];
	for(var i = from; i <= to; i++){
		arr.push(i);
	}

	return arr
}

function shuffleArr(arr) {
	var result = [];
	var length = arr.length;

	for(var i = 0; i < length; i++){
		var random = getRandomInt(0, arr.length - 1);
		var elem = arr.splice(random, 1)[0];
		result.push(elem);
	}

	return result;
}

function chunkArr(n, arr){
	var result = [];
	var iterCount = Math.ceil(arr.length / n);
	for(var i = 0; i < iterCount; i++){
		var elems = arr.splice(0, n);
		result.push(elems);
	}

	return result;
}

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}