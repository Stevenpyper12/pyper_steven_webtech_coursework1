var morsemap = new Map()
.set(".-","A")
.set("-...","B")
.set("-.-.","C")
.set("-..","D")
.set(".","E")
.set("..-.","F")
.set("--.","G")
.set("....","H")
.set("..","I")
.set(".---","J")
.set("-.-","K")
.set(".-..","L")
.set("--","M")
.set("-.","N")
.set("---","O")
.set(".--.","P")
.set("--.-","Q")
.set(".-.","R")
.set("...","S")
.set("-","T")
.set("..-","U")
.set("...-","V")
.set(".--","W")
.set("-..-","X")
.set("-.--","Y")
.set("--..","Z")

var alphamap = new Map()
.set("A",".-")
.set("B","-...")
.set("C","-.-.")
.set("D","-..")
.set("E",".")
.set("F","..-.")
.set("G","--.")
.set("H","....")
.set("I","..")
.set("J",".---")
.set("K","-.-")
.set("L",".-..")
.set("M","--")
.set("N","-.")
.set("O","---")
.set("P",".--.")
.set("Q","--.-")
.set("R",".-.")
.set("S","...")
.set("T","-")
.set("U","..-")
.set("V","...-")
.set("W",".--")
.set("X","-..-")
.set("Y","-.--")
.set("Z","--..")

function morse(type)
{
	if(type == '0')
	{
		texttomorse()
	}else
	if(type == '1')
	{
		morsetotext()
	}else
	{
		playmorse()
	}
}

function texttomorse()
{
	var plaintext = document.getElementById("inputtext").value.toUpperCase();
	var morsetext = ""
	for(ch in plaintext)
	{
		if(plaintext[ch] == " ")
		{
			morsetext = morsetext + "&nbsp;&nbsp;"
		}else
		{
			morsetext=morsetext+alphamap.get(plaintext[ch])
			morsetext=morsetext+ " "
		}
	}
	document.getElementById("outputsoutput").innerHTML = "the morse text is " + morsetext 

}

function morsetotext()
{
	var plaintext = ""
	var morsetext = document.getElementById("inputmorse").value.toUpperCase();
	var singlemorse = ""
	var actualspace = false
	for(ch in morsetext)
	{
		if(morsetext[ch] == " " && morsetext[+ch - +1] == " ")
		{
			plaintext=plaintext+" "
		}
		else
		if(morsetext[ch] == " ")
		{
			plaintext=plaintext+morsemap.get(singlemorse)
			singlemorse=""
		}else
		{
			singlemorse = singlemorse+morsetext[ch]
		}
		/* 
		if(morsetext[ch] == "&nbsp")
		{
			if(morsetext[ch-1] == "&nbsp" )
			{
				plaintext=plaintext+morsemap.get(singlemorse)
				continue
			}else
			{
				plaintext = plaintext + " "
			}
		}else
		if(morsetext[ch]== " "){
			plaintext=plaintext+morsemap.get(singlemorse)
			singlemorse= ""
		}else
		{
			singlemorse = singlemorse+morsetext[ch]
		}
	*/
	}
	plaintext=plaintext+morsemap.get(singlemorse)
	document.getElementById("outputsoutput").innerHTML = "the plaintext is " + plaintext 

}

function playmorse(){
	var context
	window.AudioContext = window.AudioContext
	context = new AudioContext()
	
	
}