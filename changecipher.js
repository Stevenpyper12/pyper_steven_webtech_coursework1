//<!--script partially based off https://stackoverflow.com/questions/3487263/how-to-use-onclick-or-onselect-on-option-tag-in-a-jsp-page -->	
function changecipher(){
	document.getElementById("output").innerHTML = ""
	document.getElementById("outputsoutput").innerHTML = ""
	var selectedCypher = document.getElementById("selectbox").selectedIndex;
	if(selectedCypher == 0){
		testadding0();
	}else
	if(selectedCypher == 1){
		Caesarselected();
	}else
	{
		Subsititionselected();
	}
}

function testadding0(){
	document.getElementById("output").innerHTML = "<p>this is a test</p>"
	alert("adding")
}

function Caesarselected(){
	document.getElementById("output").innerHTML = "<p><input type='text' id='inputtext' value=''>enter text you want encrypted or decrypted</p>"
	document.getElementById("output").innerHTML += "<p><input type='text' id='inputkey' value=''>enter how many times you want the alphabet offset(key)(can be positive or negative,your key is the exact same for encrpytion and decyption(6 while encryption and 6 while decypting )</p>"
	document.getElementById("output").innerHTML += "<button onclick='Caesar(\"0\")'>Encrypt</button>"
	document.getElementById("output").innerHTML += "<button onclick='Caesar(\"1\")'>Decrypt(key Known)</button>"
	document.getElementById("output").innerHTML += "<button onclick='Caesar(\"2\")'>Decrypt(key not Known)</button>"

}

function Subsititionselected(){
	document.getElementById("output").innerHTML = "<p><input type='text' id='orginalalpha' value=''> Enter Your proper Alphabet(no duplicates)</p>"
	document.getElementById("output").innerHTML += "<p><input type='text' id='newalpha' value=''> Enter Your version of the Alphabet(no duplicates)</p>"
	document.getElementById("output").innerHTML += "<p><input type='text' id='inputtext' value=''> enter the text you want converted </p>"
	
	document.getElementById("output").innerHTML += "<button onclick='Subsitition(\"0\")'>Setup New Alphabet</button>"	

}
