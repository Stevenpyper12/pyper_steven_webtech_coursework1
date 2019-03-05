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
	var counter = 1000;
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
			//isfinished = setInterval(function,5000);
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
					//isfinished = setInterval(function{},500);
					
				}else
				if(morsetext[i] == "-"){
					oscillator.frequency.value = 500;
					//isfinished = setInterval(function,5000);
					
				}else
				{
					oscillator.frequency.value = 0;
					//isfinished = setInterval(function,10000);
					
				}
			}
			i++
			soundjustplayed = 1;
		}
	},500)
	
}	


	
	
	
	/*for(ch in morsetext)
	{
		//alert(morsetext[ch]);
		if(morsetext[ch] == ".")
		{
			timeoutthing(".",1000,oscillator)
		}else
		if(morsetext[ch] == "-")
		{
			timeoutthing("-",1000,oscillator)
			
		}else
		{
			timeoutthing(" ",1000,oscillator)
		}
	}


}*/
/*
function timeoutthing(oscillator)
{
	setTimeout(playsound,1000)

}
function playsound(character,oscillator)
{
	if(character == ".")
	{
		oscillator.frequency.value = 1000;
		
	}else
	if(character == "-"){
		oscillator.frequency.value = 500;
		
	}else
	{
		oscillator.frequency.value = 0;
	}
}
*/ 
	
/*
function playmorse(){
	
	var context = new (window.AudioContext || window.webkitAudioContext)();
	var dottime = 100;
	var dashtime = 300;
	var soundpitch = 550;
	var dashsound = ToneSound(context,dashtime,soundpitch);
	var source = context.createBufferSource();
	var source2 = context.createBufferSource();
	source.buffer = dashsound;
	source.connect(context.destination)
	var dottime = ToneSound(context,dottime,soundpitch)
	source2.buffer = dottime;
	source2.connect(context.destination)
	var allmorse = [];
	source.volume = 0;
	source2.volume = 0;
	source.start(0);
	source2.start(0);
	
	
	var morsetext = document.getElementById("inputmorse").value.toUpperCase();
	for(ch in morsetext)
	{
		//alert(morsetext[ch]);
		if(morsetext[ch] == ".")
		{
			source.volume = 0.5;
			setTimeout(1000)
			source.volume = 0;
		}else
		if(morsetext[ch] == "-"){
			source2.volume = 0.5;
			setTimeout(1000)
			source.volume = 0;
		}else
		{
			setTimeout(1000)
		}
	}
	
	
}
function ToneSound(context,time,pitch)
{
	var time = 100000;
	var soundbuffer = context.createBuffer(1,time,context.sampleRate);
	var data = soundbuffer.getChannelData(0);
	var frequency = pitch/context.sampleRate
	for(var i = 0;i < time;i++)
	{
		data[i] = Math.sin(frequency * i)
	}
	return soundbuffer;
	
}




*/
