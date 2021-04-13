/* 
if we keep the logic as indicated in the document
the multiples of 5 AND 7 will never show up.
Moving that condition to the top will do what 
it is requried.
*/
/* 
for (i=1;i<=100;i++)
{
  if (i % 5 == 0 && i % 7 == 0) {
    console.log("PowerCoders")
  } else if (i % 5 == 0){
    console.log("Power")
  } else if (i % 7 == 0 ) {
    console.log("Coders")
  } else {
    console.log(i)
  }
}*/

//Loop from 1 to 100, 1 step at a time.
for (i = 1; i <= 100; i++) {

    let output;
  
    //We assigned the current loop number
    output = i
  
    //evaluate conditions
    //please note that AND is at the bottom!!
    //moving to the bottom makes all alternatives work!
    if (i % 5 == 0) {
      output = "Power"
    }
    if (i % 7 == 0) {
      output = "Coders"
    }
    if (i % 5 == 0 && i % 7 == 0) {
      output = "Powercoders"
    }
    //finally set in console the variable
    console.log(output)
  }