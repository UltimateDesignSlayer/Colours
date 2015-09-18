var colourApp = colourApp || {};

colourApp = {
	objColours:{
		red:{
			hex: "#ff0000",
			name: "Red"
		},
		blue:{
			hex: "#007fff",
			name: "Blue"
		},
		yellow:{
			hex: "#fff600",
			name: "Yellow"
		},
		green:{
			hex: "#0ff000",
			name: "Green"
		}		
	},
	
	objShapes:{
		circle:{
			name: "circle"
		},
		square:{
			name: "square"
		},
		triangle:{
			name: "triangle"
		}
	},
	
	colourLoop: function(){
		var that = this;
		for(obj in that.objColours){
			//need to refer to obj in [] as obj is a string 
			var currColour = new Colours(that.objColours[obj]);
			currColour.createSquare();
		}
	},
	
	shapeLoop: function(){
		var that = this;
		for(obj in that.objShapes){
			//need to refer to obj in [] as obj is a string 
			var currShape = new Shapes(that.objShapes[obj]);
			currShape.createShape();
		}
	},
	
	init: function(){
		var that = this;
		document.addEventListener("DOMContentLoaded", function(){
			that.colourLoop();
		});		
	}
}