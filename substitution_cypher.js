
function Subsitition(type){
	var alphamap = new Map();
	if(type == '0')
	{
		alphamap = setupalphaencrypt();
		Subsitition_encrypt(alphamap)
	}
	else
	if(type == '1'){
		alphamap = setupalphadecrypt();
		Subsitition_decrypt(alphamap)
	}
	
}

function setupalphaencrypt(){
	var newalpha = document.getElementById("newalpha").value.toUpperCase();
	var orginalalpha = document.getElementById("orginalalpha").value.toUpperCase();
	var alphamap = new Map();
	
	for(i = 0; i < orginalalpha.length;i++)
	{
		alphamap.set(orginalalpha[i],newalpha[i])
	}
	return alphamap
}

function setupalphadecrypt(){
	var newalpha = document.getElementById("newalpha").value.toUpperCase();
	var orginalalpha = document.getElementById("orginalalpha").value.toUpperCase();
	var alphamap = new Map();
	
	for(i = 0; i < orginalalpha.length;i++)
	{
		alphamap.set(newalpha[i],orginalalpha[i])
	}
	return alphamap
}
function Subsitition_encrypt(alphamap){
	var plaintext = document.getElementById("inputtext").value.toUpperCase();
	var encryptedtext = ""
	for(ch in plaintext)
	{
		if(plaintext[ch] == " ")
		{
			encryptedtext=encryptedtext+ " "
		}else
		{
			encryptedtext=encryptedtext+alphamap.get(plaintext[ch])
		}
	}
	document.getElementById("outputsoutput").innerHTML = "the encrypted text is " + encryptedtext 
}
	
function Subsitition_decrypt(alphamap){	
	var encryptedtext = document.getElementById("inputtext").value.toUpperCase();
	var plaintext = ""
	for(ch in encryptedtext)
	{
		if(encryptedtext[ch] == " ")
		{
			plaintext=plaintext+ " "
		}else
		{
			plaintext=plaintext+alphamap.get(encryptedtext[ch])
		}
	}
	document.getElementById("outputsoutput").innerHTML = "the decrypted text is " + plaintext 

}
	
	
	
	
	
	
	