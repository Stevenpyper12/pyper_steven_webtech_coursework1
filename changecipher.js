//<!--script partially based off https://stackoverflow.com/questions/3487263/how-to-use-onclick-or-onselect-on-option-tag-in-a-jsp-page -->	
function changecipher(){
	var selectedCypher = document.getElementById("selectbox").selectedIndex;
	if(selectedCypher == 0){
		testadding0();
	}else
	if(selectedCypher == 1){
		testadding1();
	}else
	{
		testadding2();
	}
}
function testadding0(){
	document.getElementById("output").innerHTML = "<p>this is a test</p>"
	alert("adding")
}

function testadding1(){
	document.getElementById("output").innerHTML = "<p><input type='text' id='inputtext' value=''>enter text you want encrypted or decrypted</p>"
	document.getElementById("output").innerHTML += "<p><input type='text' id='inputkey' value=''>enter how many times you want the alphabet offset(key)(can be positive or negative,your key is the exact same for encrpytion and decyption(6 while encryption and 6 while decypting )</p>"
	document.getElementById("output").innerHTML += "<button onclick='Caesar(\"0\")'>Encrypt</button>"
	document.getElementById("output").innerHTML += "<button onclick='Caesar(\"1\")'>Decrypt(key Known)</button>"

}
function testadding2(){
	document.getElementById("output").innerHTML = "<p>this is a test</p>"
}