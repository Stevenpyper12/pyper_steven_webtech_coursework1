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
	 
	document.getElementById("outputsoutput").innerHTML = "the morse text is :" + morsetext 


}

function morsetotext()
{
	var plaintext = ""
	var morsetext = document.getElementById("inputmorse").value.toUpperCase();
	var singlemorse = ""
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

	}
	plaintext=plaintext+morsemap.get(singlemorse)
	document.getElementById("outputsoutput").innerHTML = "the plaintext is :" + plaintext 

}

function playmorse()
{
	var context = new (window.AudioContext || window.webkitAudioContext)();
	var oscillator = context.createOscillator();
	oscillator.connect(context.destination);
	oscillator.frequency.value = 0;
	oscillator.start(0);
	var morsetext = document.getElementById("inputmorse").value.toUpperCase();
	var i = 0;
	var soundjustplayed = 0;

	var dashjustplayed = 0;
	
	var isfinished = setInterval(function()
	{
		if(soundjustplayed == 1)
		{
			if(morsetext[i-1] == "-" && dashjustplayed == 0)
			{
				dashjustplayed = 1;
			}else
			{
			oscillator.frequency.value = 0;
			
			soundjustplayed = 0;
			dashjustplayed = 0;
			}
		}else
		{
			if(i >= morsetext.length)
			{
				oscillator.frequency.value = 0;
				clearInterval(isfinished);
			}else
			{
			
				if(morsetext[i] == ".")
				{
					oscillator.frequency.value = 1000;
					
					
				}else
				if(morsetext[i] == "-"){
					oscillator.frequency.value = 500;
					
					
				}else
				{
					oscillator.frequency.value = 0;
					
					
				}
			}
			i++
			soundjustplayed = 1;
		}
	},500)
	oscillator.pause()
}	

