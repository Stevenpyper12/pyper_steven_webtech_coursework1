//<!--script partially based off https://stackoverflow.com/questions/3487263/how-to-use-onclick-or-onselect-on-option-tag-in-a-jsp-page -->	
function changecipher(){
	try{
		var selectedCypher = document.getElementById("selectbox").selectedIndex;
	}catch
	{

	}finally
	{
		if(selectedCypher == 1 || document.title == "Caesar Cipher Rot13"){
			Caesarselected();
		}else
		if(selectedCypher == 2||document.title == "Subsituation Cipher")	
		{
			Subsititionselected();
		}else
		{
			Morseselected();
		}
	}
}

function Caesarselected(){
	document.getElementById("MethodSelector").innerHTML = "<p>Here you can choose how you would like the Cipher to work, would you like it to encrypt or decrypt? Click the dropdown box to see options!</p>"
	document.getElementById("MethodSelector").innerHTML += "<br><select id = 'selectmethodbox' onchange='changemethod();'><option value='0' selected disabled>Please Chose Your Cipher Method</option><option value='1'>Encrypt</option><option value='2'>Decrypt</option><option value='3'>Crack</option><option value='4'>ROT13 Encrypt</option><option value='5'>ROT13 Decrypt</option></select>"
	
}

function Subsititionselected(){
	document.getElementById("MethodSelector").innerHTML = "Here you can choose how you would like the Cipher to work, would you like it to encrypt or decrypt? Click the dropdown box to see options!</p>"
	document.getElementById("MethodSelector").innerHTML += "<br><select id = 'selectmethodbox' onchange='changemethod();'><option value='0' selected disabled>Please Chose Your Cipher Method</option><option value='1'>Encrypt</option><option value='2'>Decrypt</option></select>"
/*
	document.getElementById("output").innerHTML += "<p><input type='text' id='inputtext' value=''> enter the text you want converted </p>"
	document.getElementById("output").innerHTML += "<button onclick='Subsitition(\"0\")'>Setup New Alphabet and encrypt</button>"	
	document.getElementById("output").innerHTML += "<button onclick='Subsitition(\"1\")'>setup old alphabet and decrypt</button>"	
*/
}

function Morseselected(){
	document.getElementById("MethodSelector").innerHTML = "<p>Here you can choose if you want to go from text to morse, or morse to text. Click the dropdown box to see options!</p>"
	document.getElementById("MethodSelector").innerHTML += "<br><select id = 'selectmethodbox' onchange='changemethod();'><option value='0' selected disabled>Please Chose Your Cipher Method</option><option value='1'>Convert To Morse</option><option value='2'>Convert To Text</option></select>"
/*
	document.getElementById("output").innerHTML = "<p><input type='text' id='inputtext' value=''> enter the text you want converted into morse</p>"
	document.getElementById("output").innerHTML += "<p><input type='text' id='inputmorse' value=''> enter the morse you want converted into text</p>"
	document.getElementById("output").innerHTML += "<button onclick='morse(\"0\")'>convert text to morse</button>"	
	document.getElementById("output").innerHTML += "<button onclick='morse(\"1\")'>convert morse to text</button>"	
	document.getElementById("output").innerHTML += "<button onclick='morse(\"2\")'>play converted morse as sound</button>"	
*/
}