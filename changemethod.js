function changemethod()
{
	var selectedmethod = document.getElementById("selectmethodbox").value;
	var selectedCypher = document.getElementById("selectbox").selectedIndex;
	if(selectedCypher == 0){
	}else
	if(selectedCypher == 1){
		
		if(selectedmethod == 1)
		{
			document.getElementById("output").innerHTML = "<p><input type='text' id='inputtext' value=''>enter text you want encrypted</p>"
			document.getElementById("output").innerHTML += "<p><input type='text' id='inputkey' value=''>enter how many times you want the alphabet offset(key)</p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Caesar(\"0\")'>Encrypt</button></p>"

		}else
		if(selectedmethod == 2){
			document.getElementById("output").innerHTML = "<p><input type='text' id='inputtext' value=''>enter text you want decrypted</p>"
			document.getElementById("output").innerHTML += "<p><input type='text' id='inputkey' value=''>enter the key used to encrypt the text</p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Caesar(\"1\")'>Decrypt(key Known)</button></p>"
	
		}else
		{
			document.getElementById("output").innerHTML = "<p><input type='text' id='inputtext' value=''>enter text you want to try and decrypt</p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Caesar(\"2\")'>Decrypt(key not Known)</button></p>"
		}
	}else
	if(selectedCypher == 2)	
	{
		if(selectedmethod == 1)
		{
			document.getElementById("output").innerHTML = "<p><input type='text' id='orginalalpha' value=''> Enter the proper version of the alphabet(no duplicates)</p>"
			document.getElementById("output").innerHTML += "<p><input type='text' id='newalpha' value=''> Enter Your version of the Alphabet(key)(no duplicates)</p>"
			document.getElementById("output").innerHTML += "<p><input type='text' id='inputtext' value=''> enter the text you want converted</p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Subsitition(\"0\")'>Setup New Alphabet and encrypt</button></p>"	
		}else
		{
			document.getElementById("output").innerHTML = "<p><input type='text' id='orginalalpha' value=''> Enter the original version of the alphabet(no duplicates)</p>"
			document.getElementById("output").innerHTML += "<p><input type='text' id='newalpha' value=''> Enter Your modified version of the Alphabet(key)(no duplicates)</p>"
			document.getElementById("output").innerHTML += "<p><input type='text' id='inputtext' value=''> enter the text you want converted</p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Subsitition(\"1\")'>setup old alphabet and decrypt</button></p>"	

		}
	}else
	{
		Morseselected();
	}
}