//<!--script partially based off https://stackoverflow.com/questions/3487263/how-to-use-onclick-or-onselect-on-option-tag-in-a-jsp-page -->	
function changecipher(){
	document.getElementById("output").innerHTML = ""
	document.getElementById("outputsoutput").innerHTML = ""
	document.getElementById("methodselection").innerHTML = ""
	var selectedCypher = document.getElementById("selectbox").selectedIndex;
	if(selectedCypher == 0){
	}else
	if(selectedCypher == 1){
		Caesarselected();
	}else
	if(selectedCypher == 2)	
	{
		Subsititionselected();
	}else
	{
		Morseselected();
	}
}

function Caesarselected(){
	document.getElementById("methodselection").innerHTML = "<select id = 'selectmethodbox' onchange='changemethod();'><option value='0' selected disabled>Please Chose Your Cipher Method</option><option value='1'>Encrypt</option><option value='2'>Decrypt</option><option value='3'>Crack</option></select>"

}

function Subsititionselected(){
	document.getElementById("methodselection").innerHTML = "<select id = 'selectmethodbox' onchange='changemethod();'><option value='0' selected disabled>Please Chose Your Cipher Method</option><option value='1'>Encrypt</option><option value='2'>Decrypt</option></select>"
/*
	document.getElementById("output").innerHTML = "<p><input type='text' id='orginalalpha' value=''> Enter th Alphabet(no duplicates)</p>"
	document.getElementById("output").innerHTML += "<p><input type='text' id='newalpha' value=''> Enter Your version of the Alphabet(no duplicates)</p>"
	document.getElementById("output").innerHTML += "<p><input type='text' id='inputtext' value=''> enter the text you want converted </p>"
	document.getElementById("output").innerHTML += "<button onclick='Subsitition(\"0\")'>Setup New Alphabet and encrypt</button>"	
	document.getElementById("output").innerHTML += "<button onclick='Subsitition(\"1\")'>setup old alphabet and decrypt</button>"	
*/
}

function Morseselected(){
	document.getElementById("output").innerHTML = "<p><input type='text' id='inputtext' value=''> enter the text you want converted into morse</p>"
	document.getElementById("output").innerHTML += "<p><input type='text' id='inputmorse' value=''> enter the morse you want converted into text</p>"
	document.getElementById("output").innerHTML += "<button onclick='morse(\"0\")'>convert text to morse</button>"	
	document.getElementById("output").innerHTML += "<button onclick='morse(\"1\")'>convert morse to text</button>"	
	document.getElementById("output").innerHTML += "<button onclick='morse(\"2\")'>play converted morse as sound</button>"	
}