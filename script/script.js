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
	
	colourLoop: function(){
		var that = this;
		for(obj in that.objColours){
			//need to refer to obj in [] as obj is a string 
			var currColour = new Colours(that.objColours[obj]);
			currColour.createSquare();
		}
	},
	
	init:function(){
		this.colourLoop();
	}
}