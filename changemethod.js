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
				document.getElementById("output").innerHTML += "<button onclick='Caesar(\"0\")'>Encrypt</button>"

			}else
		if(selectedmethod == 2){
				document.getElementById("output").innerHTML = "<p><input type='text' id='inputtext' value=''>enter text you want decrypted</p>"
				document.getElementById("output").innerHTML += "<p><input type='text' id='inputkey' value=''>enter the key used to encrypt the text</p>"
				document.getElementById("output").innerHTML += "<button onclick='Caesar(\"1\")'>Decrypt(key Known)</button>"
	
			}else
			{
				document.getElementById("output").innerHTML = "<p><input type='text' id='inputtext' value=''>enter text you want to try and decrypt</p>"

				document.getElementById("output").innerHTML += "<button onclick='Caesar(\"2\")'>Decrypt(key not Known)</button>"

			}
	}else
	if(selectedCypher == 2)	
	{
		Subsititionselected();
	}else
	{
		Morseselected();
	}
}