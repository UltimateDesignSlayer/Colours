/**
SHAPES
Create shapes
**/

//Shape constructor
function Shapes(objShapes){
	this.name = objShapes.name;
	this.noOfSides = objShapes.noOfSides;
}

Shapes.prototype = {
	constructor: Shapes,
	clickEvent: function(elem){
		console.log(this.name);
	},
	createShape: function(){
		var shape = document.createElement("div");
		shape.id = this.name;
		document.querySelector("#shapesContainer").appendChild(shape);
		
		this.clickEvent(shape);
	}
}