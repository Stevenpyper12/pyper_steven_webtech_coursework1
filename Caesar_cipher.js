charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numchars= charset.length;

function Caesar(type,key){
	//document.getElementById("output").innerHTML = "<p>this is a different test</p>"
	//defines how many shifts there should be to the chararcter set
	if(key == 0)
	{
		if(type == '3')
		{
			Caesar_encrypt(13);
		}else
		if(type == '4'){
			Caesar_decrypt(13);
		}
	}else
	{
		if(type == '0')
		{
			Caesar_encrypt(0);
		}else
		if(type == '1'){
			Caesar_decrypt(0);
		}
		else{
			Caesar_crack();
		}
	}
}

function Caesar_encrypt(key){
	if(key == 0)
	{
		key = document.getElementById("inputkey").value;
	}
	plaintext = document.getElementById("inputtext").value;
	plaintext = plaintext.toUpperCase();
	var message = "encrypting the text - " + plaintext + "with a key of -" + key;
	document.getElementById("Output_Area").innerHTML = message;
	var ciphertext = "";
	var newletter = "";
	
	for(ch in plaintext)
	{
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
		{
			newletter=plaintext[ch];
		}
		ciphertext = ciphertext+newletter;	
	}
	document.getElementById("Output_Area").innerHTML = "encrypted message is :" +ciphertext;
}

function Caesar_decrypt(key){
	if(key == 0)
	{
		key = document.getElementById("inputkey").value;
	}
	ciphertext = document.getElementById("inputtext").value;
	ciphertext = ciphertext.toUpperCase();
	var message = "decrypting the text - " + ciphertext + "with a key of -" + key;
	document.getElementById("Output_Area").innerHTML = message;
	var plaintext = "";
	var newletter = "";
	
	
	for(ch in ciphertext)
	{
		if(charset.includes(ciphertext[ch]))
		{
			
			var newcharposition = +charset.indexOf(ciphertext[ch]) - +key;
			if(newcharposition < 0)
			{
				newletter=charset.charAt(newcharposition+numchars);
			}else
			{
				newletter=charset.charAt(newcharposition);
			}
		}else{
			newletter= ciphertext[ch]
		}
		plaintext = plaintext+newletter;	
	}
	document.getElementById("Output_Area").innerHTML = "decrypted message is :" +plaintext;

}

function Caesar_crack(){
	ciphertext = document.getElementById("inputtext").value;
	ciphertext = ciphertext.toUpperCase();
	var message = "attempting to crack the text - " + ciphertext + "with all keys";
	document.getElementById("Output_Area").innerHTML = message;
	
	var plaintext = "<br>";
	var newletter = "";
	
	for(key in charset)
	{
		for(ch in ciphertext)
		{
			if(charset.includes(ciphertext[ch]))
			{
				var newcharposition = +charset.indexOf(ciphertext[ch]) - +key;
				if(newcharposition < 0)
				{
					newletter=charset.charAt(newcharposition+numchars);
				}else
				{
				newletter=charset.charAt(newcharposition);
				}
			}else{
				newletter= ciphertext[ch]
			}
			plaintext = plaintext+newletter;	
		}
		plaintext =plaintext + "<br>" ;
		document.getElementById("Output_Area").innerHTML = "decrypted message is :" +plaintext;
	}
}