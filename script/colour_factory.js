/**
COLOURS
This will create multiple square (as many as needed) and 
assign them colours depending on whats needed.
**/
//Colours - our constructor.
function Colours(objColour){
	this.name = objColour.name;
	this.hexCode = objColour.hex;	
}
 
Colours.prototype = {
	constructor: Colours,
	clickEvent:function(elem){
		//"that" carries "this" into the event listener scope
		var that = this;
		elem.addEventListener("click", function(){
			//If this colour is on
			if (this.className.search("on") != -1){
				this.className = this.className.replace(" on", "");
			}
			else{
				this.className += " on";
			}
		});
	},
	createSquare: function(){
	    var thisColour = document.createElement("div");
	    var colourSquareContainer = document.createElement("div");
		thisColour.innerHTML = this.name;
		thisColour.style.background = this.hexCode;
		thisColour.className = "colourSquare";
		colourSquareContainer.className = "col-sm-6 col-sm-4";
		colourSquareContainer.appendChild(thisColour);
		document.querySelector("#coloursContainer").appendChild(colourSquareContainer);
		
		this.clickEvent(thisColour);
	}
}