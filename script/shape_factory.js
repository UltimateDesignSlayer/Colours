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
		var shapeContainer = document.createElement("div");
		var shape = document.createElement("div");
		shape.id = this.name;
		document.querySelector("#shapesContainer").appendChild(shapeContainer);
		shapeContainer.appendChild(shape);
		
		this.clickEvent(shape);
	}
}