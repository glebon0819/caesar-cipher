function caesarCipher(text, offset){
	this.text = text;
	this.offset = parseInt(offset);
	Object.defineProperty(this, 'text', {
    get: function() {
    	//console.log("Text retrieved.");
      return text;
    },
    set: function(value) {
      text = value;
      //console.log("Text set. Text = " + text);
    }
  });
  Object.defineProperty(this, 'offset', {
    get: function() {
    	//console.log("Offset retrieved.");
      return offset;
    },
    set: function(value) {
      offset = parseInt(value);
      //console.log("Offset set. Offset = " + offset);
      //archive.push({ val: temperature });
    }
  });
  this.encrypt = function(){
  	if(this.text !== undefined && this.text !== null){
	  	if(this.text.length > 0 && this.offset >= 0 && this.offset <= 25){
	  		//this.text.toLowerCase();
	  		
	  		var final_string = '';
	  		for(i = 0; i < this.text.length; i++){
	  			var pos = this.text.charCodeAt(i);
	  			if(this.text.charAt(i).match(/[a-z]/i)){
		  			var new_position = pos + this.offset;
		  			if(pos <= 122 && pos >= 97){
		  				if(new_position > 122){
				  			new_position = new_position - 26;
				  		}
				  		final_string += String.fromCharCode(new_position);
		  			}
		  			else if(pos <= 90 && pos >= 65){
		  				if(new_position > 90){
				  			new_position = new_position - 26;
				  		}
				  		final_string += String.fromCharCode(new_position);
		  			}
			  		
		  		} else {
		  			final_string += this.text.charAt(i);
		  		}
	  		}
	  		return final_string;
	  	} else {
	  		//console.log("Offset can only be an integer between 0 and 25.");
	  		return false;
	  	}
  	} else {
  		//console.log("Text box is empty.");
  		return false;
  	}
  }
  this.decrypt = function(){
  	if(this.text !== undefined && this.text !== null){
	  	if(this.text.length > 0 && this.offset >= 0 && this.offset <= 25){
	  		this.text.toLowerCase();
	  		var final_string = '';
	  		for(i = 0; i < this.text.length; i++){
	  			var pos = this.text.charCodeAt(i);
	  			if(this.text.charAt(i).match(/[a-z]/i)){
		  			var position = pos - this.offset;
		  			if(pos >= 97 && pos <= 122){
				  		if(position < 97){
				  			position = position + 26;
				  		}
				  		final_string += String.fromCharCode(position);
		  			}
		  			else if(pos >= 65 && pos <= 90){
		  				if(position < 65){
				  			position = position + 26;
				  		}
				  		final_string += String.fromCharCode(position);
		  			}
		  		} else {
		  			final_string += this.text.charAt(i);
		  		}
	  		}
	  		return final_string;
	  	} else {
	  		//console.log("Offset can only be an integer between 0 and 25.");
	  		return false;
	  	}
  	} else {
  		//console.log("Text box is empty.");
  		return false;
  	}
  }
}