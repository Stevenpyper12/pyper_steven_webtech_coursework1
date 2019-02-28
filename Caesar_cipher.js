charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numchars= charset.length;

function Caesar(){
	//document.getElementById("output").innerHTML = "<p>this is a different test</p>"
	
	//defines how many shifts there should be to the chararcter set
	var key = 0;
	var plaintext = "";
	var cipher = "";
	
	key = document.getElementById("inputkey").value;
	plaintext = document.getElementById("inputtext").value;
	
	Caesar_encrypt(plaintext,key);
}

function Caesar_encrypt(plaintext,key){
	plaintext = plaintext.toUpperCase();
	var message = "encrypting the text - " + plaintext + "with a key of -" + key;
	document.getElementById("outputsoutput").innerHTML = message;
	ciphertext = "";
	
	for(i = 0; i < plaintext.length; i++)
	{
		//alert(plaintext.charAt(i));
		if(charset.includes(plaintext.charAt(i)))
		{
			alert(plaintext.charAt(i));
		}
	}

}