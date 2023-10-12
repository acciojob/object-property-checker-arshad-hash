const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let slot =Object.keys(sampleObject);
	for(let i=0 ; i<slot.length; i++)
		{
			if(slot[i]== key)
			{
			 return true;
				 
			}
		} return false;
	
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
