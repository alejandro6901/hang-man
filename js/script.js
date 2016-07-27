var hangman = function (word,path) {
    this.word = word;
    this.path = path;
    this.contfails= 0;
    this.win = false;
    this.wordtemp = new Array(this.word.length).join('_ ');
    this.wordarray = word.split('');
    this.play = function(letter){
    for (var i = 0; i < this.wordarray.length; i++) {
    	if (this.wordarray[i] === letter) {
    	     this.searchletter(letter,i)
            
    	}else if(this.contfails < 6){
    		console.log(' no encontrada');
             this.contfails++;
             if (this.contfails === 6) {
             	console.log("perdio");

             }
    	}
    }
  }   
 this.searchletter = function (letter,i) {
 	 console.log('encontrada');
            this.wordtemp = this.wordtemp.split('')
            this.wordtemp[i] = this.wordarray[i];
            this.wordtemp = this.wordtemp.join('')
 }
  this.image = function() {
  	return this.path = this.contfails + '.png'
  }
};

var createObject = new hangman('HelloWord','../img/');
createObject.play('l');
console.log('Palabra:' +  createObject.word);
console.log('Resultado:' +  createObject.wordtemp);
console.log('Estado Juego:' +  createObject.win);
console.log("Intentos Fallidos:"+ createObject.contfails);
console.log('Image:' +  createObject.image());

