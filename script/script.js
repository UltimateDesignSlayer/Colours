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
		//Reset container in case this function is run after page has loaded.
		document.getElementById("coloursContainer").innerHTML = "";
	
		var that = this;
		for(obj in that.objColours){
			//need to refer to obj in [] as obj is a string 
			var currColour = new Colours(that.objColours[obj]);
			currColour.createSquare();
		}
	},
	
	//All three params are expected to be strings
	addColour: function(objName, hexCode, name){
		var subColourObj = {
			hex: hexCode,
			name: name
		};

		colourApp.objColours[objName] = subColourObj;
		this.colourLoop(); //run the colour factory again
	},
	
	shapeLoop: function(){
		var that = this;
		for(obj in that.objShapes){
			//need to refer to obj in [] as obj is a string 
			var currShape = new Shapes(that.objShapes[obj]);
			currShape.createShape();
		}
	},

	events:function(){
	    var that = this;

        //add colour button click
	    var addColourBtn = document.getElementById("submitColour");
	    var colourNameField = document.getElementById("colourName");
	    var colourHexField = document.getElementById("colourHex");

	    addColourBtn.addEventListener("click", function () {
	        that.addColour(colourNameField.value, colourHexField.value, colourNameField.value);
	    });
	},

	
	init: function(){
		var that = this;
		document.addEventListener("DOMContentLoaded", function(){
			that.colourLoop();
			that.shapeLoop();
			that.events();
		});		
	}
}

colourApp.init();