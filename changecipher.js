<!--script partially based off https://stackoverflow.com/questions/3487263/how-to-use-onclick-or-onselect-on-option-tag-in-a-jsp-page -->	
function changecipher(){
	var selectedCypher = document.getElementById("selectbox").selectedIndex;
	if(selectedCypher =1){
		testadding();
	}
}
function testadding(){
	document.getElementById("output").innerHTML = "<p>this is a test</p>"
}