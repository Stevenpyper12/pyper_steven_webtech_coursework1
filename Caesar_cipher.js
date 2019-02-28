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
	var ciphertext = "";
	var newletter = "";
	
	for(ch in plaintext)
	{
		//alert(plaintext[ch]);
		if(charset.includes(plaintext[ch]))
		{
			var newcharposition = +charset.indexOf(plaintext[ch]) + +key;
			if(newcharposition >= numchars)
			{
				newletter=charset.charAt(newcharposition-numchars);
			}else
			if(newcharposition < 0)
			{
				newletter=charset.charAt(numchars + newcharposition);
			}				
			else
			{
				newletter=charset.charAt(newcharposition);
			}
		}else
		if(plaintext[ch] == " ")
		{
			continue;
		}else
		{
			newletter=plaintext[ch];
		}
		ciphertext = ciphertext+newletter;	
	}
	document.getElementById("outputsoutput").innerHTML = "encrypted message is :" +ciphertext;
}