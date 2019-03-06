function changemethod()
{
	var selectedmethod = document.getElementById("selectmethodbox").value;
	var selectedCypher = document.getElementById("selectbox").selectedIndex;
	if(selectedCypher == 0){
	}else
	if(selectedCypher == 1){
		
		if(selectedmethod == 1)
		{
			document.getElementById("output").innerHTML = "<p>enter text you want encrypted<br><input type='text' id='inputtext' value=''></p>"
			document.getElementById("output").innerHTML += "<p>enter how many times you want the alphabet offset(key)<br><input type='text' id='inputkey' value=''></p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Caesar(\"0\")'>Encrypt</button></p>"

		}else
		if(selectedmethod == 2){
			document.getElementById("output").innerHTML = "<p>enter text you want decrypted<br><input type='text' id='inputtext' value=''></p>"
			document.getElementById("output").innerHTML += "<p>enter the key used to encrypt the text<br><input type='text' id='inputkey' value=''></p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Caesar(\"1\")'>Decrypt</button></p>"
	
		}else
		{
			document.getElementById("output").innerHTML = "<p>enter text you want to try and decrypt<br><input type='text' id='inputtext' value=''></p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Caesar(\"2\")'>Crack</button></p>"
		}
	}else
	if(selectedCypher == 2)	
	{
		if(selectedmethod == 1)
		{
			document.getElementById("output").innerHTML = "<p>Enter the proper version of the alphabet(no duplicates)<br><input type='text' id='orginalalpha' value=''></p>"
			document.getElementById("output").innerHTML += "<p>Enter Your version of the Alphabet(key)(no duplicates)<input type='text' id='newalpha' value=''></p>"
			document.getElementById("output").innerHTML += "<p>enter the text you want converted<br><input type='text' id='inputtext' value=''></p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Subsitition(\"0\")'>Setup New Alphabet and encrypt</button></p>"	
		}else
		{
			document.getElementById("output").innerHTML = "<p>Enter the original version of the alphabet(no duplicates)<br><input type='text' id='orginalalpha' value=''></p>"
			document.getElementById("output").innerHTML += "<p>Enter Your modified version of the Alphabet(key)(no duplicates)<br><input type='text' id='newalpha' value=''></p>"
			document.getElementById("output").innerHTML += "<p>Enter the text you want converted<br><input type='text' id='inputtext' value=''></p>"
			document.getElementById("output").innerHTML += "<p><button onclick='Subsitition(\"1\")'>setup old alphabet and decrypt</button></p>"	

		}
	}else
	{
		if(selectedmethod == 1)
		{
			document.getElementById("output").innerHTML = "<p>enter the text you want converted into morse<br><input type='text' id='inputtext' value=''></p>"
			document.getElementById("output").innerHTML += "<button onclick='morse(\"0\")'>convert text to morse</button>"	
			document.getElementById("output").innerHTML += "<button onclick='morse(\"2\")'>play converted morse as sound</button>"	
			document.getElementById("output").innerHTML += "<button onclick='morse(\"3\")'>Stop Sound</button>"	
		}else
		{
			document.getElementById("output").innerHTML = "<p>enter the morse you want converted into text<br><input type='text' id='inputmorse' value=''></p>"
			document.getElementById("output").innerHTML += "<button onclick='morse(\"1\")'>convert morse to text</button>"	
			document.getElementById("output").innerHTML += "<button onclick='morse(\"2\")'>play morse as sound</button>"	
			document.getElementById("output").innerHTML += "<button onclick='morse(\"3\")'>Stop Sound</button>"	
		}			
		
	}
}