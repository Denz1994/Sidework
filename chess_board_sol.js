var firstLine=" #";
var secLine="# ";
var size = 2;

//----------------------------------------------------
//generating the first line


if (size%2==1){			// if size is odd
  secLine=""
  	var lineSize=size-1;
	for (var i=0;i<((size/2)-1);i++){
		firstLine+=" #";
}
  firstLine+=" ";
}
else					// if size is even
  for (var i=0;i<((size/2)-1);i++){
		firstLine+=" #";
  };

//------------------------------------------------------



//----------------------------------------------------
//generating the second line


if (size%2==1){			//if size is odd
  	var lineSize=size- 1;
	for (var i=0;i<((size/2)-1);i++){
		secLine+="# ";
}
  secLine+="#";
}
else					//if size is even
  for (var i=0;i<((size/2)-1);i++){
		secLine+="# ";
  };

//------------------------------------------------------


//Now the lines have been generated.
//We can print these lines as many times as we want.

if (size%2==0)			//if the size is even
    for (var j = 1; j <= size/2; j++){
      	console.log(firstLine);
  		console.log(secLine);
    }

else{					//if the size is odd
    for (var j = 0; j <= (size/2)-1; j++){
  		console.log(firstLine);
  		console.log(secLine);
    }
	console.log(firstLine);
}
//This works as intended.
