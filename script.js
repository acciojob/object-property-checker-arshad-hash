const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let slot =sampleObject.keys();
	for(let i=0 ; i<key.length; i++)
		{
			if(slot[i]= key)
			{
			 return true;
				
			}
		} retun false;
	
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
