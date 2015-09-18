//v0.1

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
			console.log(that.name + " clicked");
		});
	},
	createSquare: function(){
		var thisColour = document.createElement("div");
		thisColour.innerHTML = this.name;
		thisColour.style.background = this.hexCode;
		thisColour.className = "colourSquare";
		document.body.appendChild(thisColour);
		
		this.clickEvent(thisColour);
	}
}
