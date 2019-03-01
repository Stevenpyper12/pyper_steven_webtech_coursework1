<!--script partially based off https://stackoverflow.com/questions/3487263/how-to-use-onclick-or-onselect-on-option-tag-in-a-jsp-page -->
		
function Subsitition(type){
	if(type == '0')
	{
		var alphamap = new Map();
		alphamap = setupalpha();
		Subsitition_encrypt(alphamap); 
	}
}

function setupalpha(){
	var newalpha = document.getElementById("newalpha").value.toUpperCase();
	var orginalalpha = document.getElementById("orginalalpha").value.toUpperCase();
	var alphamap = new Map();
	
	for(i = 0; i < orginalalpha.length;i++)
	{
		alphamap.set(orginalalpha[i],newalpha[i])
	}
	return alphamap
}
function Subsitition_encrypt(alphamap){
	var plaintext = document.getElementById("inputtext").value.toUpperCase();
}
	
	
	
	
	
	
	
	
	